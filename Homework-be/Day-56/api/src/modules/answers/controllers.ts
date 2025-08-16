import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AnswerService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { AnswerReq } from './dtos';
import { AnswerServiceToken } from '@/shares';

@ApiTags('Answer')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Answers')
export class AnswerController {
  constructor(
    @Inject(AnswerServiceToken)
    private answerService: AnswerService
  ) {}

  @Get()
  getAll() {
    return this.answerService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.findOne(id);
  }

  @Post()
  create(@Body() answer: AnswerReq) {
    return this.answerService.create(answer);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() answer: AnswerReq) {
    return this.answerService.updateOne(id, answer);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.softDelete(id);
  }
}