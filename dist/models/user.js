"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("./product");
const cart_1 = require("./cart");
const order_1 = require("./order");
let User = class User extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.cartid = cart_1.Cart;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.OneToOne(() => cart_1.Cart, cart => cart.userid),
    __metadata("design:type", Object)
], User.prototype, "cartid", void 0);
__decorate([
    typeorm_1.OneToMany(() => product_1.Product, prod => prod.userid),
    __metadata("design:type", Array)
], User.prototype, "prodId", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_1.Order, ord => ord.userid),
    __metadata("design:type", Array)
], User.prototype, "ordid", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.js.map