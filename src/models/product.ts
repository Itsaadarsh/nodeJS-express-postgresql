import fs from 'fs';
import path from 'path';

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
  id: string;
}

class Products {
  public id: string;
  constructor(
    public title: string,
    public imageUrl: string,
    public price: string,
    public description: string
  ) {}

  save() {
    this.id = Math.floor(Math.random() * 100000).toString();
    getProductsFromFile((products: Item[]) => {
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
}

export default module.exports = {
  Products,
};
