import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {FileService} from "./services";
import {FileReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('File')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/files')
export class FileController {
  constructor(private fileService: FileService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() file: FileReq) {
    return this.fileService.create(file)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: FileReq): FileRes {
  //   return this.fileService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.fileService.delete(id)
  // }
}