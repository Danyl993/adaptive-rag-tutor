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

Teaching Style:
- Teach in a professional, textbook-style manner.
- Assume the student is learning this topic for the first time.
- Explain in simple, easy-to-understand English.
- Use ONLY the provided study material.
- Do NOT explain unrelated topics.
- Do NOT hallucinate or invent information.

Introduction:
- Start every lesson with exactly this format:

Let's understand <Topic> step by step.

We'll first learn the basic idea, then gradually build toward the more advanced concepts.

- Do NOT start with greetings.
- Never say:
  - Good morning
  - Hello everyone
  - Welcome class
  - Today we're going to learn
  - Let's dive into
  - Imagine you're in a classroom

Lesson Structure:
- Break the lesson into clear Markdown headings.
- Explain one concept at a time.
- Keep paragraphs short.
- Give one small real-world example whenever appropriate.
- Mention common misconceptions if relevant.

End the lesson with:
## Key Takeaways
- Two concise recap points.

## Self-Check Questions
- Two short conceptual questions.
"""

    lesson = generate_response(prompt)

    return {
        "lesson": lesson
    }

def generate_exam_revision(subject, unit, context, exam_type):

    if exam_type == "revision":

        prompt = f"""
    You are an experienced university professor helping a student prepare for exams.

    Subject:
    {subject}

    Unit:
    {unit}

    Study Material:
    {context}

    Generate concise exam revision notes.

    Structure:

    # Exam Revision

    ## Important Concepts

    ## Definitions

    ## Frequently Asked Questions

    ## Common Mistakes

    ## Last Minute Revision Tips

    Use ONLY the study material.
    
    """

    elif exam_type == "2marks":

        prompt = f"""
    Generate 10 important 2-mark questions.

    For each question:
    - Answer in 2-4 bullet points.
    - Keep the answer under 60 words.
    - Focus only on key definitions or facts.

    Study Material:
    {context}
    """

    elif exam_type == "5marks":

        prompt = f"""
    Generate 10 important 5-mark questions.

    For each question:
    - Write a complete exam answer of 250-300 words.
    - Use Markdown headings.
    - Explain the concept step by step.
    - Include definitions.
    - Explain the working/process.
    - Include examples whenever possible.
    - End with 2-3 key points for revision.

    Study Material:
    {context}
    """

    elif exam_type == "10marks":

        prompt = f"""
    Generate 10 important 10-mark questions.

    For each question:
    - Write a detailed exam answer of 500-800 words.
    - Use proper Markdown headings.
    - Start with a short introduction.
    - Explain every important concept in detail.
    - Include diagrams in text form if relevant.
    - Include examples and applications.
    - End with a concise conclusion.

    Study Material:
    {context}
    """

    elif exam_type == "mock":

        prompt = f"""
    Using ONLY the study material below,

    Generate a university-style mock examination.

    Include:
    - 10 Two-Mark Questions
    - 5 Five-Mark Questions
    - 2 Ten-Mark Questions

    Do NOT provide answers.

    Study Material:
    {context}
    """
    revision = generate_response(prompt)

    return {
        "revision": revision
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