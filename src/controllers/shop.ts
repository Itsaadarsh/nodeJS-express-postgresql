// import Product, { Item } from '../models/product';
// import Cart from '../models/cart';
// import express from 'express';
// import { CartInterface } from '../models/cart';

// const getHome = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   Product.Products.fetchAll((products: Item[]) => {
//     res.render('shop/index', {
//       prods: products,
//       pageTitle: 'SHOP',
//       path: '/',
//     });
//   });
// };

// const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   Product.Products.fetchAll((products: Item[]) => {
//     res.render('shop/product-list', {
//       prods: products,
//       pageTitle: 'ALL PRODUCTS',
//       path: '/products',
//     });
//   });
// };

// const getProduct = (req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   const prodID = req.params.productId;
//   Product.Products.findById(prodID, (products: Item) => {
//     res.render('shop/product-detail', {
//       product: products,
//       pageTitle: products.title,
//       path: '/products',
//     });
//   });
// };

// const getCart = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   Cart.Cart.getCart((cart: CartInterface) => {
//     Product.Products.fetchAll((prods: Item[]) => {
//       const cartPro = [];
//       for (const pro of prods) {
//         const proData = cart.products.find((p) => p.id === pro.id);
//         if (proData) {
//           cartPro.push({ productData: pro, qty: proData.qty });
//         }
//       }
//       res.render('shop/cart', {
//         path: '/cart',
//         pageTitle: 'Your Cart',
//         products: cartPro,
//       });
//     });
//   });
// };

// const postCart = (req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   const prodId: string = req.body.productId;
//   Product.Products.findById(prodId, (prods: Item) => {
//     Cart.Cart.addProducts(prodId, prods.price);
//   });
//   res.redirect('/cart');
// };

// const postDeleteCart = (
//   req: express.Request,
//   res: express.Response,
//   _next: express.NextFunction
// ) => {
//   const prodId: string = req.body.productId;
//   Product.Products.findById(prodId, (prods: Item) => {
//     Cart.Cart.deleteCart(prodId, prods.price);
//   });
//   res.redirect('/cart');
// };

// const getOrders = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   res.render('shop/orders', {
//     path: '/orders',
//     pageTitle: 'YOUR ORDERS',
//   });
// };

// const getCheckout = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
//   res.render('shop/checkout', {
//     path: '/checkout',
//     pageTitle: 'CHECKOUT',
//   });
// };

// export default module.exports = {
//   getHome,
//   getProducts,
//   getCart,
//   getOrders,
//   getCheckout,
//   getProduct,
//   postCart,
//   postDeleteCart,
// };
