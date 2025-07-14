import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {TopicService} from "./services";
import {TopicReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Topic')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Topics')
export class TopicController {
  constructor(private TopicService: TopicService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() Topic: TopicReq) {
    return this.TopicService.create(Topic)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: TopicReq): TopicRes {
  //   return this.TopicService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.TopicService.delete(id)
  // }
}