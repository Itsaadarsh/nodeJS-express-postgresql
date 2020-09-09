import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from 'typeorm';
// import { Cart } from './cart';
// import { Product } from './product';

@Entity()
export class CartItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('smallint', { nullable: false })
  quantity: number;

  // @OneToOne(() => Cart, cart => cart.productid)
  // @JoinColumn({ name: 'prodid' })
  // prodid: Cart;

  // @OneToOne(() => Product, prod => prod.cartid)
  // @JoinColumn({ name: 'cartid' })
  // cartid: Product;
}
