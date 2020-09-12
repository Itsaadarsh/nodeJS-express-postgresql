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
exports.OrderItem = void 0;
const typeorm_1 = require("typeorm");
const order_1 = require("./order");
const product_1 = require("./product");
let OrderItem = class OrderItem extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('smallint', { nullable: false }),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: false, length: 100 }),
    __metadata("design:type", String)
], OrderItem.prototype, "prodTitle", void 0);
__decorate([
    typeorm_1.ManyToOne(() => order_1.Order, order => order.oItem, { onUpdate: 'CASCADE', onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'orderid' }),
    __metadata("design:type", order_1.Order)
], OrderItem.prototype, "orderid", void 0);
__decorate([
    typeorm_1.ManyToOne(() => product_1.Product, prod => prod.cItem, { onDelete: 'SET NULL', onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'productid' }),
    __metadata("design:type", product_1.Product)
], OrderItem.prototype, "prodid", void 0);
OrderItem = __decorate([
    typeorm_1.Entity()
], OrderItem);
exports.OrderItem = OrderItem;
//# sourceMappingURL=order-item.js.map