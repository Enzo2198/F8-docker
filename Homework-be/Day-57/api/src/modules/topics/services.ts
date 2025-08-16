import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { TopicServiceI } from '@/shares/type/services';
import { TopicEntity } from "@/modules/topics/entities";

@Injectable()
export class TopicService
  extends BaseService<TopicEntity>
  implements TopicServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<TopicEntity>,
  ) {
    super(repository);
  }
}