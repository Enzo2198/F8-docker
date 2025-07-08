import {ClassReqI} from "@/modules/shares";
import {ApiProperty} from "@nestjs/swagger";
import {IsArray, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class ClassReq implements ClassReqI {
  @ApiProperty({
    example: 'name'
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: 'keo-502'
  })
  @IsString()
  @IsNotEmpty()
  code: string

  @ApiProperty({
    example: '[0]'
  })
  @IsArray()
  @IsNumber({}, {each: true})
  @IsNotEmpty()
  user: number[]
}