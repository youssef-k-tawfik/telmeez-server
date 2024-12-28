import { Entity, Column } from "typeorm";
import { User } from "./User";

@Entity()
export class Teacher extends User {
  @Column()
  bio!: string;

  @Column()
  earnings!: number;

  @Column()
  rating!: number;

  @Column()
  paymentMethods!: string[]; // ??? enum?
}
