import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Product } from './product';

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
}
