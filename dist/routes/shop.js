"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const shop_1 = __importDefault(require("../controllers/shop"));
router.get('/', shop_1.default.getHome);
router.get('/products', shop_1.default.getProducts);
router.get('/products/:productId', shop_1.default.getProduct);
exports.default = module.exports = router;
//# sourceMappingURL=shop.js.map