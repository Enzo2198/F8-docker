import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";

@Entity('ClassUsers')
export class ClassUserEntity extends BaseEntity{
  @Column()
  class_id: number;

  @Column()
  user_id: number;
}