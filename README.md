# Fox.hen - Next-Generation CTF Platform

Fox.hen is a next-generation CTF platform where attackers are judged not by how fast they pop shells, but by how intelligently, quietly, and realistically they compromise adaptive systems.

## 🎯 Features

- **Adaptive AI Targets**: Systems that learn from attacker behavior and dynamically increase difficulty
- **Stealth-Based Scoring**: Success measured by how quietly and realistically you compromise systems
- **Real-World Scenarios**: Practice against systems that respond like actual production environments

## 🏗️ Architecture

This is a **Turborepo monorepo** with the following structure:

```
Fox.hen/
├── apps/
│   ├── web/              # Next.js 15+ frontend (TypeScript + Tailwind CSS)
│   ├── go-core/          # Go backend for core services
│   └── ai-service/       # Python FastAPI service for AI/ML
├── packages/             # Shared packages (optional)
└── turbo.json           # Turborepo configuration
```

## 🔒 Security

This project uses security-patched versions of all dependencies:
- **Next.js 15.0.8+** - Patched against HTTP request deserialization DoS vulnerability
- **FastAPI 0.115.0+** - Patched against ReDoS vulnerability
- All dependencies are regularly updated to address security issues

## 🎨 Design System - Cyber-Stealth Theme

- **Deep Black**: `#0a0a0a` - Primary background
- **Gunmetal Gray**: `#2a3439` - Secondary surfaces
- **Silver**: `#c0c0c0` - Primary text
- **Electric Blue**: `#2563eb` - Active states and accents

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (for frontend and Turborepo)
- **Go** 1.21+ (for core services)
- **Python** 3.11+ (for AI services)
- **npm** 10+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bl4ckf0xk/Fox.hen.git
   cd Fox.hen
   ```

2. **Install dependencies**
   ```bash
   # Install Node.js dependencies (includes Turborepo)
   npm install
   
   # Install Go dependencies
   cd apps/go-core
   go mod download
   cd ../..
   
   # Install Python dependencies
   cd apps/ai-service
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cd ../..
   ```

3. **Set up environment variables**
   ```bash
   # Frontend (web app)
   cp apps/web/.env.example apps/web/.env.local
   
   # Go Core Service
   cp apps/go-core/.env.example apps/go-core/.env
   
   # AI Service
   cp apps/ai-service/.env.example apps/ai-service/.env
   ```

### Development

Run all services in development mode:

```bash
# Terminal 1: Frontend (Next.js)
cd apps/web
npm run dev
# Runs on http://localhost:3000

# Terminal 2: Go Core Service
cd apps/go-core
go run main.go
# Runs on http://localhost:8080

# Terminal 3: AI Service
cd apps/ai-service
source venv/bin/activate  # On Windows: venv\Scripts\activate
python main.py
# Runs on http://localhost:8000
```

Or use Turborepo to run frontend tasks:

```bash
# Run all frontend dev servers
npm run dev

# Build all apps
npm run build

# Lint all apps
npm run lint
```

## 📁 Project Structure

### Frontend (`apps/web`)

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Cyber-Stealth theme
- **Port**: 3000

Key files:
- `src/app/page.tsx` - Landing page
- `src/app/layout.tsx` - Root layout
- `tailwind.config.js` - Cyber-Stealth theme configuration

### Go Core Service (`apps/go-core`)

- **Framework**: Gin
- **Language**: Go 1.21+
- **Port**: 8080

Key endpoints:
- `GET /api/v1/health` - Health check
- `GET /api/v1/targets` - List targets
- `GET /api/v1/targets/:id` - Get target details

### AI Service (`apps/ai-service`)

- **Framework**: FastAPI
- **Language**: Python 3.11+
- **Port**: 8000

Key endpoints:
- `GET /health` - Health check
- `POST /api/v1/analyze-attack` - Analyze attack patterns
- `GET /api/v1/model-status` - Get ML model status

## 🛠️ Development Workflow

### Running Tests

```bash
# Frontend tests
cd apps/web
npm test

# Go tests
cd apps/go-core
go test ./...

# Python tests
cd apps/ai-service
pytest
```

### Building for Production

```bash
# Build frontend
cd apps/web
npm run build

# Build Go service
cd apps/go-core
go build -o bin/go-core main.go

# The Python service runs directly with uvicorn
```

### Code Formatting

```bash
# Format all code
npm run format

# Or format specific files
npx prettier --write "apps/web/**/*.{ts,tsx}"
```

## 🌐 API Documentation

### Go Core Service

- **Base URL**: `http://localhost:8080/api/v1`
- **Health Check**: `GET /health`
- **Targets**: `GET /targets`

### AI Service

- **Base URL**: `http://localhost:8000/api/v1`
- **Health Check**: `GET /health`
- **Analyze Attack**: `POST /analyze-attack`

Example attack analysis request:
```bash
curl -X POST http://localhost:8000/api/v1/analyze-attack \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2024-01-15T10:30:00Z",
    "attack_type": "sql_injection",
    "target_id": "target-001",
    "success": true,
    "stealth_score": 0.8
  }'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Go Gin Documentation](https://gin-gonic.com/docs/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
