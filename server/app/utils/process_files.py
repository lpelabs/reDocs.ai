def process_file(file_path):
    
    with open(file_path, 'r', encoding='utf-8') as file:

        prompt_text = file.read()

        # Process the file here
        print(prompt_text)