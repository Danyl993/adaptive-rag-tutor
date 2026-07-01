from services.llm import generate_response


def generate_exam_answer(context, question):

    prompt = f"""
You are an exam preparation tutor.

Using ONLY the context below, answer the student's question.

Requirements:
- Keep the answer concise.
- Use bullet points where appropriate.
- Highlight important exam keywords.
- Mention points that are commonly asked in exams.
- Do not invent information outside the context.

Context:
{context}

Question:
{question}
"""

    return generate_response(prompt)