from services.llm import generate_response


def tutor_response(
    question,
    context,
    sources,
    style="normal",
    topic=None,
    lesson=None
):

    prompt = f"""
You are an academic tutor.

Explanation Style:
{style}

Current Topic:
{topic if topic else "Not specified"}

Current Lesson:
{lesson if lesson else "No lesson available"}

Study Material:
{context}

Student Question:
{question}

Instructions:
- If a lesson is provided, treat this as a follow-up question.
- Do NOT repeat the lesson unless the student asks.
- Answer only the student's question.
- Use ONLY the provided study material.
- If the answer is not present in the study material, clearly say so.
- Do not hallucinate or invent information.
- Cite the supporting source(s) at the end.

Format:

References:
- File: <file_name> | Page: <page_number>
"""

    answer = generate_response(prompt)

    return {
        "answer": answer,
        "source": sources
    }

def teach_topic(
    topic,
    context,
    style="simple"
):
    if not context.strip():
        return {
            "lesson": "No study material was found for this topic. Please upload notes covering this topic first."
        }

    prompt = f"""
You are an excellent university professor.

Teach ONLY this topic:

{topic}

Use ONLY the study material below.

Study Material:
{context}

Instructions:
- Explain in simple words.
- Assume the student is learning this topic for the first time.
- Do not explain unrelated topics.
- Start with a short overview of the topic.
- Break the explanation into clear headings.
- Explain one concept at a time.
- Give one small real-world example where possible.
- Mention common mistakes or misconceptions if relevant.
- End with:
  1. Two quick recap points.
  2. Two short self-check questions.
"""

    lesson = generate_response(prompt)

    return {
        "lesson": lesson
    }

def explain_simpler(lesson):

    prompt = f"""
You are an excellent university professor.

Rewrite the lesson below in much simpler words.

Rules:
- Keep all important points.
- Use very simple English.
- Explain like you are teaching a beginner.
- Use one small real-life example if possible.
- Do not add new information.

Lesson:
{lesson}
"""

    simplified = generate_response(prompt)

    return {
        "lesson": simplified
    }

def explain_better(lesson):

    prompt = f"""
You are an excellent university professor.

Rewrite the lesson below in more detail.

Rules:
- Explain every important point.
- Add more details.
- Give examples where useful.
- Do not remove any existing information.
- Do not add unrelated topics.

Lesson:
{lesson}
"""

    detailed = generate_response(prompt)

    return {
        "lesson": detailed
    }