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
const postCart = (req, res, _next) => {
    const prodID = req.body.productId;
    console.log(prodID);
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
};
exports.default = module.exports = {
    getHome: exports.getHome,
    getProducts,
    getProduct,
    postCart,
};
//# sourceMappingURL=shop.js.map