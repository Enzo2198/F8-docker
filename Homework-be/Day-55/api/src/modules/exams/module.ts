import { Module } from '@nestjs/common';
import { ExamController } from './controllers';
import { ExamService } from './services';

@Module({
  imports: [],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
