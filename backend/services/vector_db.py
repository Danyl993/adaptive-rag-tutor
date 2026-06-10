import chromadb

client = chromadb.PersistentClient(
    path="backend/data/chroma"
)

collection = client.get_or_create_collection(
    name="study_material"
)


def add_chunks(chunks):

    for i, chunk in enumerate(chunks):

        collection.add(
            documents=[chunk],
            ids=[str(i)]
        )