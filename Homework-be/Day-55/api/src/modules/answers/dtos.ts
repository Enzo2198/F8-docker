import { ApiProperty } from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { AnswerReqI } from '@/shares'

// Payload / body
export class AnswerReq implements AnswerReqI {
  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  exam_result_id: number;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  question_id: number;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  answer: string;

  @ApiProperty({
    example: 'true',
  })
  @IsBoolean()
  @IsNotEmpty()
  is_correct: boolean;
}