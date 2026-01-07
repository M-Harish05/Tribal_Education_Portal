Backend for Tribal Education App

Run locally
1) Create server/.env based on .env.example
2) Install deps: npm i
3) Start: npm run dev

Env vars
- PORT: default 8080
- MONGODB_URI: your MongoDB connection string
- JWT_SECRET: long random string
- CLIENT_ORIGIN: http://localhost:5173

API
- POST /api/auth/request-otp { mobile }
- POST /api/auth/verify-otp { mobile, otp } -> { token, user }
- GET /api/user/me (Bearer token)
- PATCH /api/user/me/preferences (Bearer token)
- GET /api/progress (Bearer token)
- POST /api/progress/lesson (Bearer token)
- POST /api/voice/evaluate (Bearer token)

Deploy
- Render, Railway, Fly.io, or any Node host
- Set env vars in dashboard
- Ensure CLIENT_ORIGIN matches your frontend URL

