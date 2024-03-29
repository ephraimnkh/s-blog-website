import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({ name: 'author_id' })
  authorId: number;
  @Column()
  author: string;
  @Column()
  about: string;
  @Column({ name: 'created_on' })
  createdOn: string;
  @Column({ name: 'modified_on' })
  modifiedOn: string;
  @Column()
  content: string;
  @Column()
  category: number;
  @Column()
  tags: string | null;
  @Column({ name: 'image_url' })
  imageUrl: string | null;
  @Column()
  github: string | null;
  @Column()
  twitter: string | null;
  @Column()
  facebook: string | null;
}
