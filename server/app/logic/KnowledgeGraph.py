from urllib import request
from utils import extract_zip, read_file
import os
from pathlib import Path
from llama_index.core import SimpleDirectoryReader
from llama_index.core import KnowledgeGraphIndex
from llama_index.core import Settings
from llama_index.core.graph_stores import SimpleGraphStore
from llama_index.core import StorageContext
from llama_index.llms.huggingface import HuggingFaceInferenceAPI
from langchain.embeddings import HuggingFaceEmbeddings
from llama_index.embeddings.langchain import LangchainEmbedding
from langchain_community.embeddings import (
    HuggingFaceInferenceAPIEmbeddings,
)
from langchain_community.document_loaders import DirectoryLoader,TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter


class KnowledgeGraph:
    def __init__(self, repo_path:str, download_path:Path, extract_path:Path):
        self.repo_path = repo_path
        self.download_path = download_path
        self.extract_path = extract_path

    """the .git file is downloaded as .zip file in local machine, so unziping and extracting the files
        in preffered destination location"""

    def download_and_extract_repo(self):
        if(not(os.path.exists(self.download_path)) or os.getsize(self.download_path)==0):
            self.download_path = request.urlretrieve(url=self.repo_path, filename=self.download_path)
        extract_zip(self.download_path, self.extract_path)

    """ As it is a v_1 of code retrieval task using KG, converting all the files in a repo to .txt file
        would be better because a repo contains different formats of files and directories"""

    def convert_files_to_txt(self, src_dir, dst_dir):
        # If the destination directory does not exist, create it.
        if not os.path.exists(self.dst_dir):
            os.makedirs(self.dst_dir)
        
        for root, dirs, files in os.walk(self.src_dir):
            for file in files:
                if not file.endswith('.jpg'):
                    file_path = os.path.join(root, file)
                    rel_path = os.path.relpath(file_path, src_dir)
                    
                    # Create the same directory structure in the new directory
                    new_root = os.path.join(self.dst_dir, os.path.dirname(rel_path))
                    os.makedirs(new_root, exist_ok=True)
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            data = f.read()
                    except UnicodeDecodeError:
                        try:
                            with open(file_path, 'r', encoding='latin-1') as f:
                                data = f.read()
                        except UnicodeDecodeError:
                            print(f"Failed to decode the file: {file_path}")
                            continue
                    
                    # Create a new file path with .txt extension
                    new_file_path = os.path.join(new_root, file + '.txt')
                    with open(new_file_path, 'w', encoding='utf-8') as f:
                        f.write(data)
    
    # Call the function with the source and destination directory paths
    convert_files_to_txt('PATH TO EXTRACTED REPO', 'converted_codebase')

    #Loading the documents in Documents format
    documents = SimpleDirectoryReader("PATH TO EXTRACTED REPO").load_data()

    """ Due to memory constraints in my local machine, I'm accessing HuggingFace models through an API, which is prone to data breaches.
        Models can be finetuned and run locally in GPU powered machines."""
    
    HF_TOKEN = "YOUR HUGGINGFACE TOKEN"
    llm = HuggingFaceInferenceAPI(
        model_name="HuggingFaceH4/zephyr-7b-beta", token=HF_TOKEN)       # StarCoder15b, Deepseek models can be used for better results
    embed_model = LangchainEmbedding(
    HuggingFaceInferenceAPIEmbeddings(api_key=HF_TOKEN,model_name="thenlper/gte-large")
    )

    def answer_gen(self):
        #setup the service context (global setting of LLM)
        Settings.llm = self.llm
        Settings.chunk_size = 512

        #setup the storage context
        graph_store = SimpleGraphStore()                #Neo4J graph DBs can also be used in GPU powered workstations for faster retrieval
        storage_context = StorageContext.from_defaults(graph_store=graph_store)

        #Construct the Knowlege Graph Undex
        index = KnowledgeGraphIndex.from_documents(documents=self.documents,
                                                max_triplets_per_chunk=3,
                                                storage_context=storage_context,
                                                embed_model=self.embed_model,
                                                include_embeddings=True)
        query = "how to add any custom pydantic model for my use case?"
        query_engine = index.as_query_engine(include_text=True,
                                            response_mode ="tree_summarize",
                                            embedding_mode="hybrid",
                                            similarity_top_k=5,)
        #
        message_template =f"""<|system|>Please answer the questions according the given keywords.If not then don't know the answer, just say that you don't know.Stop there.Please donot try to make up an answer.</s>
        <|user|>
        Question: {query}
        Helpful Answer:
        </s>"""
        response = query_engine.query(message_template)
        #
        return response.response.split("<|assistant|>")[-1].strip()