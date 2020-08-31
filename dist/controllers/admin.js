"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
const getAddProduct = (_req, res, _next) => {
    res.render('admin/edit-product', {
        pageTitle: 'ADD PRODUCTS',
        path: '/admin/add-product',
        editing: false,
    });
};
const postAddProduct = (req, res, _next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new product_1.Product();
    product.title = title;
    product.imageUrl = imageUrl;
    product.price = price;
    product.description = description;
    product_1.Product.save(product);
    res.redirect('/');
};
const getProducts = (_req, res, _next) => {
    product_1.Product.find({ select: ['title', 'imageUrl', 'price', 'description'] })
        .then((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'ADMIN PRODUCTS',
            path: '/admin/products',
        });
    })
        .catch((err) => console.log(err));
};
exports.default = module.exports = {
    getAddProduct,
    getProducts,
    postAddProduct,
};
//# sourceMappingURL=admin.js.map