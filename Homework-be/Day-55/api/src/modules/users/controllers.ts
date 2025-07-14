import {Body, Controller, Delete, Get, Param, Post, Put, SerializeOptions} from "@nestjs/common";
import {UserService} from "./services";
import {UserReq} from "./dtos";
import {ApiHeaders, ApiTags} from "@nestjs/swagger";

@ApiTags('User')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  get() {
    return []
  }

  @Post()
  create(@Body() user: UserReq) {
    return this.userService.create(user)
  }
  //
  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: UserReq): UserRes {
  //   return this.userService.update(id, cls)
  // }
  //
  // @Delete('/:id')
  // delete(@Param('id') id: number){
  //   return this.userService.delete(id)
  // }
}