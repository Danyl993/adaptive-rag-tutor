import chromadb

from services.bm25 import build_bm25, bm25_search
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

    return {
        "documents": results["documents"],
        "metadata": results["metadatas"]
    }
def search_by_subject_unit(
    query,
    subject,
    unit
):

    results = collection.query(
        query_texts=[query],
        n_results=5,

        where={
            "$and": [
                {"subject": subject},
                {"unit": unit}
            ]
        }
    )

    return {
        "documents": results["documents"],
        "metadata": results["metadatas"]
    }

def get_topic_context(
    query,
    subject,
    unit
):

    results = search_by_subject_unit(
        query,
        subject,
        unit
    )

    documents = results["documents"][0]
    metadata = results["metadata"][0]

    if not documents:

        return {
            "context": "",
            "sources": []
        }

    bm25 = build_bm25(documents)

    ranked = bm25_search(
        bm25,
        query,
        documents,
        top_k=5
    )

    context = "\n\n".join(
        doc for doc, _ in ranked
    )

    formatted_sources = []

    for item in metadata:

        formatted_sources.append({
            "file": item.get("file", "Unknown"),
            "page": item.get("page", "Unknown"),
            "subject": item.get("subject", ""),
            "unit": item.get("unit", "")
        })

    return {
        "context": context,
        "sources": formatted_sources
    }


def get_unit_context(
    subject,
    unit
):

    results = collection.get(

        where={
            "$and": [
                {"subject": subject},
                {"unit": unit}
            ]
        }

    )

    documents = results.get(
        "documents",
        []
    )

    return "\n\n".join(documents)