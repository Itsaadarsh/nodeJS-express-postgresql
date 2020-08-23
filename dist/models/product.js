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
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    save() {
        getProductsFromFile((products) => {
            products.push({
                title: this.title,
                imageUrl: this.imageUrl,
                description: this.description,
                price: this.price,
            });
            fs_1.default.writeFile(p, JSON.stringify(products), (err) => {
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