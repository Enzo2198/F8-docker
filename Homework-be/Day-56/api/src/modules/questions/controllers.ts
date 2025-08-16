import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { QuestionService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { QuestionReq } from './dtos';
import { QuestionServiceToken } from '@/shares';

@ApiTags('Question')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Questions')
export class QuestionController {
  constructor(
    @Inject(QuestionServiceToken)
    private questionService: QuestionService
  ) {}

  @Get()
  getAll() {
    return this.questionService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.findOne(id);
  }

  @Post()
  create(@Body() question: QuestionReq) {
    return this.questionService.create(question);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() question: QuestionReq) {
    return this.questionService.updateOne(id, question);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.softDelete(id);
  }
}