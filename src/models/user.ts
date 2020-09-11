import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import { Product } from './product';
import { Cart } from './cart';
import { Order } from './order';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  username: string;

  @Column('varchar', { nullable: false, length: 100 })
  email: string;

  @OneToOne(() => Cart, cart => cart.userid)
  cartid = Cart;

  @OneToMany(() => Product, prod => prod.userid, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  prodId: Product[];

  @OneToMany(() => Order, ord => ord.userid, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  ordid: Order[];
}
