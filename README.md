# reDocs.ai

## Introduction
The lack of an automated solution for converting codebases into documentation poses challenges in terms of time, accuracy, and code comprehension. Documentation is often ignored by developers, especially in fast-building teams. However, this leads to severe technical debt. Since technical documentation is hard and existing tools are limited or expensive, there is a need for comprehensive automatic documentation generation.


## Architecture Diagram



## Prototype Description

### Full Codebase to Developer Docs in One Step
Our prototype offers a seamless solution to transform a full codebase into comprehensive developer documentation in just one step. By uploading a zip file containing the codebase, you can let the magic happen. The resulting documentation includes function explanations, API specs, table schemas, and dependencies, all in Markdown format.

### Harnessing GPT-3.5 Capabilities
To power our documentation generation, we leverage the capabilities of GPT-3.5. This advanced language model enables us to produce accurate and contextually relevant documentation for the given codebase.

### A Step-by-Step Approach
1. **Codebase Traversal**: The process begins by traversing the codebase in a tree-wise fashion to access its contents.

2. **Code Embeddings with CodeBERT**: To extract meaningful information from the code, we employ Microsoft's CodeBERT for code embeddings. However, we encountered an issue with large code files that CodeBERT cannot handle effectively.

3. **Handling Large Code Files**: To overcome the limitations of CodeBERT for large code files, we devised our own algorithm to create tokenizers in a window-like manner. By specifying a window size and an overlap "region," we maintain essential context and generate embeddings by averaging the embeddings produced for each window.

4. **Maintaining Context with Agglomerating Clustering**: To ensure context preservation across the codebase, we use Agglomerating Clustering. This technique groups "similar" code files with shared semantic meanings and features, enhancing the quality of the generated documentation.

5. **Efficient Documentation Generation**: After clustering, we concatenate the code files belonging to the same cluster. The resulting concatenated code is then sent to GPT-3.5 using efficient prompt engineering techniques. The generated documentation provides comprehensive insights into the codebase.

6. **Code Refactoring Ability** : We harness the power of the LLM to perform code refactoring, with our complex prompt to change the given code block to a neater, efficient and structurally sound code output. We focus on the cleanliness in the prompting along with considering various code analytics to get the best output.

7. **Adding Tests to Code** : We also provide a solution to add testing for a specific code block. This forms an integral component in the developer experience, and eliminates the need to devote much time to think about the testing. We again leverage well thought of prompts to give optimal and exhaustive tests.

## Summary
Our prototype streamlines the documentation process by converting a full codebase into developer documentation in a single step. Leveraging GPT-3.5, we produce accurate and contextually relevant documentation, addressing the challenges of manual documentation processes. The resulting documentation enhances code comprehension, reduces technical debt, and improves code maintainability for software development teams. We also provide solutions for Code Refactoring and ability to add Testing to your code block.



## Tech Stack
List of technologies used to build the prototype:
- Frontend: Next.js
- Backend: FastAPI

## Step-by-Step Code Execution Instructions
To clone and run the prototype for testing and analysis, follow the instructions below:

### Server Setup Guide

Check out the Server Setup guide [here](../reDocs.ai/server/README.md).

### Client Frontend Setup(make sure you are in the client directory)

1. Install Node.js dependencies:
   ```
   npm install
   ```

2. Run the development server for the frontend:
   ```
   npm run dev
   ```
## Examples - 

1) Documentation of `ComicifyAI`:
- Input repo : `https://github.com/ayush4345/Comicify.ai`
- Output Docs :
<!-- 1. [Documentation_1](/LossPerEpoch/client/examples/comicify/output0.md)
2. [Documentation_2](/LossPerEpoch/client/examples/comicify/output1.md)
3. [Documentation_3](/LossPerEpoch/client/examples/comicify/output2.md)
4. [Documentation_4](/LossPerEpoch/client/examples/comicify/output3.md)
5. [Documentation_5](/LossPerEpoch/client/examples/comicify/output4.md)
6. [Documentation_6](/LossPerEpoch/client/examples/comicify/output5.md) -->

2) Documentation of `Cluboard`:
- Input repo : `https://github.com/mittal-parth/Cluboard/`
- Output Docs : 
<!-- 1. [Documentation_1](/LossPerEpoch/client/examples/clubhouse/output0.md)
2. [Documentation_2](/LossPerEpoch/client/examples/clubhouse/output1.md) -->


## What We Learned and Challenges faced
1. **Handling Large Code Files**: We faced a challenge with CodeBERT's inability to process large code files. To overcome this, we devised an algorithm to create tokenizers in a window-like manner, allowing us to maintain context by specifying a window size and overlap region. We then took the average of the embeddings produced to formulate our own embeddings for large files, addressing the issue of context preservation.

2. **Aglomerate Clustering for Context Maintenance**: To keep context across the codebase, we used Agglomerate Clustering. This method grouped "similar" code files that shared semantic meanings and features. Concatenating code files within the same cluster, we sent them to GPT-3.5 using efficient prompt engineering to generate comprehensive documentation.

3. **Persistence and Perseverance**: Despite facing difficulties with the clustering functionality, we persevered and continuously tried different approaches until we made it work. Our persistence paid off, and the successful implementation of clustering significantly improved the prototype's performance.
