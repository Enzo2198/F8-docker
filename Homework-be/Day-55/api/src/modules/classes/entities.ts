import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";

@Entity('Classes')
export class ClassEntity extends BaseEntity{
  @Column({
    nullable: true,
  })
  code: string;

  @Column()
  name: string;
}