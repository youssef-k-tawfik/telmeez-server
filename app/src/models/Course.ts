import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("uuid")
  @Index()
  fieldId!: string;

  @Column("uuid")
  @Index()
  teacherId!: string;

  @Column({ type: "text", unique: true })
  title!: string;

  @Column("text")
  description!: string;

  @Column("float")
  price!: number;

  @Column("text")
  thumbnailURL!: string;

  @Column({ unsigned: true, default: 0 })
  soldCount!: number;

  @Column({ type: "float", default: 0 })
  rating!: number;

  @Column({ unsigned: true, default: 0 })
  ratingsCount!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
