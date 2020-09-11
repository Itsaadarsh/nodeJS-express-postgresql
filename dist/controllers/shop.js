"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const cart_1 = require("../models/cart");
const product_1 = require("../models/product");
const cart_item_1 = require("../models/cart-item");
exports.getHome = (_req, res, _next) => {
    product_1.Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
        .then(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'SHOP',
            path: '/',
        });
    })
        .catch(err => {
        console.log(err);
    });
};
const getProducts = (_req, res, _next) => {
    product_1.Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
        .then(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'ALL PRODUCTS',
            path: '/products',
        });
    })
        .catch(err => {
        console.log(err);
    });
};
const getProduct = (req, res, _next) => {
    const prodID = +req.params.productId;
    product_1.Product.findOne({ id: prodID })
        .then(prod => {
        res.render('shop/product-detail', {
            product: prod,
            pageTitle: prod.title,
            path: '/products',
        });
    })
        .catch(err => console.log(err));
};
const getCart = (_req, res, _next) => {
    const product = [];
    cart_item_1.CartItem.find({ relations: ['prodid'] })
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
const postCart = (req, res, _next) => {
    const prodID = +req.body.productId;
    cart_item_1.CartItem.find({ relations: ['prodid'], where: { prodid: { id: prodID } } })
        .then(avaiProd => {
        if (avaiProd.length === 0) {
            product_1.Product.findOne({ where: { id: prodID } })
                .then(prod => {
                cart_1.Cart.find({ select: ['id'] })
                    .then(cart => {
                    const defQty = 1;
                    const cartitem = new cart_item_1.CartItem();
                    cartitem.quantity = defQty;
                    cartitem.cartid = cart[cart.length - 1];
                    cartitem.prodid = prod;
                    cartitem.save();
                    res.redirect('/cart');
                })
                    .catch(console.log);
            })
                .catch(console.log);
        }
        else {
            const updateQty = avaiProd[0].quantity + 1;
            cart_item_1.CartItem.update({ id: avaiProd[0].id }, { quantity: updateQty });
            setTimeout(() => {
                res.redirect('/cart');
            }, 500);
        }
    })
        .catch(console.log);
};
const postDeleteCart = (req, res, _next) => {
    const prodId = +req.body.productId;
    cart_item_1.CartItem.delete({ id: prodId });
    setTimeout(() => {
        res.redirect('/cart');
    }, 300);
};
const postOrder = (_req, _res, _next) => { };
exports.default = module.exports = {
    getHome: exports.getHome,
    getProducts,
    getCart,
    postOrder,
    getProduct,
    postCart,
    postDeleteCart,
};
//# sourceMappingURL=shop.js.map