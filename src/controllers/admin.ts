import Product, { Item } from '../models/product';
import express from 'express';

const getAddProduct = (
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  res.render('admin/add-product', {
    pageTitle: 'ADD PRODUCTS',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const title: string = req.body.title;
  const imageUrl: string = req.body.imageUrl;
  const price: string = req.body.price;
  const description: string = req.body.description;
  const product = new Product.Products(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.Products.fetchAll((products: Item[]) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'ADMIN PRODUCTS',
      path: '/admin/products',
    });
  });
};

export default module.exports = {
  getAddProduct,
  getProducts,
  postAddProduct,
};
