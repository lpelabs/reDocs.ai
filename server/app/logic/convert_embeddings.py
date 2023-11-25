import numpy as np
from sklearn.cluster import AgglomerativeClustering
from sklearn.metrics import silhouette_score

reshaped_embeddings_list = []

def convert_embeddings(lst):
    for embedding in lst:
        reshaped_embedding = embedding.reshape(-1)
        reshaped_embeddings_list.append(reshaped_embedding)

    return reshaped_embeddings_list

def clustering(lst):
    silhouette_scores = []

    for n_clusters in range(2, len(lst)):
        clustering = AgglomerativeClustering(n_clusters=n_clusters, linkage='complete', metric='cosine').fit(lst)
        arr = clustering.labels_
        silhouette_scores.append(silhouette_score(lst, arr, metric='cosine'))

    max_cluster = np.argmax(silhouette_scores) + 2
    clustering = AgglomerativeClustering(n_clusters=max_cluster, linkage='complete', metric='cosine').fit(lst)
    arr = clustering.labels_
    unique_values = np.unique(arr)
    indices_list = []

    for val in unique_values:
        indices = np.where(arr == val)[0]
        indices_list.append(indices)

    return indices_list


