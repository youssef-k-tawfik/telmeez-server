import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { PaymentMethods } from "./payment.js";
import { Student } from "./student.js";
import { Course } from "./course.js";

@Entity("purchase")
@Index(["student.id", "course.id"], { unique: true })
export class Purchase extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "enum", enum: PaymentMethods, enumName: "PaymentMethods" })
  paymentMethod!: PaymentMethods;

  @Column("float")
  amount!: number;

  @CreateDateColumn()
  purchaseDate!: Date;

  @ManyToOne(() => Student, (Student) => Student.purchases, { eager: true })
  student!: Relation<Student>;

  @ManyToOne(() => Course, (Course) => Course.purchases, { eager: true })
  course!: Relation<Course>;
}

