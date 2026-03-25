from fastapi import FastAPI
from .config import settings
from .middleware.csrf import CSRFMiddleware
from .middleware.origin_check import OriginCheckMiddleware
from .middleware.rate_limit import RateLimitMiddleware
from .middleware.sanitizer import SanitizerMiddleware

app = FastAPI(title=settings.PROJECT_NAME, root_path="/api")

# Register custom middleware
app.add_middleware(CSRFMiddleware)
app.add_middleware(OriginCheckMiddleware)
app.add_middleware(RateLimitMiddleware)
app.add_middleware(SanitizerMiddleware)

@app.get("/health")
async def health_check():
    return {"status": "ok"}

@app.get("/")
async def root():
    return {"message": "Welcome to Smart Academic Assistant API"}
