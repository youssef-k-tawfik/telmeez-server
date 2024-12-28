import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("student")
export class Student extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    studentID!: string;

    @PrimaryColumn('uuid')
    userID!: string;

    @Column()
    completedCourses!: number;

    @CreateDateColumn()
    joinDate!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}