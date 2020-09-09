import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import { Product } from './product';
import { Cart } from './cart';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  username: string;

  @Column('varchar', { nullable: false, length: 100 })
  email: string;

  @OneToMany(() => Product, prod => prod.userid, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  prodId: Array<Product>;

  @OneToOne(() => Cart, cart => cart.userid)
  cartid = Cart;
}
