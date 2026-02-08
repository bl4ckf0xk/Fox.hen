# INITIALIZATION_COMMANDS.md

This document contains all shell commands needed to initialize the Fox.hen monorepo from scratch.

## Complete Shell Command Sequence

### 1. Repository Setup

```bash
# Clone the repository (if not already done)
git clone https://github.com/bl4ckf0xk/Fox.hen.git
cd Fox.hen

# Or if starting fresh locally
mkdir Fox.hen
cd Fox.hen
git init
```

### 2. Install Dependencies

#### Root and Frontend Dependencies (Node.js)

```bash
# Install root dependencies (Turborepo, Prettier)
npm install

# Install frontend dependencies
cd apps/web
npm install
cd ../..
```

#### Go Dependencies

```bash
cd apps/go-core
go mod download
go mod tidy
cd ../..
```

#### Python Dependencies

```bash
cd apps/ai-service

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Deactivate when done
deactivate

cd ../..
```

### 3. Environment Configuration

```bash
# Copy environment templates
cp apps/go-core/.env.example apps/go-core/.env
cp apps/ai-service/.env.example apps/ai-service/.env

# Optionally create frontend env (if needed)
# echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > apps/web/.env.local
# echo "NEXT_PUBLIC_AI_URL=http://localhost:8000" >> apps/web/.env.local
```

### 4. Build and Test (Optional)

```bash
# Build Next.js frontend
cd apps/web
npm run build
cd ../..

# Build Go service
cd apps/go-core
go build -o bin/go-core main.go
cd ../..
```

### 5. Development Mode

Run these commands in separate terminal windows/tabs:

**Terminal 1 - Frontend:**
```bash
cd apps/web
npm run dev
# Access at http://localhost:3000
```

**Terminal 2 - Go Core Service:**
```bash
cd apps/go-core
go run main.go
# Access at http://localhost:8080
# Test: curl http://localhost:8080/api/v1/health
```

**Terminal 3 - AI Service:**
```bash
cd apps/ai-service
source venv/bin/activate  # On Windows: venv\Scripts\activate
python main.py
# Access at http://localhost:8000
# Test: curl http://localhost:8000/health
```

## Automated Setup Script

Alternatively, use the provided setup script:

```bash
# Make it executable (if needed)
chmod +x setup.sh

# Run the setup script
./setup.sh
```

This will automatically:
- Check prerequisites (Node.js, Go, Python)
- Install all dependencies
- Create environment files
- Display instructions to start services

## Quick Start Commands

```bash
# One-line install (requires all prerequisites)
npm install && \
  cd apps/go-core && go mod download && cd ../.. && \
  cd apps/ai-service && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt && deactivate && cd ../..

# Start all services (use separate terminals)
cd apps/web && npm run dev                           # Terminal 1
cd apps/go-core && go run main.go                    # Terminal 2
cd apps/ai-service && source venv/bin/activate && python main.py  # Terminal 3
```

## Verification Commands

After setup, verify each service:

```bash
# Verify Next.js can build
cd apps/web
npm run build

# Verify Go compiles
cd apps/go-core
go build -o bin/test main.go && rm bin/test

# Verify Python dependencies
cd apps/ai-service
source venv/bin/activate
python -c "import fastapi, uvicorn, pydantic; print('✅ All imports OK')"
deactivate
```

## Testing API Endpoints

Once services are running:

```bash
# Test Go Core Service
curl http://localhost:8080/api/v1/health
curl http://localhost:8080/api/v1/targets

# Test AI Service
curl http://localhost:8000/health
curl -X POST http://localhost:8000/api/v1/analyze-attack \
  -H "Content-Type: application/json" \
  -d '{
    "timestamp": "2024-01-15T10:30:00Z",
    "attack_type": "sql_injection",
    "target_id": "target-001",
    "success": true,
    "stealth_score": 0.8
  }'

# Test Frontend
# Open browser: http://localhost:3000
```

## Clean Up Commands

```bash
# Remove all dependencies
rm -rf node_modules apps/*/node_modules
rm -rf apps/ai-service/venv
rm -rf apps/go-core/vendor

# Remove build artifacts
rm -rf apps/web/.next
rm -rf apps/go-core/bin
rm -rf .turbo

# Fresh install
npm install
```

## Directory Structure Created

```
Fox.hen/
├── .gitignore                    # Git ignore patterns
├── .prettierrc                   # Prettier config
├── package.json                  # Root dependencies
├── turbo.json                    # Turborepo config
├── setup.sh                      # Setup automation
├── README.md                     # Main docs
├── SETUP.md                      # Setup guide
├── INITIALIZATION_COMMANDS.md    # This file
│
├── apps/
│   ├── web/                      # Next.js frontend
│   │   ├── src/app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.js
│   │   ├── next.config.js
│   │   ├── postcss.config.js
│   │   └── .eslintrc.js
│   │
│   ├── go-core/                  # Go backend
│   │   ├── main.go
│   │   ├── go.mod
│   │   ├── .env.example
│   │   └── README.md
│   │
│   └── ai-service/               # Python AI
│       ├── main.py
│       ├── requirements.txt
│       ├── .env.example
│       └── README.md
│
└── packages/                     # Shared (empty)
```

## File Structure Summary

**Total Files Created:** 24
- Configuration: 5 (package.json, turbo.json, .gitignore, .prettierrc, setup.sh)
- Documentation: 4 (README.md, SETUP.md, this file, service READMEs)
- Frontend: 8 files
- Go Backend: 4 files
- Python AI Service: 4 files

## Technology Stack Summary

| Component | Technology | Port | Key Features |
|-----------|-----------|------|--------------|
| Frontend | Next.js 14+, TypeScript, Tailwind CSS | 3000 | App Router, Cyber-Stealth theme |
| Core API | Go 1.21+, Gin framework | 8080 | RESTful API, Target management |
| AI Service | Python 3.11+, FastAPI | 8000 | Attack analysis, Adaptive difficulty |
| Monorepo | Turborepo, npm workspaces | - | Unified dev experience |

## Environment Variables

### apps/go-core/.env
```env
PORT=8080
GIN_MODE=debug
```

### apps/ai-service/.env
```env
PORT=8000
```

### apps/web/.env.local (optional)
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_AI_URL=http://localhost:8000
```
