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
exports.CartItem = void 0;
const typeorm_1 = require("typeorm");
const cart_1 = require("./cart");
const product_1 = require("./product");
let CartItem = class CartItem extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CartItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('smallint', { nullable: false }),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    typeorm_1.ManyToOne(() => cart_1.Cart, cart => cart.cItem, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'cartid' }),
    __metadata("design:type", cart_1.Cart)
], CartItem.prototype, "cartid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => product_1.Product, prod => prod.cItem, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'productid' }),
    __metadata("design:type", product_1.Product)
], CartItem.prototype, "prodid", void 0);
CartItem = __decorate([
    typeorm_1.Entity()
], CartItem);
exports.CartItem = CartItem;
//# sourceMappingURL=cart-item.js.map