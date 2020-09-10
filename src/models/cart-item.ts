import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Cart } from './cart';
import { Product } from './product';

@Entity()
export class CartItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('smallint', { nullable: false })
  quantity: number;

  @ManyToOne(() => Cart, cart => cart.cItem)
  @JoinColumn({ name: 'cartid' })
  cartid: Cart;
}
