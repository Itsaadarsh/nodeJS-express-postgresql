"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
const cart_1 = __importDefault(require("../models/cart"));
const getHome = (_req, res, _next) => {
    product_1.default.Products.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'SHOP',
            path: '/',
        });
    });
};
const getProducts = (_req, res, _next) => {
    product_1.default.Products.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'ALL PRODUCTS',
            path: '/products',
        });
    });
};
const getProduct = (req, res, _next) => {
    const prodID = req.params.productId;
    product_1.default.Products.findById(prodID, (products) => {
        res.render('shop/product-detail', {
            product: products,
            pageTitle: products.title,
            path: '/products',
        });
    });
};
const getCart = (_req, res, _next) => {
    cart_1.default.Cart.getCart((cart) => {
        product_1.default.Products.fetchAll((prods) => {
            const cartPro = [];
            for (const pro of prods) {
                const proData = cart.products.find((p) => p.id === pro.id);
                if (proData) {
                    cartPro.push({ productData: pro, qty: proData.qty });
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartPro,
            });
        });
    });
};
const postCart = (req, res, _next) => {
    const prodId = req.body.productId;
    product_1.default.Products.findById(prodId, (prods) => {
        cart_1.default.Cart.addProducts(prodId, prods.price);
    });
    res.redirect('/cart');
};
const postDeleteCart = (req, res, _next) => {
    const prodId = req.body.productId;
    product_1.default.Products.findById(prodId, (prods) => {
        cart_1.default.Cart.deleteCart(prodId, prods.price);
    });
    res.redirect('/cart');
};
const getOrders = (_req, res, _next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'YOUR ORDERS',
    });
};
const getCheckout = (_req, res, _next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'CHECKOUT',
    });
};
exports.default = module.exports = {
    getHome,
    getProducts,
    getCart,
    getOrders,
    getCheckout,
    getProduct,
    postCart,
    postDeleteCart,
};
//# sourceMappingURL=shop.js.map