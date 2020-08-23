import express from 'express';
const router = express.Router();

const products: Product[] = [];

interface Product {
  title: string;
}

router.get('/add-product', (_req, res, _next) => {
  res.render('add-product', { pageTitle: 'ADD PRODUCTS' });
});
router.post('/add-product', (req, res, _next) => {
  res.redirect('/');
  products.push({ title: req.body.title });
  console.log(products);
});

export default module.exports = {
  router,
  products,
};
