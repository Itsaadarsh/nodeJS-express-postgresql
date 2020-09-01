import { Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
