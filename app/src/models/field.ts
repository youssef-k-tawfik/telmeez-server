import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  Relation,
} from "typeorm";
import { Course } from "./course.js";

@Entity("field")
export class Field extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar", { unique: true })
  name!: string;

  @OneToMany(() => Course, (Course) => Course.field)
  courses!: Relation<Course[]>;
}
