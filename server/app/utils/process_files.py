from transformers import BertTokenizer, BertModel
from utils.create_embeddings import embedding
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertModel.from_pretrained(model_name)

embedding_List = []

def process_file(file_path):
    
    with open(file_path, 'r', encoding='utf-8') as file:

        prompt_text = file.read()
        # Process the file here
        print(prompt_text)

        result = embedding(prompt_text)

        embedding_List.append(result)
        # print(result)
        # Process the file here
        # print(prompt_text)

    print(embedding_List)