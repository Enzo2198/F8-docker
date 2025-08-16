import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { ExamGroupServiceI } from '@/shares/type/services';
import { ExamGroupEntity } from "@/modules/examGroups/entities";

@Injectable()
export class ExamGroupService
  extends BaseService<ExamGroupEntity>
  implements ExamGroupServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<ExamGroupEntity>,
  ) {
    super(repository);
  }
}