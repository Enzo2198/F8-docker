import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import { TopicReqI } from '@/shares'

// Payload / body
export class TopicReq implements TopicReqI {
  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  subject_id: number;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  code: number;

  @ApiProperty({
    example: 'name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}