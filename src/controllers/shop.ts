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
      pageTitle: 'ALL PRODUCTS',
      path: '/products',
    });
  });
};

const getCart = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'YOUR CART',
  });
};

const getOrders = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'YOUR ORDERS',
  });
};

const getCheckout = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'CHECKOUT',
  });
};

export default module.exports = {
  getHome,
  getProducts,
  getCart,
  getOrders,
  getCheckout,
};
