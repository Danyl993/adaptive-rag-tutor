import os

from dotenv import load_dotenv
from google import genai
from groq import Groq
from openai import OpenAI

load_dotenv()

# ---------------- MODELS ----------------

GEMINI_MODELS = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
]

GROQ_MODEL = "llama-3.3-70b-versatile"

OPENROUTER_MODEL = "deepseek/deepseek-chat-v3-0324:free"

OPENAI_MODEL = "gpt-4.1-mini"

# ---------------- API KEYS ----------------

GEMINI_KEYS = [
    os.getenv("GEMINI_API_KEY_1"),
    os.getenv("GEMINI_API_KEY_2"),
]

GEMINI_KEYS = [key for key in GEMINI_KEYS if key]

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


def generate(prompt):

    last_error = None

    # =====================================================
    # GEMINI
    # =====================================================

    for api_key in GEMINI_KEYS:

        client = genai.Client(api_key=api_key)

        for model in GEMINI_MODELS:

            try:

                response = client.models.generate_content(
                    model=model,
                    contents=prompt
                )

                print(f"Using Gemini -> {model}")

                return response.text

            except Exception as e:

                print(f"Gemini ({model}) failed: {e}")

                last_error = e

    # =====================================================
    # GROQ
    # =====================================================

    if GROQ_API_KEY:

        try:

            client = Groq(
                api_key=GROQ_API_KEY
            )

            response = client.chat.completions.create(
                model=GROQ_MODEL,
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

            print(f"Groq failed: {e}")

            last_error = e

    # =====================================================
    # OPENROUTER
    # =====================================================

    if OPENROUTER_API_KEY:

        try:

            client = OpenAI(
                api_key=OPENROUTER_API_KEY,
                base_url="https://openrouter.ai/api/v1"
            )

            response = client.chat.completions.create(
                model=OPENROUTER_MODEL,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )

            print("Using OpenRouter")

            return response.choices[0].message.content

        except Exception as e:

            print(f"OpenRouter failed: {e}")

            last_error = e

    # =====================================================
    # OPENAI
    # =====================================================

    if OPENAI_API_KEY:

        try:

            client = OpenAI(
                api_key=OPENAI_API_KEY
            )

            response = client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            )

            print("Using OpenAI")

            return response.choices[0].message.content

        except Exception as e:

            print(f"OpenAI failed: {e}")

            last_error = e

    raise Exception(
        f"All LLM providers failed.\nLast error: {last_error}"
    )