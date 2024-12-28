import { Entity, Column } from "typeorm";
import { User } from "./User";

@Entity()
export class Student extends User {
  @Column()
  enrolledCourses!: number;

  @Column()
  completedCourses!: number;
}

export const fetchStudentById = (id: Student["id"]) => {
  // call database to fetch Student by id
};

export const createStudent = (data: Student) => {
  // call database to create Student
};

export const updateStudent = (data: Student) => {
  // call database to update Student
};

export const deleteStudent = (data: Student) => {
  // call database to delete Student
};
