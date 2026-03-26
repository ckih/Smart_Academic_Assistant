from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Smart Academic Assistant"
    DEBUG: bool = True

settings = Settings()
