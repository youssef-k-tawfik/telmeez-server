import { Entity, Column, Relation, OneToMany } from "typeorm";
import { User } from "./user.js";
import { Enrollment } from "./enrollment.js";
import { Purchase } from "./purchase.js";
import { Certificate } from "./certificate.js";
import { Review } from "./review.js";

@Entity("student")
export class Student extends User {
  @Column("int")
  enrolledCourses!: number;

  @Column("int")
  completedCourses!: number;

  @OneToMany(() => Enrollment, (Enrollment) => Enrollment.student)
  enrollments?: Relation<Enrollment[]>;

  @OneToMany(() => Purchase, (Purchase) => Purchase.student)
  purchases?: Relation<Purchase[]>;

  @OneToMany(() => Review, (Review) => Review.student)
  reviews?: Relation<Review[]>;

  @OneToMany(() => Certificate, (Certificate) => Certificate.student)
  certificates?: Relation<Certificate[]>;
}
