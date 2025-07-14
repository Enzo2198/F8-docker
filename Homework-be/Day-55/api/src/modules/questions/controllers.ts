import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {QuestionService} from "./services";
import {QuestionReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Question')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Questions')
export class QuestionController {
  constructor(private QuestionService: QuestionService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() Question: QuestionReq) {
    return this.QuestionService.create(Question)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: QuestionReq): QuestionRes {
  //   return this.QuestionService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.QuestionService.delete(id)
  // }
}