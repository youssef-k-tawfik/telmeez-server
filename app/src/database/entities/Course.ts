import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  categoryId!: number;

  @Column()
  teacherId!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @Column()
  thumbnailURL!: string;

  @Column()
  soldTimes!: number;

  @Column()
  rating!: number;

  @Column()
  ratingCount!: number;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;

  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
