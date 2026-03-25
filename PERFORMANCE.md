# Performance Optimization Report

## Indexes Added

### 1. Email Index (User Model)
- Type: Unique Index
- Reason:
  Ensures fast lookup during login and prevents duplicate users.

### 2. userId Index (Task Model)
- Reason:
  Speeds up queries fetching tasks for a specific user.

### 3. Compound Index (status + priority)
- Reason:
  Optimizes filtered queries like:
  - Get all completed high-priority tasks

---

## Before vs After

| Query | Before | After |
|------|--------|-------|
| Get tasks by userId | 120ms | 20ms |
| Filter by status + priority | 150ms | 25ms |

(Hypothetical values)

---

## Endpoints Improved

- GET /tasks
- GET /tasks?status=completed
- GET /tasks?priority=high
- GET /tasks/user/:id
- POST /login