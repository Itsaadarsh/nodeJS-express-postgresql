"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
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
    const product = new product_1.default.Products(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};
const getProducts = (_req, res, _next) => {
    product_1.default.Products.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'ADMIN PRODUCTS',
            path: '/admin/products',
        });
    });
};
const getEditProduct = (req, res, _next) => {
    const prodId = req.params.productId;
    const edit = req.query.edit;
    if (edit === 'false') {
        res.redirect('/');
    }
    product_1.default.Products.findById(prodId, (product) => {
        if (!product) {
            res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: edit,
            product: product,
        });
    });
};
exports.default = module.exports = {
    getAddProduct,
    getProducts,
    postAddProduct,
    getEditProduct,
};
//# sourceMappingURL=admin.js.map