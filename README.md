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
