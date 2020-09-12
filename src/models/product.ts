import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CartItem } from './cart-item';
import { OrderItem } from './order-item';
import { User } from './user';

@Entity()
export class Product extends BaseEntity {
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

  @OneToMany(() => CartItem, cItem => cItem.prodid)
  cItem: CartItem[];

  @OneToMany(() => OrderItem, oItem => oItem.prodid)
  oItem: OrderItem[];

  @ManyToOne(() => User, user => user.prodId, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id', name: 'userid' })
  userid: User;
}
