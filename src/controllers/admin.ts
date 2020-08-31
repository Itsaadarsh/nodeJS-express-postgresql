import { Product } from '../models/product';
// import { getRepository } from 'typeorm';
import express from 'express';

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
  const product = new Product();
  product.title = req.body.title;
  product.imageUrl = req.body.imageUrl;
  product.price = req.body.price;
  product.description = req.body.description;
  Product.save(product);
  res.redirect('/');
};

const getProducts = (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  Product.find({ select: ['title', 'imageUrl', 'price', 'description', 'id'] })
    .then((products) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'ADMIN PRODUCTS',
        path: '/admin/products',
      });
    })
    .catch((err) => console.log(err));
};

const getEditProduct = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  const prodId = +req.params.productId;
  const edit = req.query.edit;
  if (edit === 'false') res.redirect('/');
  Product.findOne({ id: +prodId })
    .then((prod) => {
      if (!prod) res.redirect('/');
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: edit,
        product: prod,
      });
    })
    .catch((err) => console.log(err));
};

const postEditProduct = (
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) => {
  Product.update(
    { id: +req.body.productId },
    {
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      description: req.body.description,
    }
  );
  res.redirect('/admin/products');
};

// const postDeleteProduct = (
//   req: express.Request,
//   res: express.Response,
//   _next: express.NextFunction
// ) => {
//   const prodId = req.body.productId;
//   Product.Products.deletePro(prodId);
//   res.redirect('/admin/products');
// };

export default module.exports = {
  getAddProduct,
  getProducts,
  postAddProduct,
  getEditProduct,
  postEditProduct,
  // postDeleteProduct,
};
