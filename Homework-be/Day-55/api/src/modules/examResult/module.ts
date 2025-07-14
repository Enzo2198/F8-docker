import { Module } from '@nestjs/common';
import { ExamResultController } from './controllers';
import { ExamResultService } from './services';

@Module({
  imports: [],
  controllers: [ExamResultController],
  providers: [ExamResultService],
})
export class ExamResultModule {}
