"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const product_1 = require("../models/product");
const user_1 = require("../models/user");
exports.getHome = (req, res, _next) => {
    const user = new user_1.User();
    const uname = req.query.username;
    const uemail = req.query.useremail;
    user.username = uname;
    user.email = uemail;
    user.save();
    product_1.Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
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
const getProducts = (_req, res, _next) => {
    product_1.Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
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
const getProduct = (req, res, _next) => {
    const prodID = +req.params.productId;
    product_1.Product.findOne({ id: prodID })
        .then((prod) => {
        res.render('shop/product-detail', {
            product: prod,
            pageTitle: prod.title,
            path: '/products',
        });
    })
        .catch((err) => console.log(err));
};
exports.default = module.exports = {
    getHome: exports.getHome,
    getProducts,
    getProduct,
};
//# sourceMappingURL=shop.js.map