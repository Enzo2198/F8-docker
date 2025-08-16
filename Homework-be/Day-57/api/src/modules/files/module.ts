import { Module } from '@nestjs/common';
import { FileController } from './controllers';
import { FileService } from './services';
import {DatabaseModule} from "@/database/module";
import {FileServiceToken} from "@/shares";
import {fileProviders} from "@/modules/files/providers";

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [
    ...fileProviders,
    {
      provide: FileServiceToken,
      useClass: FileService,
    },
  ],
})
export class FileModule {}