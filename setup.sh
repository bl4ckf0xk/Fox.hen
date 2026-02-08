#!/bin/bash

# Fox.hen Monorepo Setup Script
# This script initializes the development environment

set -e

echo "🦊 Fox.hen Monorepo Setup"
echo "=========================="
echo ""

# Check prerequisites
echo "📋 Checking prerequisites..."

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current: $(node -v)"
    exit 1
fi
echo "✅ Node.js $(node -v)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi
echo "✅ npm $(npm -v)"

# Check Go
if ! command -v go &> /dev/null; then
    echo "⚠️  Go is not installed. Go service will not be available."
    echo "   Install Go 1.21+ from https://go.dev/dl/"
else
    echo "✅ Go $(go version | cut -d ' ' -f 3)"
fi

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "⚠️  Python3 is not installed. AI service will not be available."
    echo "   Install Python 3.11+ from https://www.python.org/downloads/"
else
    echo "✅ Python $(python3 --version)"
fi

echo ""
echo "📦 Installing dependencies..."

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

# Install Go dependencies if Go is available
if command -v go &> /dev/null; then
    echo "Installing Go dependencies..."
    cd apps/go-core
    go mod download
    cd ../..
fi

# Install Python dependencies if Python is available
if command -v python3 &> /dev/null; then
    echo "Installing Python dependencies..."
    cd apps/ai-service
    
    # Create virtual environment if it doesn't exist
    if [ ! -d "venv" ]; then
        python3 -m venv venv
    fi
    
    # Activate and install
    source venv/bin/activate
    pip install -r requirements.txt
    deactivate
    
    cd ../..
fi

echo ""
echo "⚙️  Setting up environment files..."

# Setup environment files
if [ ! -f "apps/go-core/.env" ]; then
    cp apps/go-core/.env.example apps/go-core/.env
    echo "✅ Created apps/go-core/.env"
fi

if [ ! -f "apps/ai-service/.env" ]; then
    cp apps/ai-service/.env.example apps/ai-service/.env
    echo "✅ Created apps/ai-service/.env"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "🚀 To start development:"
echo ""
echo "Terminal 1 (Frontend):"
echo "  cd apps/web"
echo "  npm run dev"
echo ""
echo "Terminal 2 (Go Core Service):"
echo "  cd apps/go-core"
echo "  go run main.go"
echo ""
echo "Terminal 3 (AI Service):"
echo "  cd apps/ai-service"
echo "  source venv/bin/activate"
echo "  python main.py"
echo ""
echo "🌐 Services will be available at:"
echo "  Frontend:    http://localhost:3000"
echo "  Go API:      http://localhost:8080"
echo "  AI Service:  http://localhost:8000"
echo ""
