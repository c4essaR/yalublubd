import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  genre_id: number;

  @Column()
  name: string;

  @ManyToMany(() => Book, book => book.genre)
  @JoinTable()
  books: Book[];
}
