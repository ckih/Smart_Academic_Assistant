# Smart Academic Assistant

A monorepo for the Smart Academic Assistant, featuring a FastAPI backend and a Next.js frontend.

## Architecture Overview

This project is structured as a monorepo to manage both the backend and frontend components in a single location:

- **`backend/`**: Contains the FastAPI application and server-side logic.
- **`frontend/`**: Contains the Next.js application for the user interface.
- **`shared/`**: Intended for shared resources, types, or utility functions used by both the backend and frontend.

## Local Development Setup

### Prerequisites

- **Python 3.9+**
- **Node.js 18+**
- **npm** (or your preferred package manager)

### Backend Setup

1.  **Navigate to the backend directory**:
    ```bash
    cd backend
    ```
2.  **Create a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3.  **Install dependencies**:
    *(Note: Ensure a `requirements.txt` file is present or created with necessary packages)*
    ```bash
    pip install -r requirements.txt
    ```
4.  **Run the development server**:
    ```bash
    uvicorn app.main:app --reload
    ```

### Frontend Setup

1.  **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```

## Development Workflow & Branch Protection

To ensure code quality and stability, the following rules are enforced for the `main` branch:

- **Pull Request Reviews**: All changes must be submitted via a pull request. At least one approving review from a code owner is required before merging.
- **Continuous Integration (CI)**: All pull requests must pass the automated CI suite.
- **Status Checks**: Merging is blocked until all required status checks have passed.

### CI/CD Configuration

- The CI workflow is defined in `.github/workflows/ci.yml`.
- Code ownership is defined in `.github/CODEOWNERS`.
- Repository settings and branch protection are defined in `.github/settings.yml`.
# Smart_Academic_Assistant

## Repository Structure

```
saa/
├── backend/
│   ├── api/                    # Vercel serverless entry points
│   │   └── index.py
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── middleware/         # Security middleware
│   │   │   ├── rate_limit.py
│   │   │   ├── csrf.py
│   │   │   ├── sanitizer.py
│   │   │   └── origin_check.py
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── routers/
│   │   ├── services/
│   │   └── utils/
│   └── tests/
├── frontend/
│   ├── src/
│   │   ├── app/                # Next.js App Router
│   │   ├── components/
│   │   │   └── ui/             # shadcn/ui + custom components
│   │   │       ├── spotlight-card.tsx
│   │   │       ├── star-button.tsx
│   │   │       ├── background-components.tsx
│   │   ├── lib/
│   │   │   ├── utils.ts
│   │   │   ├── api.ts
│   │   │   └── csrf.ts
│   │   └── styles/
│   │       └── globals.css     # Tailwind 4 + star-btn animation
├── .github/workflows/
├── vercel.json
└── README.md
```
