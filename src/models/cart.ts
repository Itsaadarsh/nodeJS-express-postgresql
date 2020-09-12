import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user';
import { CartItem } from './cart-item';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.cartid, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userid' })
  userid: User;

  @OneToMany(() => CartItem, cartitem => cartitem.cartid)
  cItem: CartItem[];
}
