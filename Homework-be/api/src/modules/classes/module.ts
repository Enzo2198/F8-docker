import { Module } from '@nestjs/common';
import {ClassController} from './controllers';
import {ClassService} from "@/modules/classes/services";

@Module({
  imports: [],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
