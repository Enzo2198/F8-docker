import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { SubjectReqI } from '@/shares'

// Payload / body
export class SubjectReq implements SubjectReqI {

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