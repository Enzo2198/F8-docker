import { Module } from '@nestjs/common';
import { ClassUserController } from './controllers';
import { ClassUserService } from './services';

@Module({
  imports: [],
  controllers: [ClassUserController],
  providers: [ClassUserService],
})
export class ClassUserModule {}
