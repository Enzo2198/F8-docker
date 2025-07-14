import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {ClassUserService} from "./services";
import {ClassUserReq} from "./dtos";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('ClassUser')

@Controller('/users')
export class ClassUserController {
  constructor(private userService: ClassUserService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() classUser: ClassUserReq) {
    return this.userService.create(classUser)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: ClassUserReq): ClassUserRes {
  //   return this.userService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.userService.delete(id)
  // }
}