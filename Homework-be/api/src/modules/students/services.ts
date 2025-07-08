import { Injectable } from '@nestjs/common';
import {StudentReqI} from "@/modules/shares";


@Injectable()
export class StudentService {
  private students: any = []

  get() {
    return this.students;
  }

  create(student: StudentReqI) {
    this.students.push(student);
    return student
  }

  update(id: number, student: StudentReqI) {
    this.students[id] = {...this.students[id], ...student};
    return this.students[id]
  }

  delete(id: number) {
    this.students.splice(id,1)
    return {'msg': 'Student deleted successfully.'};
  }
}
