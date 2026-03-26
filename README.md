# Smart Academic Assistant

A monorepo for the Smart Academic Assistant, featuring a FastAPI backend and a Next.js frontend.

## Architecture Overview

The project is structured as a monorepo:

- **Backend (`/backend`)**: A FastAPI application.
  - `app/main.py`: The entry point for the FastAPI application.
  - `app/middleware/`: Contains custom security middleware.
  - `api/index.py`: Serverless function entry point for Vercel deployment.
- **Frontend (`/frontend`)**: A Next.js application using the App Router and Tailwind CSS 4.
  - `src/app/`: The Next.js App Router directory.
  - `src/components/`: Reusable UI components.
  - `src/lib/`: Utility functions and API clients.

### Deployment & Integration

The project is configured for deployment on Vercel. The `vercel.json` file in the root directory manages the integration between the frontend and backend:
- Requests starting with `/api/` are rewritten to the backend's serverless entry point (`/backend/api/index.py`).

## Setup Instructions

### Prerequisites
- Python 3.9+
- Node.js 18+
- npm (or bun/pnpm/yarn)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the development server:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Security Notes

The backend includes a set of custom middleware located in `backend/app/middleware/` to enhance security:

- **CSRF Protection**: `CSRFMiddleware` provides a skeleton for protecting against Cross-Site Request Forgery.
- **Origin Checking**: `OriginCheckMiddleware` verifies the `Origin` and `Referer` headers of incoming requests.
- **Rate Limiting**: `RateLimitMiddleware` implements basic request throttling.
- **Input Sanitization**: `SanitizerMiddleware` ensures that incoming data is properly cleaned to prevent injection attacks.

*Note: These middleware components are currently implemented as skeletons and should be fully configured before deploying to a production environment.*
