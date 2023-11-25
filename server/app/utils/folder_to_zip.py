import os
import shutil

def folder_to_zip(dir_name, output_filename):
    # Get the path to the 'files' directory inside the current directory
    current_directory = os.getcwd()
    files_directory = os.path.join(current_directory, 'files')

    # Ensure the 'files' directory exists
    if not os.path.exists(files_directory):
        os.makedirs(files_directory)

    # Create the ZIP file directly in the current directory with the specified output_filename
    output_file_path = os.path.join(current_directory, output_filename)
    shutil.make_archive(output_file_path, 'zip', dir_name)

    return output_file_path  # Return the full path to the created ZIP file