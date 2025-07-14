import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('Jobs')
export class JobsEntity extends BaseEntity{
  @Column()
  name: string;
}