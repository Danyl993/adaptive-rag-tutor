from services.llm import generate_response


def generate_mcq(context):

    prompt = f"""
Generate 5 multiple choice questions.

Context:
{context}

Format:

Question
A)
B)
C)
D)

Answer:
"""

    return generate_response(prompt)