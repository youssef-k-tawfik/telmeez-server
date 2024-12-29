import { BaseEntity, Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { Student } from "./student.js";
import { Course } from "./course.js";

@Entity("review")
@Index(["course.id", "student.id"], {unique: true})
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('text')
    content!: string;

    @Column('float')
    rating!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => Student, (Student) => Student.reviews)
    student!: Relation<Student>

    @ManyToOne(() => Course, (Course) => Course.reviews)
    course!: Relation<Course>
}