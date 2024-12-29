import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Enrollment } from "./enrollment.js";
import { Purchase } from "./purchase.js";
import { Review } from "./review.js";
import { Certificate } from "./certificate.js";
import { Teacher } from "./teacher.js";
import { Field } from "./field.js";

@Entity("course")
@Index(["teacher.id"])
@Index(["field.id"])
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("text", { unique: true })
  title!: string;

  @Column("text")
  description!: string;

  @Column("float")
  price!: number;

  @Column("text")
  thumbnailURL!: string;

  @Column("bigint", { unsigned: true, default: 0 })
  soldCount!: number;

  @Column({ type: "float", default: 0 })
  rating!: number;

  @Column("bigint", { unsigned: true, default: 0 })
  ratingsCount!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Teacher, (Teacher) => Teacher.courses)
  teacher!: Relation<Teacher>;

  @ManyToOne(() => Field, (Field) => Field.courses)
  field!: Relation<Field>;

  @OneToMany(() => Enrollment, (Enrollment) => Enrollment.student)
  enrollments!: Relation<Enrollment[]>;

  @OneToMany(() => Purchase, (Purchase) => Purchase.student)
  purchases!: Relation<Purchase[]>;

  @OneToMany(() => Review, (Review) => Review.student)
  reviews!: Relation<Review[]>;

  @OneToMany(() => Certificate, (Certificate) => Certificate.student)
  certificates!: Relation<Certificate[]>;
}
