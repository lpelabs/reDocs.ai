import os

import shutil

def delete_folder_if_exists(folder_path):

    if os.path.exists(folder_path):
            
            shutil.rmtree(folder_path)

def create_folder_if_not_exists(folder_path):

    if not os.path.exists(folder_path):
        
        os.makedirs(folder_path)