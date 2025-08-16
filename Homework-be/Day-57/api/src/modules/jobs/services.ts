import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { JobServiceI } from '@/shares/type/services';
import { JobEntity } from "@/modules/jobs/entities";

@Injectable()
export class JobService
  extends BaseService<JobEntity>
  implements JobServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<JobEntity>,
  ) {
    super(repository);
  }
}