import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Student } from "./student.js";
import { Course } from "./course.js";

@Entity("certificate")
@Index(["student.id", "course.id"], { unique: true })
export class Certificate extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn()
  issueDate!: Date;

  @ManyToOne(() => Student, (Student) => Student.certificates, { eager: true })
  student!: Relation<Student>;

  @ManyToOne(() => Course, (Course) => Course.certificates, { eager: true })
  course!: Relation<Course>;
}

