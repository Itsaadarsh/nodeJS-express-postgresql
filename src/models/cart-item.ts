import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
console.log(Product, Cart);

@Entity()
export class CartItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('numeric', { nullable: false })
  qty: number;
}
