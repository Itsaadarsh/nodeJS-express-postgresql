"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const cart_1 = require("../models/cart");
const router = express_1.default.Router();
router.get('/:username/:email', (req, res, _next) => {
    const uname = req.params.username;
    const uemail = req.params.email;
    res.send(`
  <h1>User created ${uname} ${uemail}</h1>
  <form  method='POST'>
  <input type="hidden" value="${uname}" name="username">
  <input type="hidden" value="${uemail}" name="useremail">
  <button type='submit'>lets go</button>
  </form>
  `);
});
router.post('/:username/:email', (req, res, _next) => {
    const user = new user_1.User();
    user.username = req.body.username;
    user.email = req.body.useremail;
    user.save();
    const cart = new cart_1.Cart();
    cart.userid = user;
    cart.save();
    res.redirect('/');
});
exports.default = module.exports = { router };
//# sourceMappingURL=user.js.map