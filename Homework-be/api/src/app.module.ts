import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TeacherModule } from "@/modules/teachers/module";
import {StudentModule} from "@/modules/students/module";
import {ClassModule} from "@/modules/classes/module";

@Module({
  imports: [TeacherModule, StudentModule, ClassModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
