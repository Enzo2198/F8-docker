import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { SubjectServiceI } from '@/shares/type/services';
import { SubjectEntity } from "@/modules/subjects/entities";

@Injectable()
export class SubjectService
  extends BaseService<SubjectEntity>
  implements SubjectServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<SubjectEntity>,
  ) {
    super(repository);
  }
}