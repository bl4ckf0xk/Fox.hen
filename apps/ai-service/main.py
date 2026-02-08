from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv
import random

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Fox.hen AI Service",
    description="Adaptive AI service for CTF target hardening",
    version="0.1.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class AttackPattern(BaseModel):
    timestamp: str
    attack_type: str
    target_id: str
    success: bool
    stealth_score: float

class AdaptiveResponse(BaseModel):
    target_id: str
    new_difficulty: int
    recommended_defenses: List[str]
    threat_level: str

class HealthResponse(BaseModel):
    status: str
    service: str
    version: str

# Routes
@app.get("/", response_model=HealthResponse)
async def root():
    return {
        "status": "healthy",
        "service": "ai-service",
        "version": "0.1.0"
    }

@app.get("/health", response_model=HealthResponse)
async def health():
    return {
        "status": "healthy",
        "service": "ai-service",
        "version": "0.1.0"
    }

@app.post("/api/v1/analyze-attack", response_model=AdaptiveResponse)
async def analyze_attack(attack: AttackPattern):
    """
    Analyze attack patterns and provide adaptive response recommendations.
    
    This is a mock implementation that will be replaced with actual ML models.
    """
    # Mock adaptive logic based on attack characteristics
    base_difficulty = 1
    
    # Increase difficulty based on success rate and stealth
    if attack.success:
        base_difficulty += 1
    
    if attack.stealth_score < 0.3:  # Noisy attack
        base_difficulty += 0
    elif attack.stealth_score < 0.7:  # Moderate stealth
        base_difficulty += 1
    else:  # High stealth
        base_difficulty += 2
    
    # Determine threat level
    if base_difficulty <= 1:
        threat_level = "low"
    elif base_difficulty <= 3:
        threat_level = "medium"
    else:
        threat_level = "high"
    
    # Recommend defenses based on attack type
    defense_map = {
        "sql_injection": ["WAF rules update", "Input validation", "Prepared statements"],
        "xss": ["CSP headers", "Output encoding", "Input sanitization"],
        "brute_force": ["Rate limiting", "Account lockout", "MFA enforcement"],
        "privilege_escalation": ["Permission audit", "Least privilege", "Monitoring"],
        "default": ["Log monitoring", "Security patch", "Firewall rules"]
    }
    
    defenses = defense_map.get(attack.attack_type, defense_map["default"])
    
    return {
        "target_id": attack.target_id,
        "new_difficulty": int(base_difficulty),
        "recommended_defenses": random.sample(defenses, min(3, len(defenses))),
        "threat_level": threat_level
    }

@app.get("/api/v1/model-status")
async def model_status():
    """
    Get the status of AI models.
    """
    return {
        "models": [
            {
                "name": "attack_classifier",
                "status": "ready",
                "version": "1.0.0",
                "accuracy": 0.87
            },
            {
                "name": "difficulty_predictor",
                "status": "ready",
                "version": "1.0.0",
                "accuracy": 0.82
            }
        ],
        "last_training": "2024-01-15T10:30:00Z"
    }

if __name__ == "__main__":
    import uvicorn
    
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        reload=True
    )
