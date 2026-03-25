# Caching Strategy

## Why "Get All Tasks"?
This endpoint is frequently called and expensive.

## Strategy
- Store results in memory
- Cache expires after 60 seconds

## Cache Invalidation
Cache is cleared when:
- Task is created
- Task is updated
- Task is deleted

## Limitations
- Lost on server restart
- Not scalable across multiple servers
- Memory usage grows with data