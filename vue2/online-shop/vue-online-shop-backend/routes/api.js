var express = require('express');
var router = express.Router();
// manufacturer 企业控制器
var manufacturerController = require('../controllers/manufacturer');
var productController = require('../controllers/product')
// - restful 资源的暴露方式
// - mvc 的分离
/* GET home page. */

router.get('/manufacturers', manufacturerController.all);
router.get('/manufacturers/:id', manufacturerController.byId);
router.post('/manufacturers', manufacturerController.create);
router.put('/manufacturers/:id', manufacturerController.update);
router.delete('/manufacturers/:id', manufacturerController.remove);

router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;
