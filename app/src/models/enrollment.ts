import { BaseEntity, Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { Student } from "./student.js";
import { Course } from "./course.js";

@Entity("enrollment")
@Index(["student.id", "course.id"], {unique: true})
@Index(["course.id", "student.id"], {unique: true})
export class Enrollment extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('int')
    progress!: number;

    @CreateDateColumn()
    startDate!: Date;

    @Column('date')
    completionDate!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => Student, (Student) => Student.enrollments)
    student!: Relation<Student>

    @ManyToOne(() => Course, (Course) => Course.enrollments)
    course!: Relation<Course>
}
