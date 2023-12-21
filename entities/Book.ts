// Book.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Author } from './Author';
import { Genre } from './Genre';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column()
  title: string;

  @Column()
  ISBN: string;

  @Column()
  publication_year: number;

  @ManyToMany(() => Author, author => author.books)
  @JoinTable()
  authors: Author[];

  @ManyToMany(() => Genre, genre => genre.books)
  @JoinTable()
  genre: Genre[];
}
