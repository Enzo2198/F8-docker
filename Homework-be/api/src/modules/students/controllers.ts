import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {StudentService} from "@/modules/students/services";
import {StudentReqI, StudentResI} from "@/modules/shares";
import {StudentReq} from "@/modules/students/dtos";

@ApiTags('Student')
@Controller('/students')
export class StudentController {

  constructor(private studentService: StudentService) {}

  @Get()
  get() {
    return this.studentService.get()
  }

  @Post()
  create(@Body() student: StudentReq): StudentResI {
    return this.studentService.create(student)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() student: StudentReq): StudentResI {
    return this.studentService.update(id, student)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.studentService.delete(id)
  }
}
