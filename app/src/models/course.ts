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
import { instanceToPlain } from "class-transformer";

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
  soldCount?: number;

  @Column({ type: "float", default: 0 })
  rating?: number;

  @Column("bigint", { unsigned: true, default: 0 })
  ratingsCount?: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => Teacher, (Teacher) => Teacher.courses, { eager: true })
  teacher!: Relation<Teacher>;

  @ManyToOne(() => Field, (Field) => Field.courses, { eager: true })
  field!: Relation<Field>;

  @OneToMany(() => Enrollment, (Enrollment) => Enrollment.student)
  enrollments?: Relation<Enrollment[]>;

  @OneToMany(() => Purchase, (Purchase) => Purchase.student)
  purchases?: Relation<Purchase[]>;

  @OneToMany(() => Review, (Review) => Review.student)
  reviews?: Relation<Review[]>;

  @OneToMany(() => Certificate, (Certificate) => Certificate.student)
  certificates?: Relation<Certificate[]>;
}

// Functions

export const fetchCourses = async () => {
  return await Course.find();
};

export const fetchCoursesBy = async (courseProperties: Partial<Course>) => {
  return await Course.findBy(instanceToPlain(courseProperties));
};

export const fetchCoursePurchases = async (id: Course["id"]) => {
  return await Course.findOne({
    where: { id },
    relations: { purchases: true },
  });
};

export const fetchCourseReviews = async (id: Course["id"]) => {
  return await Course.findOne({
    where: { id },
    relations: { reviews: true },
  });
};

export const insertCourse = async (course: Course) => {
  return await Course.save(course);
};

export const updateCourse = async (
  id: Course["id"],
  updatedCourseProperties: Partial<Course>
) => {
  return await Course.update({ id }, instanceToPlain(updatedCourseProperties));
};

export const incrementCourseSoldCount = async (
  id: Course["id"],
  amount: number
) => {
  return await Course.getRepository().increment({ id }, "soldCount", amount);
};

export const incrementCourseRatingsCount = async (
  id: Course["id"],
  amount: number
) => {
  return await Course.getRepository().increment({ id }, "ratingsCount", amount);
};

export const deleteCourse = async (course: Course) => {
  return await Course.remove(course);
};
