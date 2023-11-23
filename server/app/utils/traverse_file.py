import os
from queue import Queue
from utils.process_files import process_file



def bfs_traversal(root_dir):
    queue = Queue()

    queue.put(root_dir)

    file_dict = []

    i=0

    while not queue.empty():

        current_dir = queue.get()

        try:
            with os.scandir(current_dir) as entries:

                for entry in entries:

                    if entry.is_dir():
                        queue.put(entry.path)

                    else:
                        print(i)

                        i+=1

                        print(entry.path)
                        file_dict.append(entry.path)

                        process_file(entry.path)

        except OSError as e:
            
            print("Error accessing directory:", e)

    print(file_dict)