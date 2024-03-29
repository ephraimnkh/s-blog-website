import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogTag {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
