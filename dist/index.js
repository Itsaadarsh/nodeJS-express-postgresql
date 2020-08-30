"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const shop_1 = __importDefault(require("./routes/shop"));
const admin_1 = __importDefault(require("./routes/admin"));
const error_1 = __importDefault(require("./controllers/error"));
typeorm_1.createConnection()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Inserting a new user into the database...');
    const user = new User_1.User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    yield connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);
    console.log('Loading users from the database...');
    const users = yield connection.manager.find(User_1.User);
    console.log('Loaded users: ', users);
    console.log('Here you can setup and run express/koa/any other framework.');
}))
    .catch((error) => console.log(error));
const app = express_1.default();
app.set('view engine', 'ejs');
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('dist'));
app.use('/admin', admin_1.default.router);
app.use(shop_1.default);
app.use(error_1.default.error404);
app.listen(8080), console.log('Listening at 8080');
//# sourceMappingURL=index.js.map