import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { AnswerServiceI } from '@/shares/type/services';
import { AnswerEntity } from "@/modules/answers/entities";

@Injectable()
export class AnswerService
  extends BaseService<AnswerEntity>
  implements AnswerServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<AnswerEntity>,
  ) {
    super(repository);
  }
}