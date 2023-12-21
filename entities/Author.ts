import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  author_id: number;

  @Column()
  name: string;

  @Column()
  birthdate: Date;

  @ManyToMany(() => Book, book => book.authors)
  @JoinTable()
  books: Book[];
}
