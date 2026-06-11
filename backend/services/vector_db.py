import chromadb

client = chromadb.PersistentClient(
    path="backend/data/chroma"
)

collection = client.get_or_create_collection(
    name="study_material"
)


def add_chunks(
    chunks,
    subject,
    unit,
    file_name,
    page
):

    for i, chunk in enumerate(chunks):

        collection.add(
            documents=[chunk],

            ids=[
                f"{subject}_{unit}_{page}_{i}"
            ],

            metadatas=[{
                "subject": subject,
                "unit": unit,
                "file": file_name,
                "page": page
            }]
        )

def search(query):

    results = collection.query(
        query_texts=[query],
        n_results=5
    )

    return results