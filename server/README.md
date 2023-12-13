# Setup Guide

* Make sure to add your own OpenAI API key inside the `.env` file, while testing the AI functionality

* Else, while testing the Dev Workflow, make sure to add `SHOULD_MOCK_AI_RESPONSE=True`

* Running this would mock the AI response, and not call the OpenAI API

    ```bash
    MOCK=true uvicorn main:app --reload
    ```

## From Git-Bash :

1. Only run for the very first time of the installation setup:

```bash
cd server/
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
cd app/
echo "OPEN_AI_API=sk-your-key" > .env
MOCK=true uvicorn main:app --reload
```

2. Else use these commands for any other time:

```bash
cd server/
source venv/Scripts/activate
cd app/
MOCK=true uvicorn main:app --reload
```

## From Powershell/ VS Code/ Mac OS :

1. Only run for the very first time of the installation setup:

```bash
cd server/
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd app/
echo "OPEN_AI_API=sk-your-key" > .env
MOCK=true uvicorn main:app --reload
```

2. Else use these commands for any other time:

```bash
cd server/
source venv/bin/activate
cd app/
MOCK=true uvicorn main:app --reload
```


