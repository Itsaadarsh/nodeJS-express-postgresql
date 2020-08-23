"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const home_1 = __importDefault(require("./routes/home"));
const add_products_1 = __importDefault(require("./routes/add-products"));
const app = express_1.default();
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('dist'));
app.use('/admin', add_products_1.default.router);
app.use(home_1.default);
app.use((_req, res, _next) => {
    res.render('404', { pageTitle: '404' });
});
app.listen(8080), console.log('Listening at 8080');
//# sourceMappingURL=index.js.map