import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {TeacherReqI, TeacherResI} from '@/shares'

// Payload / body
export class TeacherReq implements TeacherReqI {

  @ApiProperty({
    example: 'name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'user@gmail.com',
    nullable: true,
    required: false,
  })
  @IsString()
  email?: string
}

// Response model
export class TeacherRes implements TeacherResI {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;
}