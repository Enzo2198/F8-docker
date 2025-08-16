import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SubjectService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { SubjectReq } from './dtos';
import { SubjectServiceToken } from '@/shares';

@ApiTags('Subject')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Subjects')
export class SubjectController {
  constructor(
    @Inject(SubjectServiceToken)
    private subjectService: SubjectService
  ) {}

  @Get()
  getAll() {
    return this.subjectService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.findOne(id);
  }

  @Post()
  create(@Body() subject: SubjectReq) {
    return this.subjectService.create(subject);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() subject: SubjectReq) {
    return this.subjectService.updateOne(id, subject);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.softDelete(id);
  }
}