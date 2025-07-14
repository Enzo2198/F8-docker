import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {ExamGroupService} from "./services";
import {ExamGroupReq} from "./dtos";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('ExamGroup')

@Controller('/examGroups')
export class ExamGroupController {
  constructor(private examGroupService: ExamGroupService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() cls: ExamGroupReq) {
    return this.examGroupService.create(cls)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: ExamGroupReq): ExamGroupRes {
  //   return this.examGroupService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.examGroupService.delete(id)
  // }
}