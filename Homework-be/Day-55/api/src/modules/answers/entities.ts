import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('Answers')
export class AnswersEntity extends BaseEntity{
  @Column()
  exam_result_id: number;

  @Column()
  question_id: number;

  @Column()
  answer: string;

  @Column()
  is_correct: boolean;
}