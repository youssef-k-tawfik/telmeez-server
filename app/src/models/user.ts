import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum Role {
  Student = "student",
  Teacher = "teacher",
  Admin = "admin",
}

export enum Gender {
  Male = "male",
  Female = "female",
}

export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar")
  name!: string; // Storing full name

  @Column("varchar", { unique: true })
  username!: string; // username for login and profile URL

  @Column("varchar", { unique: true })
  email!: string;

  @Column("text", { select: false })
  password!: string; // hashed password

  @Column({
    type: "enum",
    enum: Role,
    enumName: "Role",
  })
  role!: Role; // student, teacher, admin

  @Column({ type: "int", unsigned: true })
  age!: number;

  @Column({
    type: "enum",
    enum: Gender,
    enumName: "Gender",
  })
  gender!: Gender;

  @Column("text")
  pictureURL!: string; // profile picture URL

  @CreateDateColumn()
  createdAt!: Date; // Date of account creation

  @UpdateDateColumn()
  updatedAt!: Date; // Date of last update
}
