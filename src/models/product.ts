import fs from 'fs';
import path from 'path';

const p = path.join(__dirname, 'data', 'products.json');
console.log(p);

const getProductsFromFile = (callback: any) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

interface Item {
  title: string;
  imgURL: string;
  description: string;
  price: string;
}

class Products {
  constructor(public title: string, public imgURL: string, public description: string, public price: string) {}

  save() {
    getProductsFromFile((products: Item[]) => {
      products.push({ title: this.title, imgURL: this.imgURL, description: this.description, price: this.price });
      console.log(products);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log('This is the error');
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
