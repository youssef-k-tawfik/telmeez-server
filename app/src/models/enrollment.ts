import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("enrollment")
export class Enrollment extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    enrollmentID!: string;

    @PrimaryColumn('uuid')
    studentID!: string;

    @PrimaryColumn('uuid')
    courseID!: string;

    @CreateDateColumn()
    startDate!: Date;

    @Column('date')
    completionDate!: Date;

    @Column()
    progress!: number;

    @UpdateDateColumn()
    updatedAt!: Date;
}