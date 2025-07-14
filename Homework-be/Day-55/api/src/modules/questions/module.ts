import { Module } from '@nestjs/common';
import { QuestionController } from './controllers';
import { QuestionService } from './services';

@Module({
  imports: [],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
