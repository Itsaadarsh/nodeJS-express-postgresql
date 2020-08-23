import express from 'express';
const router = express.Router();
import adminData from './admin';

router.get('/', (_req, res, _next) => {
  res.render('shop', {
    pageTitle: 'SHOP',
    prods: adminData.products,
    hasProducts: adminData.products.length > 0,
  });
});

export default module.exports = router;
