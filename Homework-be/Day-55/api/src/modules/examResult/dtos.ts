import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import { ExamResultReqI } from '@/shares'

// Payload / body
export class ExamResultReq implements ExamResultReqI {
  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  user_id:  number;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  exam_id: number;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  answers: string;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  number_of_correct_answer: number;

  @ApiProperty({
    example: '8',
  })
  @IsNumber()
  @IsNotEmpty()
  score:  number;
}
