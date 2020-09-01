"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const shop_1 = __importDefault(require("./routes/shop"));
const admin_1 = __importDefault(require("./routes/admin"));
const error_1 = __importDefault(require("./controllers/error"));
typeorm_1.createConnection()
    .then((_connection) => {
    const app = express_1.default();
    app.use('/user/:username/:email', (req, res, _next) => {
        const uname = req.params.username;
        const uemail = req.params.email;
        res.send(`
        <h1>User created ${uname} ${uemail}</h1>
        <form action='/'>
        <input type="hidden" value="${uname}" name="username">
        <input type="hidden" value="${uemail}" name="useremail">
        <button type='submit'>lets go</button>
        </form>
        `);
    });
    app.set('view engine', 'ejs');
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.static('dist'));
    app.use('/admin', admin_1.default.router);
    app.use(shop_1.default);
    app.use(error_1.default.error404);
    app.listen(8080), console.log('Listening at 8080');
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map