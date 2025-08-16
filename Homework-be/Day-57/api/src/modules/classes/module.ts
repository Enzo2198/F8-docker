import { Module } from '@nestjs/common';
import { ClassController } from './controllers';
import { ClassService } from './services';
import { DatabaseModule } from '@/database/module';
import { ClassServiceToken } from '@/shares';
import { classProviders } from "@/modules/classes/providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [
    ...classProviders,
    {
      provide: ClassServiceToken,
      useClass: ClassService,
    },
  ],
})
export class ClassModule {}
