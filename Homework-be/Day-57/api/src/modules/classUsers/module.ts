import { Module } from '@nestjs/common';
import { ClassUserController } from './controllers';
import {DatabaseModule} from "@/database/module";
import {ClassUserServiceToken} from "@/shares";
import {ClassUserService} from "@/modules/classUsers/services";
import {classUserProviders} from "@/modules/classUsers/providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassUserController],
  providers: [
    ...classUserProviders,
    {
      provide: ClassUserServiceToken,
      useClass: ClassUserService,
    },
  ],
})
export class ClassUserModule {}
