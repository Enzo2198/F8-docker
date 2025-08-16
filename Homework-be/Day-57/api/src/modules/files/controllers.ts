import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { FileService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { FileReq } from './dtos';
import { FileServiceToken } from '@/shares';

@ApiTags('File')
// @ApiHeaders({
//   name: 'authorization',
//   description: 'Custom header'
// })

@Controller('/Files')
export class FileController {
  constructor(
    @Inject(FileServiceToken)
    private fileService: FileService
  ) {}

  @Get()
  getAll() {
    return this.fileService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.fileService.findOne(id);
  }

  @Post()
  create(@Body() file: FileReq) {
    return this.fileService.create(file);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() file: FileReq) {
    return this.fileService.updateOne(id, file);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.fileService.softDelete(id);
  }
}