import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ExamService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { ExamReq } from './dtos';
import { ExamServiceToken } from '@/shares';

@ApiTags('Exam')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Exams')
export class ExamController {
  constructor(
    @Inject(ExamServiceToken)
    private examService: ExamService
  ) {}

  @Get()
  getAll() {
    return this.examService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.examService.findOne(id);
  }

  @Post()
  create(@Body() exam: ExamReq) {
    return this.examService.create(exam);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() exam: ExamReq) {
    return this.examService.updateOne(id, exam);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.examService.softDelete(id);
  }
}