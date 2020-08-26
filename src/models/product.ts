import fs from 'fs';
import path from 'path';
import cart from './cart';

const p = path.join(__dirname, '../', '../', 'data', 'products.json');

const getProductsFromFile = (callback: Function) => {
  fs.readFile(p, (err, fileContent: any) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

export interface Item {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
  id?: string;
}

class Products implements Item {
  constructor(
    public title: string,
    public imageUrl: string,
    public price: string,
    public description: string,
    public id?: string
  ) {}

  save() {
    getProductsFromFile((products: Item[]) => {
      if (this.id) {
        const existingProIndex = products.findIndex((p) => p.id === this.id);
        const updatePro = [...products];
        updatePro[existingProIndex] = this;
        fs.writeFile(p, JSON.stringify(updatePro), (err) => {
          if (!err) {
            cart.Cart.upGrade(this.id!, this.price);
          }
        });
      } else {
        this.id = Math.floor(Math.random() * 100000).toString();
        products.push({
          title: this.title,
          imageUrl: this.imageUrl,
          description: this.description,
          price: this.price,
          id: this.id,
        });
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(callback: Function) {
    getProductsFromFile(callback);
  }

  static findById(id: string, callback: Function) {
    getProductsFromFile((products: Item[]) => {
      const product = products.find((p) => p.id === id);
      callback(product);
    });
  }

  static deletePro(id: string) {
    getProductsFromFile((products: Item[]) => {
      const delProIndex = products.findIndex((p) => p.id === id);
      const delPro = [...products];
      if (delProIndex > -1) {
        var prodPrice = delPro[delProIndex].price;
        delPro.splice(delProIndex, 1);
      }
      fs.writeFile(p, JSON.stringify(delPro), (err) => {
        if (!err) {
          cart.Cart.deleteCart(id, prodPrice);
        }
      });
    });
  }
}

export default module.exports = {
  Products,
};
