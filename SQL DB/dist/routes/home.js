"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const add_products_1 = __importDefault(require("./add-products"));
router.get('/', (_req, res, _next) => {
    res.render('shop', {
        pageTitle: 'SHOP',
        prods: add_products_1.default.products,
        hasProducts: add_products_1.default.products.length > 0,
    });
});
exports.default = module.exports = router;
//# sourceMappingURL=home.js.map