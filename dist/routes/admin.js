"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const admin_1 = __importDefault(require("../controllers/admin"));
router.get('/add-product', admin_1.default.getAddProduct);
router.get('/products', admin_1.default.getProducts);
router.post('/add-product', admin_1.default.postAddProduct);
router.get('/edit-product/:productId', admin_1.default.getEditProduct);
router.post('/edit-product', admin_1.default.postEditProduct);
exports.default = module.exports = {
    router,
};
//# sourceMappingURL=admin.js.map