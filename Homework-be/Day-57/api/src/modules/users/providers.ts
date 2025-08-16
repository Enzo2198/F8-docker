import { DataSource } from 'typeorm';
import { UserEntity } from './entities';
import { DATA_SOURCE } from '@/shares';

export const userProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: [DATA_SOURCE],
  },
];