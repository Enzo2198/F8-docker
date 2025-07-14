import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('Subjects')
export class SubjectsEntity extends BaseEntity{
  @Column({
    nullable: true,
  })
  code: string;

  @Column()
  name: string;
}