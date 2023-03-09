- 任务流 Promise() 序列  
    [upload(),upload(),upload(),upload()]
    - 随机定时器值，任务完成的时间和索引没有关系
    - 一半成功，一半失败
    - setTimeout第三个参数会在定时器到达时触发
    - promise then 最后catch injected时候触发
    - async await  
        injected
        `   try {

            }
            catch(err) {
            }
        `
    - 是否运行了

- Promise.all()中的Promise序列会全部执行通过（全部都会执行，失败并不会停下来）才认为是成功，否则认为失败
    - .all 把promise里的异步按照序列
    - 并发
- Promise.race()  
    - 第一个完成的返回值
    - 每次执行，无论成功还是失败，其输出的信息中的时间一定是延时时间最短的那个
    - 所有的都会运行
- Promise.any()
    - 关系成功，只要有一个成功就可以了，除非所有的Promise都拒绝，否则就认为成功。