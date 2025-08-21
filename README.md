# NourineInstitute — Backend Email API

This project now includes a minimal Node.js backend to handle form submissions and send emails via SMTP.

## Backend Setup

1. Create an environment file based on the following template in `project/server/.env`:

```
PORT=5050
CORS_ORIGIN=http://localhost:5173

# SMTP settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@example.com
SMTP_PASS=your_app_password

# Mail headers
MAIL_FROM="NourineInstitute <your_email@example.com>"
MAIL_TO=owner@example.com
```

2. Install backend dependencies and run the server:

```
cd server
npm install
npm run dev
```

The server listens on `http://localhost:5050`.

## Endpoints

- `POST /api/contact` — JSON body from contact form
- `POST /api/placement` — multipart/form-data with fields: `data` (JSON string) and optional `cv` file
- `POST /api/admission` — JSON body
- `POST /api/tuition` — JSON body

## Frontend Dev Proxy

The Vite dev server proxies `/api/*` to the backend. Run frontend as usual:

```
npm run dev
```

## Deployment Notes

- Host the frontend `dist/` on static hosting.
- Deploy the backend on a Node-compatible host (e.g., VPS, Render, Railway). Update frontend to call your backend domain instead of `/api` if not proxied.


