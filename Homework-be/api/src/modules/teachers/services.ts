import { Injectable } from '@nestjs/common';
import {TeacherReqI} from "@/modules/shares";

@Injectable()
export class TeacherService {
  private teachers: any = []

  get() {
    return this.teachers;
  }

  create(teacher: TeacherReqI) {
    this.teachers.push(teacher);
    return teacher
  }

  update(id: number, teacher: TeacherReqI) {
    this.teachers[id] = {...this.teachers[id], ...teacher};
    return this.teachers[id];
  }

  delete(id: number) {
    this.teachers.splice(id, 1);
    return {'msg': 'Teacher deleted successfully.'};
  }
}
