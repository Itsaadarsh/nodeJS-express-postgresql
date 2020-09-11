import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { OrderItem } from './order-item';
import { User } from './user';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.ordid, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id', name: 'userid' })
  userid: User;

  @OneToMany(() => OrderItem, orderitem => orderitem.orderid, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  oItem: OrderItem[];
}
