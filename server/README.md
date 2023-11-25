# Setup Guide

## From Git-Bash :

1. Only run for the first installation setup:

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

## From Powershell :

1. Only run for the first installation setup:

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


