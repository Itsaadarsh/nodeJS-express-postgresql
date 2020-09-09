import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
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

  @ManyToOne(() => User, user => user.prodId)
  @JoinColumn({ referencedColumnName: 'id', name: 'userid' })
  userid: User;
}
