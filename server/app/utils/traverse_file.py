import os
from queue import Queue
from utils.process_files import process_file



def bfs_traversal(root_dir):
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
                        process_file(entry.path)

        except OSError as e:
            
            print("Error accessing directory:", e)

