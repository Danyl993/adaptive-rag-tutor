from services.llm import generate_response


def generate_qa(context):

    prompt = f"""
Generate 10 study questions and answers.

Context:
{context}

Format:

Q:
A:
"""

    return generate_response(prompt)