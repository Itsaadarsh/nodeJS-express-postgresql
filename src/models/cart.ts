import { Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
console.log(Product, CartItem);

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
