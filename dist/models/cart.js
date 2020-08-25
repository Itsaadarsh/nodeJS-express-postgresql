"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const p = path_1.default.join(__dirname, '../', '../', 'data', 'cart.json');
class Cart {
    static addProducts(id, productPrice) {
        fs_1.default.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProIndex = cart.products.findIndex((prods) => prods.id === id);
            const existingPro = cart.products[existingProIndex];
            let updatedPro;
            if (existingPro) {
                updatedPro = Object.assign({}, existingPro);
                updatedPro.qty = updatedPro.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProIndex] = updatedPro;
            }
            else {
                updatedPro = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedPro];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs_1.default.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
    static getCart(callback) {
        fs_1.default.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if (err) {
                callback(null);
            }
            else {
                callback(cart);
            }
        });
    }
    static deleteCart(id, productPrice) {
        fs_1.default.readFile(p, (_err, fileContent) => {
            var delCart = JSON.parse(fileContent);
            const delPro = delCart.products.findIndex((p) => p.id === id);
            if (delPro > -1) {
                delCart.totalPrice = delCart.totalPrice - delCart.products[delPro].qty * +productPrice;
                delCart.products.splice(delPro, 1);
            }
            fs_1.default.writeFile(p, JSON.stringify(delCart), (err) => {
                console.log(err);
            });
        });
    }
}
exports.default = module.exports = {
    Cart,
};
//# sourceMappingURL=cart.js.map