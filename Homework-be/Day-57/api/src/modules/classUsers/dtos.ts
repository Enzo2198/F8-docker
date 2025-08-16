import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";
import { ClassUserReqI } from '@/shares'

// Payload / body
export class ClassUserReq implements ClassUserReqI {

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
  user_id: number;
}