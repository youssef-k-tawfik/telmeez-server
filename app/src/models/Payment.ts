import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  Index,
} from "typeorm";

export enum paymentMethods {
  Bank = "bank",
  PayPal = "paypal",
}

@Entity()
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("uuid")
  @Index()
  teacherId!: string;

  @Column("uuid")
  @Index()
  courseId!: string;

  @Column()
  paymentMethod!: paymentMethods;

  @Column("float")
  amount!: number;

  @CreateDateColumn()
  timestamp!: Date;
}
