from fastapi import FastAPI

from routes.upload import router as upload_router
from routes.history import router as history_router
from routes.subjects import router as subjects_router
from routes.learn import router as learn_router
from routes.exam import router as exam_router
from routes.revision import router as revision_router
from routes.topics import router as topics_router
from routes.cleanup import router as cleanup_router

app = FastAPI()

app.include_router(upload_router)
app.include_router(history_router)
app.include_router(subjects_router)
app.include_router(learn_router)
app.include_router(exam_router)
app.include_router(revision_router)
app.include_router(topics_router)
app.include_router(cleanup_router)