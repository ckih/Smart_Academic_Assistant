from starlette.middleware.base import BaseHTTPMiddleware

class OriginCheckMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        # Basic skeleton for origin checking
        response = await call_next(request)
        return response
