# Go Core Service

Core backend service built with Go (Golang) for the Fox.hen CTF platform.

## Features

- RESTful API endpoints
- Target management
- Health monitoring
- CORS support

## Development

```bash
# Install dependencies
go mod download

# Run in development mode
go run main.go

# Build for production
go build -o bin/go-core main.go
```

## Environment Variables

- `PORT` - Server port (default: 8080)
- `GIN_MODE` - Gin mode (debug/release)

## API Endpoints

- `GET /api/v1/health` - Health check
- `GET /api/v1/targets` - List all targets
- `GET /api/v1/targets/:id` - Get target by ID
