import Mock from 'mockjs'
Mock.mock(/\login/, 'post', (options) => {
    // console.log(options);
    // 账号密码的验证
    const body = options.body
    // console.log(body);
    const { name, password } = JSON.parse(body)
    // console.log(name, password);
    if (name === 'admin' && password === '1') {
        return {
            code: 0,
            status: 200,
            msg: 'hello',
            token: 'ren'
        }
    } else {
        return {
            code: 1,
            status: 400,
            msg: '账号或密码有误，请重新输入'
        }
        
    }
})
Mock.mock(/\/second/, 'get', (options) => {
    console.log(options);
    return {
        code: 200,
        msg: 'ok'
    }
})