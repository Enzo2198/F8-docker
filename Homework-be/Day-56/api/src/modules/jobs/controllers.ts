import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { JobService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { JobReq } from './dtos';
import { JobServiceToken } from '@/shares';

@ApiTags('Job')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Jobs')
export class JobController {
  constructor(
    @Inject(JobServiceToken)
    private jobService: JobService
  ) {}

  @Get()
  getAll() {
    return this.jobService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.findOne(id);
  }

  @Post()
  create(@Body() job: JobReq) {
    return this.jobService.create(job);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() job: JobReq) {
    return this.jobService.updateOne(id, job);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.softDelete(id);
  }
}