import pdfplumber

with pdfplumber.open("Danyl_Bince_Resume.pdf") as pdf:

    print("Pages:", len(pdf.pages))

    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        print(i + 1, 0 if text is None else len(text))