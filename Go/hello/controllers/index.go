package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func ShowIndex(context *gin.Context) {
	context.String(http.StatusOK, "hello gin")
}