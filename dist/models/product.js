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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const cart_item_1 = require("./cart-item");
const order_item_1 = require("./order-item");
const user_1 = require("./user");
let Product = class Product extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('numeric', { nullable: false }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "imageUrl", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: false, length: 255 }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => cart_item_1.CartItem, cItem => cItem.prodid),
    __metadata("design:type", Array)
], Product.prototype, "cItem", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_item_1.OrderItem, oItem => oItem.prodid),
    __metadata("design:type", Array)
], Product.prototype, "oItem", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_1.User, user => user.prodId, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ referencedColumnName: 'id', name: 'userid' }),
    __metadata("design:type", user_1.User)
], Product.prototype, "userid", void 0);
Product = __decorate([
    typeorm_1.Entity()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.js.map