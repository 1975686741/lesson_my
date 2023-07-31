import { Request, Response, NextFunction } from 'express'
import * as userService from './user.service';

export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log('-------||||||||||---------------')
    // 请求体中解出用户名 密码
    const { name, password } = request.body;
    // console.log(name, password, '///////');
    // sql 数据库和node 服务器 一定是分离
    try {
        const data = await userService.createUser({name, password});
        response.status(201).send(data);
    } catch(error) {
        next(error)
    }
}

export const show = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { userId } = request.params
    // sql try
    try {
        const user = await userService.getUserById(parseInt(userId, 10))
        if (!user) {
            return next(new Error('USER_NOT_FOUND'))
        }
        response.status(200).send(user)
    } catch(err) {
        next(err)
    }
    // 200
    // name
}