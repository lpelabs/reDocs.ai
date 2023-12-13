import os
from queue import Queue

from utils.process_files import process_file

from logic.infinite_gpt import process_chunks, call_openai_api_higher_tokens, mock_chunks_gpt

from logic.convert_embeddings import convert_embeddings, clustering

from config import SHOULD_MOCK_AI_RESPONSE

import numpy as np


media_extensions = ['github','docs','jpg', 'jpeg', 'png', 'gif', 'bmp','svg', 'mp3', 'wav', 'ogg', 'mp4', 'avi', 'mkv', 'ico', 'pdf', 'nix', 'ttf', 'lock', 'pyc']
ignore_files = ['package-lock.json', 'venv', 'public', 'assets', 'lotties', 'readme.md']


def bfs_traversal(root_dir):
    queue = Queue()

    queue.put(root_dir)

    file_dict = []

    code_for_gpt = []

    i=0

    # List of embeddings (the numbers)
    embedding_list = []

    while not queue.empty():

        current_dir = queue.get()

        try:
            with os.scandir(current_dir) as entries:

                for entry in entries:

                    file_name = (entry.path.split("\\"))[-1]
                    if file_name[-1] in ignore_files:
                        continue
                    elif file_name.split('.')[-1] in media_extensions:
                        continue
                    elif file_name in ignore_files:
                        continue

                    else:
                        if entry.is_dir():
                            queue.put(entry.path)
                        else:
                            #sends the file path to the function that will process the code
                            print(i)
                            i+=1
                            print(entry.path)
                            file_dict.append(entry.path)

                            single_prompt, embedding = process_file(entry.path)
                            embedding_list.append(embedding)
                            code_for_gpt.append(single_prompt)

        except OSError as e:
            
            print("Error accessing directory:", e)

    print(code_for_gpt)

    print(file_dict)
    prompt = ' '.join(code_for_gpt)
    # prompt = ' '.join(code_for_gpt)

    reshaped_embeddings_list = convert_embeddings(embedding_list)
    print(reshaped_embeddings_list)
    print(len(reshaped_embeddings_list))

    size_of_embeddings = len(reshaped_embeddings_list)

    # find the max shape of the embeddings
    max_shape = 0
    for i in range(size_of_embeddings):
        if reshaped_embeddings_list[i].shape[0] > max_shape:
            max_shape = reshaped_embeddings_list[i].shape[0]

    # pad the embeddings with zeros
    for i in range(size_of_embeddings):
        reshaped_embeddings_list[i] = np.pad(reshaped_embeddings_list[i], (0, max_shape - reshaped_embeddings_list[i].shape[0]), 'constant')

    print(reshaped_embeddings_list)

    indices_list = clustering(reshaped_embeddings_list)

    print(indices_list)

    print(type(indices_list))

    # i = 0
    # for index in indices_list:
    #     # join the code snippets in the index using code_for_gpt
    #     prompt = ' '.join([code_for_gpt[i] for i in index])
    #     # Call GPT
    #     # call_openai_api_higher_tokens(prompt, f'files/output{i}.md')
    #     if SHOULD_MOCK_AI_RESPONSE:
    #         mock_chunks_gpt(prompt, f'docs/output{i}.md')
    #     else:
    #         system_prompt = """You are a smart technical writer who understands code and can write documentation for it."""
    #         user_prompt = """Give me a developers documentation of the following code. Give a brief intro, table of contents, function explanations, dependencies, API specs (if present), schema tables in markdown. Give in markdown format and try to strict to the headings"""
    #         process_chunks(prompt, f'docs/output{i}.md', system_prompt, user_prompt)
    #     i+=1

    i=0
    for i in range(len(indices_list)):

        print(SHOULD_MOCK_AI_RESPONSE)
        # join the code snippets in the index using code_for_gpt
        prompt = ' '.join([code_for_gpt[i] for i in indices_list[i]])
        # Call GPT
        # call_openai_api_higher_tokens(prompt, f'files/output{i}.md')
        if SHOULD_MOCK_AI_RESPONSE=='True':
            print("Mocking AI response")
            mock_chunks_gpt(prompt, f'docs/output{i}.md')
        elif SHOULD_MOCK_AI_RESPONSE=='False':
            print("Calling OpenAI API")
            system_prompt = """You are a smart technical writer who understands code and can write documentation for it."""
            user_prompt = """Give me a developers documentation of the following code. Give a brief intro, table of contents, function explanations, dependencies, API specs (if present), schema tables in markdown. Give in markdown format and try to strict to the headings"""
            process_chunks(prompt, f'docs/output{i}.md', system_prompt, user_prompt)
        i+=1


def bfs_traversal_with_models_py(root_dir):
    queue = Queue()
    queue.put(root_dir)

    while not queue.empty():
        current_dir = queue.get()

        try:
            with os.scandir(current_dir) as entries:
                for entry in entries:
                    if entry.is_dir():
                        queue.put(entry.path)
                    else:
                        if entry.name=="models.py":
                            #sends the file path to the function that will process the code
                            process_file(entry.path)
        except OSError as e:
            print("Error accessing directory:", e)