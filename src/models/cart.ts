import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user';
// import { Product } from './product';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.cartid)
  @JoinColumn({ name: 'userid' })
  userid: User;
}
