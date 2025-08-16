import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from "@/database/module";
import { ClassModule } from "@/modules/classes/module";
import { SubjectModule } from "@/modules/subjects/module";
import { AnswerModule } from "@/modules/answers/module";
import {ClassUserModule} from "@/modules/classUsers/module";
import {ExamGroupModule} from "@/modules/examGroups/module";
import {ExamResultModule} from "@/modules/examResult/module";
import {ExamModule} from "@/modules/exams/module";
import {FileModule} from "@/modules/files/module";
import {JobModule} from "@/modules/jobs/module";
import {QuestionModule} from "@/modules/questions/module";
import {TopicModule} from "@/modules/topics/module";
import {UserModule} from "@/modules/users/module";

@Module({
  imports: [
    DatabaseModule,
    ClassModule,
    SubjectModule,
    AnswerModule,
    ClassUserModule,
    ExamGroupModule,
    ExamResultModule,
    ExamModule,
    FileModule,
    JobModule,
    QuestionModule,
    TopicModule,
    UserModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
