import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { ClassServiceI } from '@/shares/type/services';
import { ClassEntity } from "@/modules/classes/entities";

@Injectable()
export class ClassService
  extends BaseService<ClassEntity>
  implements ClassServiceI
{
  constructor(
    @Inject('CLASS_REPOSITORY')
    protected repository: Repository<ClassEntity>,
  ) {
    super(repository);
  }
}