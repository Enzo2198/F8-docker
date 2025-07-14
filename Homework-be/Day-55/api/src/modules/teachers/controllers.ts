import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {TeacherService} from "./services";
import {TeacherReq, TeacherRes} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Teacher')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/teachers')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @Get()
  get() {
    return this.teacherService.get()
  }

  // @SerializeOptions()
  @Post()
  create(@Body() teacher: TeacherReq): TeacherRes {
    return this.teacherService.create(teacher)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() teacher: TeacherReq): TeacherRes {
    return this.teacherService.update(id, teacher)
  }

  @Delete('/:id')
  delete(@Param('id') id: number){
    return this.teacherService.delete(id)
  }
}