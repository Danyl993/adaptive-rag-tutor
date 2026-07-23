from services.llm_manager import generate


def generate_response(prompt):

    try:

        return generate(prompt)

    except Exception as e:

        print(e)

        return f"Error: {e}"


def extract_topics(context):

    prompt = f"""
You are an academic tutor.

From the study material below, extract ONLY the main learning topics.

Rules:
- Return only the main learning topics.
- One topic per line.
- No numbering or bullet points.
- No explanations.
- Remove duplicate topics.
- Keep the original terminology from the study material.
- Ignore section numbers like "1.1", "2.3", etc.
- Ignore titles such as "Introduction", "Summary", "Objectives", "References".

Study Material:
{context}
"""

    try:

        response = generate(prompt)

        return [
            topic.strip()
            for topic in response.split("\n")
            if topic.strip()
        ]

    except Exception as e:

        print(e)

        return [
            "Unable to generate topics right now."
        ]