# SETUP.md - Fox.hen Development Environment Setup

This guide provides step-by-step instructions for setting up the Fox.hen monorepo development environment.

## Shell Commands for Initialization

### 1. Clone and Navigate

```bash
git clone https://github.com/bl4ckf0xk/Fox.hen.git
cd Fox.hen
```

### 2. Automated Setup (Recommended)

```bash
# Run the setup script
./setup.sh
```

This will:
- Check prerequisites (Node.js, Go, Python)
- Install all dependencies
- Set up environment files
- Display next steps

### 3. Manual Setup (Alternative)

If you prefer manual setup or the script doesn't work:

#### Install Node.js Dependencies

```bash
# Root dependencies (Turborepo, Prettier, etc.)
npm install

# Frontend dependencies
cd apps/web
npm install
cd ../..
```

#### Install Go Dependencies

```bash
cd apps/go-core
go mod download
cd ../..
```

#### Install Python Dependencies

```bash
cd apps/ai-service
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
deactivate
cd ../..
```

#### Setup Environment Files

```bash
# Go Core Service
cp apps/go-core/.env.example apps/go-core/.env

# AI Service  
cp apps/ai-service/.env.example apps/ai-service/.env
```

## File Structure Generated

```
Fox.hen/
├── .gitignore                 # Git ignore patterns
├── .prettierrc               # Prettier configuration
├── package.json              # Root package.json with Turborepo
├── turbo.json               # Turborepo pipeline configuration
├── setup.sh                 # Automated setup script
├── README.md                # Main documentation
├── SETUP.md                 # This file
│
├── apps/
│   ├── web/                 # Next.js 14+ Frontend
│   │   ├── src/
│   │   │   └── app/
│   │   │       ├── globals.css      # Global styles with Cyber-Stealth theme
│   │   │       ├── layout.tsx       # Root layout with metadata
│   │   │       └── page.tsx         # Landing page
│   │   ├── public/                  # Static assets
│   │   ├── package.json
│   │   ├── tsconfig.json           # TypeScript configuration
│   │   ├── tailwind.config.js      # Tailwind with Cyber-Stealth palette
│   │   ├── postcss.config.js
│   │   ├── next.config.js
│   │   └── .eslintrc.js
│   │
│   ├── go-core/             # Go Backend Service
│   │   ├── main.go                  # Main server with Gin
│   │   ├── go.mod                   # Go module definition
│   │   ├── .env.example             # Environment template
│   │   └── README.md                # Go service documentation
│   │
│   └── ai-service/          # Python AI Service
│       ├── main.py                  # FastAPI application
│       ├── requirements.txt         # Python dependencies
│       ├── .env.example             # Environment template
│       └── README.md                # AI service documentation
│
└── packages/                # Shared packages (empty for now)
```

## Development Commands

### Start All Services

Open 3 terminal windows/tabs:

**Terminal 1 - Frontend:**
```bash
cd apps/web
npm run dev
# Available at http://localhost:3000
```

**Terminal 2 - Go Core Service:**
```bash
cd apps/go-core
go run main.go
# Available at http://localhost:8080
```

**Terminal 3 - AI Service:**
```bash
cd apps/ai-service
source venv/bin/activate  # On Windows: venv\Scripts\activate
python main.py
# Available at http://localhost:8000
```

### Turborepo Commands

```bash
# Run all apps in dev mode (frontend only)
npm run dev

# Build all apps
npm run build

# Lint all apps
npm run lint

# Format code
npm run format

# Clean all builds
npm run clean
```

### Individual Service Commands

**Frontend (Next.js):**
```bash
cd apps/web
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
```

**Go Core Service:**
```bash
cd apps/go-core
go run main.go       # Development
go build -o bin/go-core main.go  # Build binary
go test ./...        # Run tests
```

**AI Service:**
```bash
cd apps/ai-service
source venv/bin/activate
python main.py       # Development
uvicorn main:app --reload  # Alternative dev server
pytest              # Run tests (when implemented)
```

## Environment Configuration

### apps/web/.env.local (optional)

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_AI_URL=http://localhost:8000
```

### apps/go-core/.env

```env
PORT=8080
GIN_MODE=debug
```

### apps/ai-service/.env

```env
PORT=8000
```

## Troubleshooting

### Port Already in Use

If you get "port already in use" errors:

```bash
# Find process using port 3000 (frontend)
lsof -i :3000
kill -9 <PID>

# Find process using port 8080 (Go)
lsof -i :8080
kill -9 <PID>

# Find process using port 8000 (AI)
lsof -i :8000
kill -9 <PID>
```

### Python Virtual Environment Issues

```bash
# Remove and recreate venv
cd apps/ai-service
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Go Module Issues

```bash
cd apps/go-core
go clean -modcache
go mod download
```

### Node Module Issues

```bash
# Clean and reinstall
rm -rf node_modules apps/*/node_modules
npm install
```

## Next Steps

1. ✅ Complete setup using `./setup.sh` or manual steps
2. 🚀 Start all three services in separate terminals
3. 🌐 Open http://localhost:3000 to see the frontend
4. 🧪 Test API endpoints:
   - Go: http://localhost:8080/api/v1/health
   - AI: http://localhost:8000/health
5. 📚 Read individual service READMEs for more details

## Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Go Gin Documentation](https://gin-gonic.com/docs/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
