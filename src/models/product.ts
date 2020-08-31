import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';
console.log(Cart, CartItem);

export interface Item {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Entity()
export class Product extends BaseEntity implements Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  title: string;

  @Column('numeric', { nullable: false })
  price: number;

  @Column('text', { nullable: false })
  imageUrl: string;

  @Column('varchar', { nullable: false, length: 255 })
  description: string;
}
