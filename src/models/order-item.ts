import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './order';
import { Product } from './product';

@Entity()
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('smallint', { nullable: false })
  quantity: number;

  @ManyToOne(() => Order, order => order.oItem, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'orderid' })
  orderid: Order;

  @ManyToOne(() => Product, prod => prod.cItem, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'productid' })
  prodid: Product;
}
