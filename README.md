# reDocs.ai

## Introduction
The lack of an automated solution for converting codebases into documentation poses challenges in terms of time, accuracy, and code comprehension. Documentation is often ignored by developers, especially in fast-building teams. However, this leads to severe technical debt. Since technical documentation is hard and existing tools are limited or expensive, there is a need for comprehensive automatic documentation generation.

## Description

### Full Codebase to Developer Docs in One Step
Our prototype offers a seamless solution to transform a full codebase into comprehensive developer documentation in just one step. By uploading a zip file containing the codebase, you can let the magic happen. The resulting documentation includes function explanations, API specs, table schemas, and dependencies, all in Markdown format.

### Harnessing GPT-3.5 Capabilities
To power our documentation generation, we leverage the capabilities of GPT-3.5. This advanced language model enables us to produce accurate and contextually relevant documentation for the given codebase.

### A Step-by-Step Approach

1. **Codebase Traversal**: The process begins by traversing the codebase in a tree-wise fashion to access its contents.

2. **Code Embeddings with CodeBERT**: To extract meaningful information from the code, we employ Microsoft's CodeBERT for code embeddings. However, we encountered an issue with large code files that CodeBERT cannot handle effectively.

3. **Handling Large Code Files**: To overcome the limitations of CodeBERT for large code files, we devised our own algorithm to create tokenizers in a window-like manner. By specifying a window size and an overlap "region," we maintain essential context and generate embeddings by averaging the embeddings produced for each window.

4. **Maintaining Context with Agglomerating Clustering**: To ensure context preservation across the codebase, we use Agglomerative Clustering. This technique groups "similar" code files with shared semantic meanings and features, enhancing the quality of the generated documentation. We choose this type of clustering to exploit the hierarchical relations in the clusters formed.

5. **Efficient Documentation Generation**: After clustering, we concatenate the code files belonging to the same cluster. The resulting concatenated code is then sent to GPT-3.5 using efficient prompt engineering techniques. The generated documentation provides comprehensive insights into the codebase.

### Code Refactoring Ability
We harness the power of the LLM to perform code refactoring, with our complex prompt to change the given code block to a neater, efficient and structurally sound code output. We focus on the cleanliness in the prompting along with considering various code analytics to get the best output.

### Adding Tests to Code
We also provide a solution to add testing for a specific code block. This forms an integral component in the developer experience, and eliminates the need to devote much time to think about the testing. We again leverage well thought of prompts to give optimal and exhaustive tests.


## Tech Stack
List of technologies used to build the prototype:

- Frontend: Next.js
- Backend: FastAPI

# Contribution Guide

We encourage contributions to reDocs.ai! Here's how you can get involved:

1. Fork the Repository: Before making any changes, create a fork of the reDocs.ai repository on GitHub. This allows you to work on your own copy of the code without affecting the main project.

2. Branch for Your Contribution: Create a new branch for your specific contribution using `git checkout -b <branch-name>`. This helps keep the main branch clean and facilitates reviewing and merging your changes.

3. Implement Your Changes: Make your changes to the code, following the project's coding style and best practices. We encourage you to write unit tests for your code to ensure its functionality and stability.

4. Commit Your Changes: Once you're satisfied with your changes, add your changes to your branch and commit them with a descriptive commit message.

5. Create a Pull Request: Create a pull request from your branch to the main branch of the reDocs.ai repository. Be sure to include a detailed description of your changes and any relevant testing results.

6. Respond to Feedback: The maintainers will review your pull request and provide feedback. Be prepared to answer questions, address concerns, and make adjustments to your code as needed.

7. Get Merged!: Once your pull request is approved, it will be merged into the reDocs.ai codebase. Your contributions will be available to everyone using the project!

### Contribution Guidelines:

* Write clear and concise code that follows the project's style guide.
* Include unit tests for your code.
* Document your code with comments and docstrings.
* Follow the [Pull Request template](#) when submitting your changes.
* Be respectful and collaborative in your communication with other contributors.
* We appreciate your interest in contributing to reDocs.ai!
  
### PR Template 

Please follow this template when submitting a pull request to reDocs.ai:

1. Title:

* Keep it concise and descriptive of the changes you made.
* Use the format: `[Feature/Bug Fix/Improvement] - Descriptive title`.

2. Description:

* Clearly explain the purpose of your change.
* Include relevant details about the functionality you added, the bug you fixed, or the improvement you implemented.
* Reference any issues your pull request addresses.
* Explain why your changes are necessary and how they benefit the project.
  
3. Checklist:

- [ ] I have read and followed the Contributing Guide.
- [ ] I have written unit tests for my changes.
- [ ] My code follows the project's style guide.
- [ ] I have updated the documentation (if applicable).
- [ ] I have added a clear and descriptive commit message.

4. Screenshots/Videos (optional):

* If your changes involve a visual element, please include screenshots or videos demonstrating the functionality.

5. Additional Information:

* Mention any relevant discussions or decisions made regarding your changes.
* Feel free to ask questions or provide additional context if needed.

# Setup Guide

1. Check out the Server Setup guide [here](/server/README.md).

2. Client Frontend Setup:

   * Install Node.js dependencies:

      ```bash
      npm install
      ```


   * Run the development server for the frontend:

      ```bash
      npm run dev
      ```

## Example Documentations Generated by reDocs.ai - 

1) Documentation of `ComicifyAI`:

- Input repo : `https://github.com/ayush4345/Comicify.ai`
- Output Docs :

1. [Documentation_1](/client/examples/comicify/output0.md)
2. [Documentation_2](/client/examples/comicify/output1.md)
3. [Documentation_3](/client/examples/comicify/output2.md)
4. [Documentation_4](/client/examples/comicify/output3.md)
5. [Documentation_5](/client/examples/comicify/output4.md)
6. [Documentation_6](/client/examples/comicify/output5.md)

2) Documentation of `Cluboard`:

- Input repo : `https://github.com/mittal-parth/Cluboard/`
- Output Docs :

1. [Documentation_1](/client/examples/clubhouse/output0.md)
2. [Documentation_2](/client/examples/clubhouse/output1.md)

## License

[MIT License](./LICENSE)
