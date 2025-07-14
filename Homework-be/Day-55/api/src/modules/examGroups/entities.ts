import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";

@Entity('ExamGroups')
export class ExamGroupsEntity extends BaseEntity{
  @Column()
  name: string;

  @Column()
  class_id: number;

  @Column()
  start_time: Date;

  @Column()
  await_time: number;

  @Column()
  is_once: boolean;

  @Column()
  is_save_local: boolean;
}