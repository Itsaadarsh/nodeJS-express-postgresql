import express from 'express';
const router = express.Router();
import adminController from '../controllers/admin';

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

export default module.exports = {
  router,
};
