import { DataSource } from 'typeorm';
import {DATA_SOURCE} from "@/shares";
import * as process from "node:process";
import { UserEntity } from "@/modules/users/entities";
import {ClassesEntity} from "@/modules/classes/entities";
import {SubjectsEntity} from "@/modules/subjects/entities";
import {ClassUsersEntity} from "@/modules/classUsers/entities";
import {ExamGroupsEntity} from "@/modules/examGroups/entities";
import {ExamsEntity} from "@/modules/exams/entities";
import {QuestionsEntity} from "@/modules/questions/entities";
import {AnswersEntity} from "@/modules/answers/entities";
import {ExamResultsEntity} from "@/modules/examResult/entities";
import {TopicsEntity} from "@/modules/topics/entities";
import {FilesEntity} from "@/modules/files/entities";
import {JobsEntity} from "@/modules/jobs/entities";

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
          ClassesEntity,
          SubjectsEntity,
          ClassUsersEntity,
          ExamGroupsEntity,
          ExamsEntity,
          QuestionsEntity,
          AnswersEntity,
          ExamResultsEntity,
          TopicsEntity,
          FilesEntity,
          JobsEntity
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
