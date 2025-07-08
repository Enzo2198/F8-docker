import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {TeacherReqI, TeacherResI} from "@/modules/shares";

export class TeacherReq implements TeacherReqI {
  // @ApiProperty({
  //   example: 1
  // })
  // @IsNumber({
  //   allowInfinity: false,
  //   allowNaN: false
  // })
  // id: number

  @ApiProperty({
    example: 'name'
  })
  @IsString()
  @IsNotEmpty({message: 'Name should not be empty.'})
  name: string

  @ApiProperty({
    example: 'user@gmail.com',
    nullable: true,
    required: false
  })
  @IsString()
  email?: string
}

export class TeacherRes implements TeacherResI {
  id: number

  name: string

  email: string
}