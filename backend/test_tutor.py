from services.tutor import tutor_response

print(
    tutor_response(
        question="What is an operating system?",
        context="An operating system manages hardware and software resources.",
        sources="OS Unit 1 Page 5",
        style="beginner"
    )
)