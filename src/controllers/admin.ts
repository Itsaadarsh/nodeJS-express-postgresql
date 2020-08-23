import Product from '../models/product';
import express from 'express';

const getAddProduct = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.render('admin/add-product', {
    pageTitle: 'ADD PRODUCTS',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const title = req.body.title;
  const imgURL = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product.Products(title, imgURL, price, description);
  product.save();
  res.redirect('/');
};

const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.Products.fetchAll((products: []) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};

export default module.exports = {
  getAddProduct,
  getProducts,
  postAddProduct,
};
