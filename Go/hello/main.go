package main

import (
	"fmt"
	"log"
	"GinHello/router" // 假设你的路由文件在该路径下
)

func main() {
	fmt.Println("Hello, world!")
	router := router.InitRouter()
	err := router.Run()
	if err != nil {
		log.Fatalln("gin run error:", err)
	}
}
