import {
  Entity,
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

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string; // Storing full name

  @Column({ unique: true })
  username!: string; // username for login and profile URL

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string; // hashed password

  @Column({
    type: "enum",
    enum: ["student", "teacher", "admin"],
  })
  role!: Role; // student, teacher, admin

  @Column({ type: "int", unsigned: true })
  age!: number;

  @Column({ type: "enum", enum: ["male", "female"] })
  gender!: Gender;

  @Column("text")
  pictureURL!: string; // profile picture URL

  @CreateDateColumn()
  created_at!: Date; // Date of account creation

  @UpdateDateColumn()
  updated_at!: Date; // Date of last update
}
