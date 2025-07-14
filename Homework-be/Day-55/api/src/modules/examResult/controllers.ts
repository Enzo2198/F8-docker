import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {ExamResultService} from "./services";
import {ExamResultReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('ExamResult')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/ExamResults')
export class ExamResultController {
  constructor(private ExamResultService: ExamResultService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() ExamResult: ExamResultReq) {
    return this.ExamResultService.create(ExamResult)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: ExamResultReq): ExamResultRes {
  //   return this.ExamResultService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.ExamResultService.delete(id)
  // }
}