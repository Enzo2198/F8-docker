import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import { QuestionReqI } from '@/shares'

// Payload / body
export class QuestionReq implements QuestionReqI {
  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  exam_id: number;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  index: number;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  correct_answer: string;

  @ApiProperty({
    example: 'string',
  })
  @IsNumber()
  @IsNotEmpty()
  topic_id: number;
}