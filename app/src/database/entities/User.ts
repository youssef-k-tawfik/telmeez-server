import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string; // Storing full name

  @Column()
  username!: string; // username for login and profile URL

  @Column()
  email!: string;

  @Column()
  password!: string; // hashed password

  @Column()
  role!: string; // student, teacher, admin

  @Column()
  age!: number;

  @Column()
  pfpURL!: string; // profile picture URL

  @Column()
  created_at!: Date; // Date of account creation

  @Column()
  updated_at!: Date;

  // updating the updated_at field before every update
  beforeUpdate() {
    this.updated_at = new Date();
  }
}
