from fastapi import FastAPI
from routes.upload import router as upload_router
from routes.history import router as history_router
from routes.subject import router as subjects_router
from routes.learn import router as learn_router
from routes.exam import router as exam_router
from routes.revision import router as revision_router
from routes.topics import router as topics_router
from routes.cleanup import router as cleanup_router
from routes.stats import router as stats_router
from routes.search import router as search_router
from routes.files import router as files_router
from fastapi.middleware.cors import CORSMiddleware
from services.history import init_db
from routes.mcq import router as mcq_router
from routes.weak_topics import router as weak_topics_router
from services.weak_topics import init_weak_topics
from routes.progress import router as progress_router
from routes.semester import router as semester_router

app = FastAPI()
init_db()
init_weak_topics()

@app.get("/")
def root():

    return {
        "project": "Adaptive RAG Tutor",
        "status": "running"
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(weak_topics_router)
app.include_router(upload_router)
app.include_router(history_router)
app.include_router(subjects_router)
app.include_router(learn_router)
app.include_router(exam_router)
app.include_router(revision_router)
app.include_router(topics_router)
app.include_router(cleanup_router)
app.include_router(stats_router)
app.include_router(search_router)
app.include_router(files_router)
app.include_router(mcq_router)
app.include_router(progress_router)
app.include_router(semester_router)