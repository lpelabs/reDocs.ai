
def read_file(file_path):

    print(file_path)
    
    with open(file_path, 'r', encoding='utf-8') as file:

        prompt_text = file.read()

        print(prompt_text)

        return prompt_text
