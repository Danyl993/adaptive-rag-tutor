from services.verification import (
    is_low_confidence,
    verify_answer
)

print(
    is_low_confidence(0.3)
)

print(
    verify_answer(
        "Operating systems manage hardware",
        "Operating systems manage hardware and software resources"
    )
)