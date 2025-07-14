import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('Topics')
export class TopicsEntity extends BaseEntity{
  @Column()
  subject_id: number;

  @Column()
  code: number;

  @Column()
  name: string;
}