# Useful for debugging purposes when you don't want to waste GPT credits
# Setting to True will stream a mock response instead of calling the OpenAI API
# TODO: Should only be set to true when value is 'True', not any abitrary truthy value
import os


SHOULD_MOCK_AI_RESPONSE = bool(os.environ.get("MOCK", True))

