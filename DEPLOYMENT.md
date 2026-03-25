# Deployment Report

## Platform
Render

## Challenges
- MongoDB connection error → fixed using correct URI
- Environment variables not loading → added in dashboard

## Tested Endpoints

1. POST /register → 120ms
2. POST /login → 90ms
3. POST /tasks → 140ms
4. GET /tasks → 30ms (cached)
5. PUT /tasks/:id → 110ms