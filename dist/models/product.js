"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const p = path_1.default.join(__dirname, 'data', 'products.json');
console.log(p);
const getProductsFromFile = (callback) => {
    fs_1.default.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        }
        else {
            callback(JSON.parse(fileContent));
        }
    });
};
class Products {
    constructor(title, imgURL, description, price) {
        this.title = title;
        this.imgURL = imgURL;
        this.description = description;
        this.price = price;
    }
    save() {
        getProductsFromFile((products) => {
            products.push({ title: this.title, imgURL: this.imgURL, description: this.description, price: this.price });
            console.log(products);
            fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                console.log('This is the error');
                console.log(err);
            });
        });
    }
    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
}
exports.default = module.exports = {
    Products,
};
//# sourceMappingURL=product.js.map