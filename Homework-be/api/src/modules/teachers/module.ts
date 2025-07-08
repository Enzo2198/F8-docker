import { Module } from '@nestjs/common';
import { TeacherController } from './controllers';
import { TeacherService } from "@/modules/teachers/services";

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
