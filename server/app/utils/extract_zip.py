import os
import shutil

def extract_zip(zip_file_name, extract_to):
    # Get the current directory
    current_directory = os.getcwd()

    # Get the full paths for input ZIP file and extraction destination
    zip_file_path = os.path.join(current_directory, zip_file_name)
    extract_to_directory = os.path.join(current_directory, extract_to)

    # Ensure the extraction destination directory exists
    if not os.path.exists(extract_to_directory):
        os.makedirs(extract_to_directory)

    # Extract the ZIP file to the specified directory
    shutil.unpack_archive(zip_file_path, extract_to_directory)

    # Return the full path of the extracted directory
    return os.path.join(extract_to_directory, os.path.splitext(zip_file_name)[0])