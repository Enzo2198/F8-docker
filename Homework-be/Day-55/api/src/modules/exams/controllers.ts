import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {ExamService} from "./services";
import {ExamReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Exam')

@Controller('/Exams')
export class ExamController {
  constructor(private ExamService: ExamService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() Exam: ExamReq) {
    return this.ExamService.create(Exam)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: ExamReq): ExamRes {
  //   return this.ExamService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.ExamService.delete(id)
  // }
}