from services.parser_validation import parser_validation_report

print(
    parser_validation_report(
        "sample.pptx"
    )
)

print(
    parser_validation_report(
        "invalid.xyz"
    )
)