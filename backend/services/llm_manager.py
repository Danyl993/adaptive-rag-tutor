import os

from google import genai
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

MODELS = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
]

GEMINI_KEYS = [
    os.getenv("GEMINI_API_KEY_1"),
    os.getenv("GEMINI_API_KEY_2"),
]

GEMINI_KEYS = [key for key in GEMINI_KEYS if key]
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
def generate(prompt):

    last_error = None

    for api_key in GEMINI_KEYS:

        client = genai.Client(api_key=api_key)

        for model in MODELS:

            try:

                response = client.models.generate_content(
                    model=model,
                    contents=prompt
                )

                print(f"Using {model}")

                return response.text

            except Exception as e:

                print(e)

                last_error = e

        if GROQ_API_KEY:

    try:

        client = Groq(api_key=GROQ_API_KEY)

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        print("Using Groq")

        return response.choices[0].message.content

    except Exception as e:

        print(e)

        last_error = e

    raise Exception(last_error)