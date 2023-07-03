package router

import (
	"github.com/gin-gonic/gin"
	"GinHello/controllers"
)
// go 语言不太简易class 面向对象 
// public  函数大写
// 返回值  * 指针 
// gin.Engin  App  
func InitRouter() *gin.Engine {
	router := gin.Default() // 默认web引擎
	// restful 配置路由
	router.GET("/", controller.ShowIndex)
	return router // 返回引擎
}