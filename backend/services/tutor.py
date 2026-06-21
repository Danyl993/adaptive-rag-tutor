from services.llm import generate_response


def tutor_response(
    question,
    context,
    sources,
    style="normal"
):

    prompt = f"""
You are an academic tutor.

Explanation Style:
{style}

Sources:
{sources}

Context:
{context}

Question:
{question}

Answer according to the explanation style.

Only use information from the provided context.
Mention source references when possible.
"""

    return generate_response(prompt)