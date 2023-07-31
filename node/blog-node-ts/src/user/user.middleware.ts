import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcryptjs';
import * as userService from './user.service';
/**
 * 验证用户数据
 */
export const validateUserData = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log('/////////?????')
    const { name, password } = request.body;
    // 使用错误中间件
    if (!name) return next(new Error('NAME_IS_REQUIRED'));
    if (!password) return next(new Error('PASSWORD_IS_REQUIRED'));
    
    // name 是否重名  service 层  sql 处理的
    const user =  await userService.getUserByName(name);
    if (user) return next(new Error('NAME_ALREADY_EXIST'));
    next();
}

/**
 * HASH密码
 */
export const hashPassword = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { password } = request.body
    request.body.password = await bcrypt.hash(password, 10);
    next()
}