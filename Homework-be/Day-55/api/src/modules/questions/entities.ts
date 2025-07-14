import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('Questions')
export class QuestionsEntity extends BaseEntity{
  @Column()
  exam_id: number;

  @Column()
  index: number;

  @Column()
  type: string;

  @Column()
  correct_answer: string;

  @Column()
  topic_id: number;
}