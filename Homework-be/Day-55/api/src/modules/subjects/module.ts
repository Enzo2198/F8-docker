import { Module } from '@nestjs/common';
import { SubjectController } from './controllers';
import { SubjectService } from './services';

@Module({
  imports: [],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
