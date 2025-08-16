import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { QuestionServiceI } from '@/shares/type/services';
import { QuestionEntity } from "@/modules/questions/entities";

@Injectable()
export class QuestionService
  extends BaseService<QuestionEntity>
  implements QuestionServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<QuestionEntity>,
  ) {
    super(repository);
  }
}