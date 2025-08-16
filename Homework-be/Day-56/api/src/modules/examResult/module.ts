import { Module } from '@nestjs/common';
import { ExamResultController } from './controllers';
import { ExamResultService } from './services';
import {DatabaseModule} from "@/database/module";
import {ExamResultServiceToken} from "@/shares";
import {examResultProviders} from "@/modules/examResult/providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ExamResultController],
  providers: [
    ...examResultProviders,
    {
      provide: ExamResultServiceToken,
      useClass: ExamResultService,
    },
  ],
})
export class ExamResultModule {}
