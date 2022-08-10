import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transaction_entry')
export class TransactionEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  surname: string;

  @Column()
  middleName: string;

  @Column({default: new Date().getDate()})
  dxnDay: number;

  @Column({default: new Date().getMonth()})
  dxnMonth: number;

  @Column({default: new Date().getFullYear()})
  dxnYear: number;

  @Column()
  address: string;

  @Column({default: new Date().getDate()})
  rxnDay: number;

  @Column({default: new Date().getMonth()})
  rxnMonth: number;

  @Column({default: new Date().getFullYear()})
  rxnYear: number;

  //clinic record
  @Column({default: new Date().getDate()})
  cdxnDay: number;

  @Column({default: new Date().getMonth()})
  cdxnMonth: number;

  @Column({default: new Date().getFullYear()})
  cdxnYear: number;

  @Column()
  aliment: string;

  @Column()
  medicine: string;

  @Column()
  procedure: string;

  @Column({default: new Date().getDate()})
  nxnDay: number;

  @Column({default: new Date().getMonth()})
  nxnMonth: number;

  @Column({default: new Date().getFullYear()})
  nxnYear: number;

  @Column({default: true})
  matricStatus: boolean


}
