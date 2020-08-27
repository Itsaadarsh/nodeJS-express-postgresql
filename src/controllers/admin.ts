import Product, { Item } from '../models/product';
import express from 'express';
// Just checking!
const getAddProduct = (
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  res.render('admin/edit-product', {
    pageTitle: 'ADD PRODUCTS',
    path: '/admin/add-product',
    editing: false,
  });
};

const postAddProduct = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const title: string = req.body.title;
  const imageUrl: string = req.body.imageUrl;
  const price: string = req.body.price;
  const description: string = req.body.description;
  const product = new Product.Products(title, imageUrl, price, description, undefined);
  product.save();
  res.redirect('/');
};

const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.Products.fetchAll((products: Item[]) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'ADMIN PRODUCTS',
      path: '/admin/products',
    });
  });
};

const getEditProduct = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const prodId = req.params.productId;
  const edit = req.query.edit;
  if (edit === 'false') {
    res.redirect('/');
  }
  Product.Products.findById(prodId, (product: Item) => {
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

const postEditProduct = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const UprodId: string = req.body.productId;
  const Utitle: string = req.body.title;
  const UimageUrl: string = req.body.imageUrl;
  const Uprice: string = req.body.price;
  const Udescription: string = req.body.description;
  const Uproduct = new Product.Products(Utitle, UimageUrl, Uprice, Udescription, UprodId);
  Uproduct.save();
  res.redirect('/admin/products');
};

const postDeleteProduct = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const prodId = req.body.productId;
  Product.Products.deletePro(prodId);
  res.redirect('/admin/products');
};

export default module.exports = {
  getAddProduct,
  getProducts,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
};
