import chromadb

client = chromadb.PersistentClient(
    path="backend/data/chroma"
)

collection = client.get_or_create_collection(
    name="study_material"
)