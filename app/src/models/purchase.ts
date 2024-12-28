import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("enrollment")
export class Purchase extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    purchaseID!: string;

    @PrimaryColumn('uuid')
    studentID!: string;

    @Column()
    paymentMethod!: string;

    @Column('float')
    amount!: number;

    @CreateDateColumn()
    startDate!: Date;
}
