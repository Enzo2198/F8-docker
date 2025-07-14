import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";

@Entity('Exams')
export class ExamsEntity extends BaseEntity{
  @Column({
    nullable: true,
  })
  code: string;

  @Column()
  name: string;

  @Column()
  exam_group_id: number;

  @Column()
  class_id: number;

  @Column()
  number_of_question: number;

  @Column()
  total_time: number;

  @Column()
  correct_answer: string;

  @Column()
  description: string;

  @Column()
  device: string;
}