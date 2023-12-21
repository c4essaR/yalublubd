import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Loan } from './Loan';

@Entity()
export class Reader {
  @PrimaryGeneratedColumn()
  reader_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Loan, loan => loan.reader)
  loans: Loan[];
}
