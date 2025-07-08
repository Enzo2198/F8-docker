import {AvatarI, StudentReqI} from "@/modules/shares";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";

export class Avatar implements AvatarI {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  payload: string;
}

export class StudentReq implements StudentReqI {
  @ApiProperty({
    example: 'name'
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: 'user@gmail.com',
    nullable: true,
    required: false
  })
  @IsString()
  @IsNotEmpty()
  email?: string

  @ApiProperty({
    example: 'school'
  })
  @IsString()
  @IsNotEmpty()
  school: string

  @ApiProperty({
    example: 'parent 1'
  })
  @IsString()
  @IsNotEmpty()
  parent_name: string

  @ApiProperty({
    example: 123456
  })
  @IsNumber()
  @IsNotEmpty()
  parent_phone: number

  @ApiProperty({ type: Avatar })
  @ValidateNested()
  @Type(() => Avatar)
  avatar: Avatar;
}

// export class StudentRes implements StudentResI {
//   name: string
//
//   email?: string
//
//   school: string
//
//   parent_name: string
//
//   parent_phone: string
//
//   avatar: Avatar;
// }