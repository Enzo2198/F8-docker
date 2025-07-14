import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {SubjectService} from "./services";
import {SubjectReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('Subject')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/subjects')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() subject: SubjectReq) {
    return this.subjectService.create(subject)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: SubjectReq): SubjectRes {
  //   return this.subjectService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.subjectService.delete(id)
  // }
}