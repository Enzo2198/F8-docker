import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { ExamServiceI } from '@/shares/type/services';
import { ExamEntity } from "@/modules/exams/entities";

@Injectable()
export class ExamService
  extends BaseService<ExamEntity>
  implements ExamServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<ExamEntity>,
  ) {
    super(repository);
  }
}