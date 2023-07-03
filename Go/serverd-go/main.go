package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"github.com/gin-gonic/gin"
	"strconv"
)

func main() {
	fmt.Println("hello 全栈工程师")
	dsn := "root:root@tcp(127.0.0.1:3306)/crud?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		// 解决表名复数问题
		NamingStrategy: schema.NamingStrategy {
			SingularTable: true,
		},
	})
	if err != nil {
		fmt.Println("数据库连接失败！")
		return 
	} else {
		fmt.Println("数据连接成功", db)
	}

	sqlDB, err := db.DB()
	sqlDB.SetMaxIdleConns(10)  // 最大连接数  并发
	sqlDB.SetMaxOpenConns(100) 
	sqlDB.SetConnMaxLifetime(10 *1000)  // 超时
	// LIst类  struct结构体
	type List struct {
		gorm.Model
		ID uint8 `json:"id"`  // 自增ID
		Name string `json:"name"`
		Age uint8 `json:"age"`
		School string `json:"school"`
		Phone string `json:"phone"`
		Address string `json:"address"`
	}
	// GORM库中的AutoMigrate方法自动创建或更新数据库表，与List结构体进行映射
	db.AutoMigrate(&List{})

	r := gin.Default()
	
	// 定义路由和处理函数
	r.POST("/list/add", func(c *gin.Context) {
		// postman {name: , age...}
		var data List
		err := c.ShouldBindJSON(&data)
		fmt.Println("data数据:", data)
		if err != nil {
			c.JSON(200, gin.H{
				"msg": "添加失败",
				"code": 400,
			})
		} else {
			// orm
			db.Create(&data)
			c.JSON(200, gin.H{
				"msg": "添加成功",
				"code": 200,
			})
		}
	})

	r.GET("/list/query", func(c *gin.Context) {
		var dataList []List
		pageSize, _ := strconv.Atoi(c.Query("pageSize"))
		page, _ := strconv.Atoi(c.Query("page")) // 修正此处的变量名
		offset := (page - 1) * pageSize      
		limit := pageSize
	
		var total int64
		name := c.Query("name")
	
		db.Model(&List{}).
			Where("name LIKE ?", fmt.Sprintf("%%%s%%", name)).
			Count(&total)
	
		db.Model(&List{}).
			Where("name LIKE ?", fmt.Sprintf("%%%s%%", name)).
			Offset(offset).
			Limit(limit).
			Find(&dataList)
	
		if len(dataList) == 0 {
			c.JSON(200, gin.H{
				"msg":  "没有查询到数据",
				"code": 200,
				"data": make([]int, 0),
			})
		} else {
			c.JSON(200, gin.H{
				"msg":   "查询成功",
				"code":  200,
				"data":  dataList,
				"total": total,
			})
		}
	})

	r.DELETE("/list/:id", func(c *gin.Context) {
		var data []List
		id := c.Param("id")
		db.Where("id=?", id).Find(&data)
		if len(data) == 0 {
			c.JSON(200,gin.H{
				"msg": "id 没有找到，删除失败",
				"code": 400,
			})
		} else { 
			db.Where("id=?", id).Delete(&data)
			c.JSON(200,gin.H{
				"msg": "删除成功",
				"code": 200,
			})
		}
	})

	// 启动HTTP服务器
	r.Run(":3009")
}