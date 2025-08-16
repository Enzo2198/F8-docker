import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ExamGroupService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { ExamGroupReq } from './dtos';
import { ExamGroupServiceToken } from '@/shares';

@ApiTags('ExamGroup')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/ExamGroups')
export class ExamGroupController {
  constructor(
    @Inject(ExamGroupServiceToken)
    private examGroupService: ExamGroupService
  ) {}

  @Get()
  getAll() {
    return this.examGroupService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.examGroupService.findOne(id);
  }

  @Post()
  create(@Body() examGroup: ExamGroupReq) {
    return this.examGroupService.create(examGroup);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() examGroup: ExamGroupReq) {
    return this.examGroupService.updateOne(id, examGroup);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.examGroupService.softDelete(id);
  }
}