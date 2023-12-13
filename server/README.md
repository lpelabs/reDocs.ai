# Setup Guide

* Make sure to add your own OpenAI API key inside the `.env` file, while testing the AI functionality
* Else, while testing the Dev Workflow, make sure to add `SHOULD_MOCK_AI_RESPONSE=True`

## From Git-Bash :

1. Only run for the very first installation setup:

```bash
cd server/
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
cd app/
uvicorn main:app
```

2. Rest use these commands

```bash
cd server/
source venv/Scripts/activate
cd app/
uvicorn main:app
```

## From Powershell/ VS Code/ Mac OS :

1. Only run for the very first installation setup:

```bash
cd server/
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd app/
uvicorn main:app
```

2. Rest use these commands

```bash
cd server/
source venv/bin/activate
cd app/
uvicorn main:app
```


