package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type HealthResponse struct {
	Status  string `json:"status"`
	Service string `json:"service"`
	Version string `json:"version"`
}

type TargetStatus struct {
	ID         string `json:"id"`
	Name       string `json:"name"`
	Difficulty int    `json:"difficulty"`
	State      string `json:"state"`
}

func main() {
	// Load environment variables
	godotenv.Load()

	// Set Gin mode
	mode := os.Getenv("GIN_MODE")
	if mode == "" {
		mode = "debug"
	}
	gin.SetMode(mode)

	// Initialize router
	r := gin.Default()

	// CORS middleware
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	// API routes
	api := r.Group("/api/v1")
	{
		// Health check
		api.GET("/health", func(c *gin.Context) {
			c.JSON(http.StatusOK, HealthResponse{
				Status:  "healthy",
				Service: "go-core",
				Version: "0.1.0",
			})
		})

		// Target endpoints
		targets := api.Group("/targets")
		{
			targets.GET("", func(c *gin.Context) {
				// Mock data - will be replaced with actual database queries
				c.JSON(http.StatusOK, []TargetStatus{
					{
						ID:         "target-001",
						Name:       "Web Server Alpha",
						Difficulty: 1,
						State:      "active",
					},
					{
						ID:         "target-002",
						Name:       "Database Beta",
						Difficulty: 2,
						State:      "active",
					},
				})
			})

			targets.GET("/:id", func(c *gin.Context) {
				id := c.Param("id")
				c.JSON(http.StatusOK, TargetStatus{
					ID:         id,
					Name:       "Web Server Alpha",
					Difficulty: 1,
					State:      "active",
				})
			})
		}
	}

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Starting Go Core Service on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal(err)
	}
}
