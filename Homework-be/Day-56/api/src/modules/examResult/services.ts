import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { ExamResultServiceI } from '@/shares/type/services';
import {ExamResultEntity} from "@/modules/examResult/entities";

@Injectable()
export class ExamResultService
  extends BaseService<ExamResultEntity>
  implements ExamResultServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<ExamResultEntity>,
  ) {
    super(repository);
  }
}