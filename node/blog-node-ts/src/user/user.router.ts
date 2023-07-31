import express from 'express';
const router = express.Router();
import * as userController from './user.controller';
import {
    hashPassword,
    validateUserData
} from './user.middleware'
/**
 * restful 
 * users post 新增
 */
router.post('/users', validateUserData, hashPassword, userController.store)
router.get('/users/:userId', userController.show)

/**
 * 导出路由
 */
export default router;