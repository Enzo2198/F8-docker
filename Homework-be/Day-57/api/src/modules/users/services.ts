import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { UserServiceI } from '@/shares/type/services';
import { UserEntity } from "@/modules/users/entities";

@Injectable()
export class UserService
  extends BaseService<UserEntity>
  implements UserServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<UserEntity>,
  ) {
    super(repository);
  }
}