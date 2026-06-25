from services.ocr import (
    extract_text_from_image,
    extract_text_from_screenshot
)

print(
    extract_text_from_image(
        "sample.png"
    )
)

print(
    extract_text_from_screenshot(
        "sample.png"
    )
)