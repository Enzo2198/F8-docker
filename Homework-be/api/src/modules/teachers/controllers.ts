import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { TeacherService } from "@/modules/teachers/services";
import {ApiTags} from "@nestjs/swagger";
import {TeacherReq} from "@/modules/teachers/dtos";

@ApiTags('Teacher')
@Controller('/teachers')
export class TeacherController {

  constructor(private teacherService: TeacherService) {}

  @Get()
  get() {
    return this.teacherService.get()
  }

  @Post()
  create(@Body() teacher: TeacherReq) {
    return this.teacherService.create(teacher)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() teacher: TeacherReq) {
    return this.teacherService.update(id, teacher)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.teacherService.delete(id)
  }
}