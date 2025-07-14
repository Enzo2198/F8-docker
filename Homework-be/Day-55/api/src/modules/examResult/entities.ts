import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('ExamResults')
export class ExamResultsEntity extends BaseEntity{
  @Column()
  user_id:  number;

  @Column()
  exam_id: number;

  @Column()
  status: string;

  @Column()
  answers: string;

  @Column()
  number_of_correct_answer: number;

  @Column()
  score:  number;
}