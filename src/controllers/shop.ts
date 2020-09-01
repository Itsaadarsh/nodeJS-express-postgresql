// import { Cart } from '../models/cart';
import { Product } from '../models/product';
import express from 'express';
import { User } from '../models/user';

export const getHome = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const user = new User();
  const uname: string = req.query.username;
  const uemail: string = req.query.useremail;
  user.username = uname;
  user.email = uemail;
  user.save();
  Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
    .then((products) => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'SHOP',
        path: '/',
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return user;
};

const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
    .then((products) => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'ALL PRODUCTS',
        path: '/products',
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProduct = (req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const prodID: number = +req.params.productId;
  Product.findOne({ id: prodID })
    .then((prod) => {
      res.render('shop/product-detail', {
        product: prod,
        pageTitle: prod!.title,
        path: '/products',
      });
    })
    .catch((err) => console.log(err));
};

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

export default module.exports = {
  getHome,
  getProducts,
  //   getCart,
  //   getOrders,
  //   getCheckout,
  getProduct,
  //   postCart,
  //   postDeleteCart,
};
