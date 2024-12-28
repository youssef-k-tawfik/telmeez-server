import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  teacherId!: number;

  @Column()
  method!: string;

  @Column()
  amount!: number;

  @Column()
  timestamp!: Date;
}
