import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { FileServiceI } from '@/shares/type/services';
import { FileEntity } from "@/modules/files/entities";

@Injectable()
export class FileService
  extends BaseService<FileEntity>
  implements FileServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<FileEntity>,
  ) {
    super(repository);
  }
}