import { Entity, Column } from "typeorm";
import { User } from "./User";
import { paymentMethods } from "./Payment";

@Entity()
export class Teacher extends User {
  @Column("text")
  bio!: string;

  @Column("float")
  earnings!: number;

  @Column()
  paymentMethod!: paymentMethods;
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
