import { DataSource } from 'typeorm';
import {DATA_SOURCE} from "@/shares";
import * as process from "node:process";
import { UserEntity } from "@/modules/users/entities";
import {ClassEntity} from "@/modules/classes/entities";
import {SubjectEntity} from "@/modules/subjects/entities";
import {ClassUserEntity} from "@/modules/classUsers/entities";
import {ExamGroupEntity} from "@/modules/examGroups/entities";
import {ExamEntity} from "@/modules/exams/entities";
import {QuestionEntity} from "@/modules/questions/entities";
import {AnswerEntity} from "@/modules/answers/entities";
import {ExamResultEntity} from "@/modules/examResult/entities";
import {TopicEntity} from "@/modules/topics/entities";
import {FileEntity} from "@/modules/files/entities";
import {JobEntity} from "@/modules/jobs/entities";

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [
          UserEntity,
          ClassEntity,
          SubjectEntity,
          ClassUserEntity,
          ExamGroupEntity,
          ExamEntity,
          QuestionEntity,
          AnswerEntity,
          ExamResultEntity,
          TopicEntity,
          FileEntity,
          JobEntity
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
