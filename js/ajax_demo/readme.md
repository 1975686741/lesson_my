# 同学列表
    - 前后端分离
        - table
        - 后端？


        GET HTTP  Method
        /student
        返回json 数据

- npm init -y  项目变成一个后端项目
    - npm i json-server
    - packge.json   添加一个脚本  "scripts": {"dev": "json-server --watch student.json"},
    - npm run dev

- http 请求分为 GET POST    FORM表单的动作
  - GET 获取列表
  - POST 添加新数据
  
  - fetch(url,{
     method: 'POST',
     body: JSON.stringify(要添加的json名),   
     headers: {
                'Content-Type': 'application/json'
            } 
     }) 
