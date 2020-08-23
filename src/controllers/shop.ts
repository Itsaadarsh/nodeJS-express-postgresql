import Product from '../models/product';
import express from 'express';

const getHome = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.Products.fetchAll((products: []) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'SHOP',
      path: '/',
    });
  });
};

const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.Products.fetchAll((products: []) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

const getCart = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

const getOrders = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

const getCheckout = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
};

export default module.exports = {
  getHome,
  getProducts,
  getCart,
  getOrders,
  getCheckout,
};
