import os

from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_response(prompt):

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:

        print(e)

        return f"Error: {e}"


def extract_topics(context):

    prompt = f"""
You are an academic tutor.

From the study material below, extract ONLY the main learning topics.

Rules:
- Return only the topic names.
- One topic per line.
- No numbering.
- No explanations.
- Remove duplicates.

Study Material:
{context}
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return [
            topic.strip()
            for topic in response.text.split("\n")
            if topic.strip()
        ]

    except Exception as e:

        print(e)

        return [
            "Unable to generate topics right now."
        ]