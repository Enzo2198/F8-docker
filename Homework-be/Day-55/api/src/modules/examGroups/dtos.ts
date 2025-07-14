import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ExamGroupReqI} from '@/shares'

// Payload / body
export class ExamGroupReq implements ExamGroupReqI {

  @ApiProperty({
    example: 'name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  class_id: number;

  @ApiProperty({
    example: 'Json',
  })
  @IsDate()
  @IsNotEmpty()
  start_time: Date;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  await_time: number;

  @ApiProperty({
    example: 'true',
  })
  @IsBoolean()
  @IsNotEmpty()
  is_once: boolean;

  @ApiProperty({
    example: 'true',
  })
  @IsBoolean()
  @IsNotEmpty()
  is_save_local: boolean;
}