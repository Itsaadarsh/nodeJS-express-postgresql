"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const p = path_1.default.join(__dirname, '../', '../', 'data', 'products.json');
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
    constructor(title, imageUrl, price, description, id) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
        this.id = id;
    }
    save() {
        getProductsFromFile((products) => {
            if (this.id) {
                const existingProIndex = products.findIndex((p) => p.id === this.id);
                const updatePro = [...products];
                updatePro[existingProIndex] = this;
                fs_1.default.writeFile(p, JSON.stringify(updatePro), (err) => {
                    console.log(err);
                });
            }
            else {
                this.id = Math.floor(Math.random() * 100000).toString();
                products.push({
                    title: this.title,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    price: this.price,
                    id: this.id,
                });
                fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });
    }
    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
    static findById(id, callback) {
        getProductsFromFile((products) => {
            const product = products.find((p) => p.id === id);
            callback(product);
        });
    }
}
exports.default = module.exports = {
    Products,
};
//# sourceMappingURL=product.js.map