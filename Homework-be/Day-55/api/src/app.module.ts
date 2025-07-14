import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TeacherModule } from "./modules/teachers/module";
import { DatabaseModule } from "@/database/module";
import { ClassModule } from "@/modules/classes/module";
import {SubjectModule} from "@/modules/subjects/module";

@Module({
  imports: [TeacherModule, DatabaseModule, ClassModule, SubjectModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
