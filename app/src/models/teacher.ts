import { Entity, Column, OneToMany, Relation } from "typeorm";
import { User } from "./user.js";
import { Payment, PaymentMethods } from "./payment.js";
import { Course } from "./course.js";

@Entity("teacher")
export class Teacher extends User {
  @Column("text")
  bio!: string;

  @Column("float")
  earnings!: number;

  @Column("float")
  wallet!: number;

  @Column({ type: "enum", enum: PaymentMethods, enumName: "PaymentMethods" })
  paymentMethod!: PaymentMethods;

  @OneToMany(() => Payment, (Payment) => Payment.teacher)
  payments!: Relation<Payment[]>;

  @OneToMany(() => Course, (Course) => Course.teacher)
  courses!: Relation<Course[]>;
}

export const fetchTeacherById = (id: Teacher["id"]) => {
  // call database to fetch Teacher by id
};

export const createTeacher = (data: Teacher) => {
  // call database to create Teacher
};

export const updateTeacher = (data: Teacher) => {
  // call database to update Teacher
};

export const deleteTeacher = (data: Teacher) => {
  // call database to delete Teacher
};
