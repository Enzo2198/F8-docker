import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import { ExamReqI } from '@/shares'

// Payload / body
export class ExamReq implements ExamReqI {

  @ApiProperty({
    example: 'name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '12345',
    nullable: true,
    required: false,
  })
  @IsString()
  code: string

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  exam_group_id: number;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  class_id: number;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  number_of_question: number;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  total_time: number;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  correct_answer: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  device: string;
}