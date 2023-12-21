import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Book } from './Book';
import { Reader } from './Reader';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  loan_id: number;

  @ManyToOne(() => Book, book => book.loans)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => Reader, reader => reader.loans)
  @JoinColumn({ name: 'reader_id' })
  reader: Reader;

  @Column()
  date_borrowed: Date;

  @Column()
  date_returned: Date;
}
