import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {JobService} from "./services";
import {JobReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Job')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/jobs')
export class JobController {
  constructor(private jobService: JobService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() job: JobReq) {
    return this.jobService.create(job)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: JobReq): JobRes {
  //   return this.jobService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.jobService.delete(id)
  // }
}