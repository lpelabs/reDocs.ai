# Setup Guide

* Make sure to add your own OpenAI API key inside the `.env` file, while testing the AI functionality

* While testing the Dev Workflow, make sure to add `MOCK=True`

* To Test the AI response, add `MOCK=False`

* Running this would mock the AI response, and not call the OpenAI API

    ```bash
    MOCK=True uvicorn main:app --reload
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
MOCK=True uvicorn main:app --reload
```

2. Else use these commands for any other time:

```bash
cd server/
source venv/Scripts/activate
cd app/
MOCK=True uvicorn main:app --reload
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
MOCK=True uvicorn main:app --reload
```

2. Else use these commands for any other time:

```bash
cd server/
source venv/bin/activate
cd app/
MOCK=True uvicorn main:app --reload
```

## Facing Issues Installing?

Please try deleting `venv` and then try the following steps again - 

1. `cd server`

2. `python -m venv venv` - or - `python3 -m venv venv`
   
3. Activate venv - `source venv/bin/activate` or `./venv/Scripts/activate`
   
4. `pip install -r requirements.txt`
   
5. `echo "OPEN_AI_API=sk-your-key" > .env`
   
6. `MOCK=True uvicorn main:app --reload`

