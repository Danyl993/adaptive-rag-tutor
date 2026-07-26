import json

from services.llm import generate_response


def generate_mcq(context):

    prompt = f"""
You are an expert university professor.

Using ONLY the study material below, generate EXACTLY 5 MCQs.

Study Material:
{context}

Return ONLY valid JSON.

Format:

[
  {{
    "question": "...",
    "options": {{
      "A": "...",
      "B": "...",
      "C": "...",
      "D": "..."
    }},
    "answer": "A",
    "explanation": "..."
  }}
]

Rules:
- Return ONLY JSON.
- No markdown.
- No ```json.
- No extra text.
- Exactly 5 questions.
"""

    response = generate_response(prompt)

    return json.loads(response)