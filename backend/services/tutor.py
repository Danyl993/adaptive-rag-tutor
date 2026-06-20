from services.llm import generate_response


def tutor_response(
    question,
    context
):

    prompt = f"""
You are an academic tutor.

Context:
{context}

Question:
{question}

Answer clearly and accurately.
"""

    return generate_response(prompt)