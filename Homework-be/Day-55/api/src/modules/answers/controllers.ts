import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {AnswerService} from "./services";
import {AnswerReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Answer')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Answers')
export class AnswerController {
  constructor(private AnswerService: AnswerService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() Answer: AnswerReq) {
    return this.AnswerService.create(Answer)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: AnswerReq): AnswerRes {
  //   return this.AnswerService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.AnswerService.delete(id)
  // }
}