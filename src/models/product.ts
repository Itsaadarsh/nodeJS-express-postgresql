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

interface Item {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
}

class Products {
  constructor(
    public title: string,
    public imageUrl: string,
    public price: string,
    public description: string
  ) {}

  save() {
    getProductsFromFile((products: Item[]) => {
      products.push({
        title: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
        price: this.price,
      });
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback: any) {
    getProductsFromFile(callback);
  }
}

export default module.exports = {
  Products,
};
