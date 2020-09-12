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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const order_item_1 = require("./order-item");
const user_1 = require("./user");
let Order = class Order extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_item_1.OrderItem, orderitem => orderitem.orderid),
    __metadata("design:type", Array)
], Order.prototype, "oItem", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_1.User, user => user.ordid, { onUpdate: 'CASCADE', onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ referencedColumnName: 'id', name: 'userid' }),
    __metadata("design:type", user_1.User)
], Order.prototype, "userid", void 0);
Order = __decorate([
    typeorm_1.Entity()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.js.map