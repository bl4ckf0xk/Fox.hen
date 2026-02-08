# AI Service (FastAPI)

Adaptive AI service built with Python and FastAPI for the Fox.hen CTF platform.

## Features

- Attack pattern analysis
- Adaptive difficulty adjustment
- Defense recommendations
- ML model management
- Real-time threat assessment

## Development

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run in development mode
python main.py

# Or use uvicorn directly
uvicorn main:app --reload --port 8000
```

## Environment Variables

- `PORT` - Server port (default: 8000)

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `POST /api/v1/analyze-attack` - Analyze attack patterns
- `GET /api/v1/model-status` - Get AI model status

## Example Request

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
