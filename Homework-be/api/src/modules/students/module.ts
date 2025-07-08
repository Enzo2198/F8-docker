import { Module } from '@nestjs/common';
import { StudentController } from './controllers';
import {StudentService} from "@/modules/students/services";

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
