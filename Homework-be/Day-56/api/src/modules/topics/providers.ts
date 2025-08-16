import { DataSource } from 'typeorm';
import { TopicEntity } from './entities';
import { DATA_SOURCE } from '@/shares';

export const topicProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TopicEntity),
    inject: [DATA_SOURCE],
  },
];