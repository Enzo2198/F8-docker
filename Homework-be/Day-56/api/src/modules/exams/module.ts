import { Module } from '@nestjs/common';
import { ExamController } from './controllers';
import { ExamService } from './services';
import {DatabaseModule} from "@/database/module";
import {ExamServiceToken} from "@/shares";
import {examProviders} from "@/modules/exams/providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ExamController],
  providers: [
    ...examProviders,
    {
      provide: ExamServiceToken,
      useClass: ExamService,
    },
  ],
})
export class ExamModule {}