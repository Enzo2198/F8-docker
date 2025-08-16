import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import { UserReqI } from '@/shares'

// Payload / body
export class UserReq implements UserReqI {

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
    example: 'user@gmail.com',
    nullable: true,
    required: false,
  })
  @IsString()
  email?: string;

  @ApiProperty({
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  role: string;

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
  school: string;

  @ApiProperty({
    example: 'parent name',
  })
  @IsString()
  @IsNotEmpty()
  parent_name: string;

  @ApiProperty({
    example: '12345',
  })
  @IsString()
  @IsNotEmpty()
  parent_phone: string;

  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  avatar: number;
}