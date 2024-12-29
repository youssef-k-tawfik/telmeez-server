import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  Index,
  ManyToOne,
  Relation,
} from "typeorm";
import { Teacher } from "./teacher.js";

export enum PaymentMethods {
  Bank = "bank",
  PayPal = "paypal",
}

@Entity('payment')
@Index(["teacher.id"])
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "enum", enum: PaymentMethods, enumName: "PaymentMehtods" })
  paymentMethod!: PaymentMethods;

  @Column("float")
  amount!: number;

  @CreateDateColumn()
  timestamp!: Date;

  @ManyToOne(() => Teacher, (Teacher) => Teacher.payments)
  teacher!: Relation<Teacher>
}
