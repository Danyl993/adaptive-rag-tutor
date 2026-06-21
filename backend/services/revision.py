from services.llm import generate_response


def generate_revision_notes(context):

    prompt = f"""
Create concise revision notes.

Context:
{context}

Include:

- Key concepts
- Important definitions
- Exam points
- Quick summary
"""

    return generate_response(prompt)