import configparser
import os

config = configparser.ConfigParser()
config.read("config.ini")

# Set default value to True in case the environment variable is not present
SHOULD_MOCK_AI_RESPONSE = os.getenv("MOCK", config.getboolean("DEFAULT", "SHOULD_MOCK_AI_RESPONSE", fallback=True))

