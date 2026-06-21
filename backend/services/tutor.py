from services.llm import generate_response


def tutor_response(
    question,
    context,
    style="normal"
):

    prompt = f"""
You are an academic tutor.

Explanation Style:
{style}

Context:
{context}

Question:
{question}

Answer according to the explanation style.
"""

    return generate_response(prompt)