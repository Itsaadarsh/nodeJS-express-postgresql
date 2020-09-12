import { Cart } from '../models/cart';
import { Product } from '../models/product';
import express from 'express';
import { CartItem } from '../models/cart-item';
import { Order } from '../models/order';
import { User } from '../models/user';
import { OrderItem } from '../models/order-item';
import { CartItems, OrderItems } from '../controllers/interface/shop';

export const getHome = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'SHOP',
        path: '/',
      });
    })
    .catch(console.log);
};

const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
    .then(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'ALL PRODUCTS',
        path: '/products',
      });
    })
    .catch(console.log);
};

const getProduct = (req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const prodID: number = +req.params.productId;
  Product.findOne({ id: prodID })
    .then(prod => {
      res.render('shop/product-detail', {
        product: prod,
        pageTitle: prod!.title,
        path: '/products',
      });
    })
    .catch(console.log);
};

const getCart = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const product: CartItems[] = [];
  CartItem.find({ relations: ['prodid'] })
    .then(citem => {
      citem.forEach(item => {
        product.push({ id: item.id, title: item.prodid.title, cartItem: { quantity: item.quantity } });
      });
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: product,
      });
    })
    .catch(console.log);
};

const postCart = (req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const prodID: number = +req.body.productId;
  CartItem.find({ relations: ['prodid'], where: { prodid: { id: prodID } } })
    .then(avaiProd => {
      if (avaiProd.length === 0) {
        Product.findOne({ where: { id: prodID } })
          .then(prod => {
            Cart.find({ select: ['id'] })
              .then(cart => {
                const defQty = 1;
                const cartitem = new CartItem();
                cartitem.quantity = defQty;
                cartitem.cartid = cart[cart.length - 1];
                cartitem.prodid = prod as Product;
                cartitem.save();
                setTimeout(() => {
                  res.redirect('/cart');
                }, 500);
              })
              .catch(console.log);
          })
          .catch(console.log);
      } else {
        const updateQty = avaiProd[0].quantity + 1;
        CartItem.update({ id: avaiProd[0].id }, { quantity: updateQty });
        setTimeout(() => {
          res.redirect('/cart');
        }, 500);
      }
    })
    .catch(console.log);
};

const postDeleteCart = (req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const prodId: number = +req.body.productId;
  CartItem.delete({ id: prodId });
  setTimeout(() => {
    res.redirect('/cart');
  }, 300);
};

const getOrders = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const orders: OrderItems[] = [];
  OrderItem.find({ relations: ['orderid', 'prodid'], order: { id: 'ASC' } })
    .then(ord => {
      ord.forEach(singleOrd => {
        orders.push({
          id: singleOrd.id,
          products: [{ title: singleOrd.prodTitle, qty: singleOrd.quantity }],
        });
      });
      res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
        orders: orders,
      });
    })
    .catch(console.log);
};

const postOrder = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  User.find({ select: ['id'] })
    .then(userId => {
      const userID = userId[userId.length - 1];
      const order = new Order();
      order.userid = userID;
      order.save();

      setTimeout(() => {
        Order.find({ relations: ['userid'], where: { userid: userID }, order: { id: 'DESC' }, take: 1 })
          .then(ord => {
            CartItem.find({ relations: ['cartid', 'prodid'], where: { cartid: userID } })
              .then(cItem => {
                cItem.forEach(oItem => {
                  const orderItem = new OrderItem();
                  orderItem.quantity = oItem.quantity;
                  orderItem.prodTitle = oItem.prodid.title;
                  orderItem.orderid = ord[0];
                  orderItem.prodid = oItem.prodid;
                  orderItem.save();
                  CartItem.delete({ cartid: userID });
                });
                setTimeout(() => {
                  res.redirect('/orders');
                }, 300);
              })
              .catch(console.log);
          })
          .catch(console.log);
      }, 700);
    })
    .catch(console.log);
};

export default module.exports = {
  getHome,
  getProducts,
  getCart,
  getOrders,
  postOrder,
  getProduct,
  postCart,
  postDeleteCart,
};
