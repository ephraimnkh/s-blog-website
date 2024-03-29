import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BlogCategory {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
