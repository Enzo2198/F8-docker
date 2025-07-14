import { Module } from '@nestjs/common';
import { FileController } from './controllers';
import { FileService } from './services';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
