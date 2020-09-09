"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const router = express_1.default.Router();
const users = [];
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
    const uname = req.params.username;
    const uemail = req.params.email;
    user.username = uname;
    user.email = uemail;
    req.newuser = user;
    users.push(user);
    user.save();
    req.userid = user.id;
    res.redirect('/');
});
exports.default = module.exports = { router, users };
//# sourceMappingURL=user.js.map