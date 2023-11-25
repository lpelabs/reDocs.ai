import numpy as np
from sklearn.cluster import AgglomerativeClustering

reshaped_embeddings_list = []
def convert_embeddings(list):
    for embedding in list:
        reshaped_embedding = embedding.reshape(-1)
        reshaped_embeddings_list.append(reshaped_embedding)
# clustering(reshaped_embeddings_list)
    return reshaped_embeddings_list


def clustering(list1):
    clustering = AgglomerativeClustering(n_clusters=len(list1)//2+1, linkage='complete', metric='cosine').fit(list1)
    arr=clustering.labels_
    unique_values = np.unique(arr)
    indices_list = []
    for val in unique_values:
        indices = np.where(arr == val)[0]
        indices_list.append(indices)
    #for i in range(len(indices_list)):
        #print("Bro i called clustering: ",list(indices_list[i]))
    return indices_list