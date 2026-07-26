from services.llm import generate_response


def generate_revision_notes(context):

    if not context.strip():
        return "No study material found."

    prompt = f"""
You are an expert university professor preparing a student for exams.

Use ONLY the study material below.

Study Material:
{context}

Create COMPLETE revision notes.

Format exactly like this:

# Revision Notes

## 1. Unit Overview
Briefly explain what this unit is about.

---

## 2. Important Concepts

Explain every important concept using simple language.

---

## 3. Key Definitions

List all important definitions.

---

## 4. Important Processes / Algorithms

Explain every important process step by step.

---

## 5. Advantages and Disadvantages

Include whenever applicable.

---

## 6. Comparisons

Create comparison tables whenever possible.

Example:

| Feature | X | Y |

---

## 7. Important Points to Remember

Bullet list.

---

## 8. Common Exam Questions

Generate 5 important university questions.

---

## 9. Last Minute Revision

Give a 10-point checklist.

Rules:

- Use Markdown headings.
- Use bullet points.
- Keep explanations concise but complete.
- Include small text diagrams wherever useful.
- Never invent information.
- Use ONLY the study material.
"""

    return generate_response(prompt)