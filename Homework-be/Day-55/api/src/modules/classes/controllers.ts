import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {ClassService} from "./services";
import {ClassReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Class')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/classes')
export class ClassController {
  constructor(private classService: ClassService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() cls: ClassReq) {
    return this.classService.create(cls)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: ClassReq): ClassRes {
  //   return this.classService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.classService.delete(id)
  // }
}