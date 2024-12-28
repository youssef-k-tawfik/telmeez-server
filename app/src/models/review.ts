import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("review")
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    reviewID!: string;

    @PrimaryColumn('uuid')
    studentID!: string;

    @PrimaryColumn('uuid')
    courseID!: string;

    @Column('text')
    content!: string;

    @Column('float')
    rating!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}