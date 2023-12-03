# Developer Documentation

## Introduction
This documentation provides an overview and explanation of the code written in the given file. It includes details about the functions, dependencies, API specifications, and schema tables.

## Table of Contents
1. [Compiler Options](#compiler-options)
2. [Import Statements](#import-statements)

## Compiler Options <a name="compiler-options"></a>
The compiler options specify the paths to be used for importing modules.

```json
{
    "compilerOptions": {
        "paths": {
            "@/": ["./src/*"]
        }
    }
}
```

## Import Statements <a name="import-statements"></a>
The following import statements are used to import modules from specific files.

```javascript
export { default as Navbar } from "./Navbar";
export { default as Hero } from "./Hero";
```

The code exports the `Navbar` component from the "./Navbar" file and the `Hero` component from the "./Hero" file.

## Dependencies
There are no explicit dependencies mentioned in the provided code snippet.

## API Specifications
No API specifications are mentioned in the provided code snippet.

## Schema Tables
No schema tables are mentioned in the provided code snippet.
