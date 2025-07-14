import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";
import {ClassReqI} from '@/shares'

// Payload / body
export class ClassReq implements ClassReqI {

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
}