import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {ClassResI} from "@/modules/shares";
import {ClassReq} from "@/modules/classes/dtos";
import {ClassService} from "@/modules/classes/services";

@ApiTags('Class')
@Controller('/classes')
export class ClassController {

  constructor(private classService: ClassService) {}

  @Get()
  get() {
    return this.classService.get()
  }

  @Post()
  create(@Body() className: ClassReq): ClassResI {
    return this.classService.create(className)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() className: ClassReq): ClassResI {
    return this.classService.update(id, className)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.classService.delete(id)
  }
}
