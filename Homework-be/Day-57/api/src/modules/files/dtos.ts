import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { FileReqI } from '@/shares'

// Payload / body
export class FileReq implements FileReqI {
  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({
    example: 'string',
  })
  @IsString()
  @IsNotEmpty()
  key: string;
}