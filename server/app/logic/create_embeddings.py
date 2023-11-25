from transformers import BertTokenizer, BertModel
import torch
import numpy as np
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertModel.from_pretrained(model_name)


def code(codes):
    code_tokens = tokenizer.tokenize(codes)
    tokens = [tokenizer.sep_token]+code_tokens+[tokenizer.sep_token]
    tokens_ids = tokenizer.convert_tokens_to_ids(tokens)
    context_embeddings = model(torch.tensor(tokens_ids)[None, :])[0]
    return context_embeddings


def embedding(text):
    t = 0
    window = 500
    overlap = 200
    step = 0
    size = len(text)
    b = np.array([0])
    while (t < size):
        a = code(text[t:t+window]).detach().numpy().reshape(-1)
        size_a = a.size
        size_b = b.size
        diff = size_b - size_a
        if diff > 0:
            a = np.pad(a, (0, diff), 'constant')
        else:
            b = np.pad(b, (0, abs(diff)), 'constant')
        b = b+a
        t = t + window - overlap
        step += 1
        if (t >= size):
            t = size
    b = b/step
    b = b.reshape(int(b.size/768), 768)
    return b


def cosine(a, b):
    a = a.reshape(-1)
    b = b.reshape(-1)
    if len(a) < len(b):
        a = np.pad(a, (0, len(b) - len(a)), 'constant')
    elif len(b) < len(a):
        b = np.pad(b, (0, len(a) - len(b)), 'constant')
    dot_product = np.dot(a, b)

    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)

    cosine_similarity = dot_product / (norm_a * norm_b)
    return cosine_similarity