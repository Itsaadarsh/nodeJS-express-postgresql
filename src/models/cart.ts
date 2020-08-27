import path from 'path';
import fs from 'fs';

const p = path.join(__dirname, '../', '../', 'data', 'cart.json');

interface CartItems {
  id: string;
  qty: number;
}

export interface CartInterface {
  products: CartItems[];
  totalPrice: number;
}

class Cart {
  static addProducts(id: string, productPrice: string) {
    fs.readFile(p, (err, fileContent: any) => {
      let cart: CartInterface = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProIndex: number = cart.products.findIndex((prods) => prods.id === id);
      const existingPro = cart.products[existingProIndex];
      let updatedPro: CartItems;
      if (existingPro) {
        updatedPro = { ...existingPro };
        updatedPro.qty = updatedPro.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProIndex] = updatedPro;
      } else {
        updatedPro = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedPro];
      }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart(callback: Function) {
    fs.readFile(p, (err, fileContent: any) => {
      const cart = JSON.parse(fileContent);
      if (err) {
        callback(null);
      } else {
        callback(cart);
      }
    });
  }

  static upGrade(id: string, productPrice: string) {
    fs.readFile(p, (_err, fileContent: any) => {
      var upCart: CartInterface = JSON.parse(fileContent);
      const upPro: number = upCart.products.findIndex((p) => p.id === id)!;
      if (upPro > -1) {
        upCart.products = [...upCart.products];
        upCart.totalPrice = 0;
        for (let i in upCart.products) {
          const upIndPrice = upCart.products[i].qty * +productPrice;
          upCart.totalPrice += upIndPrice;
        }
        fs.writeFile(p, JSON.stringify(upCart), (err) => {
          console.log(err);
        });
      }
    });
  }

  static deleteCart(id: string, productPrice: string) {
    fs.readFile(p, (_err, fileContent: any) => {
      var delCart: CartInterface = JSON.parse(fileContent);
      const delPro: number = delCart.products.findIndex((p) => p.id === id)!;
      if (delPro > -1) {
        delCart.totalPrice = delCart.totalPrice - delCart.products[delPro].qty * +productPrice;
        delCart.products.splice(delPro, 1);
        fs.writeFile(p, JSON.stringify(delCart), (err) => {
          console.log(err);
        });
      }
    });
  }
}

export default module.exports = {
  Cart,
};
