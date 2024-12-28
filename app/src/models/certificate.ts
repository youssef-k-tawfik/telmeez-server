import { BaseEntity, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("certificate")
export class Certificate extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    certificateID!: string;

    @PrimaryColumn('uuid')
    studentID!: string;

    @PrimaryColumn('uuid')
    courseID!: string;

    @CreateDateColumn()
    issueDate!: Date;
}
