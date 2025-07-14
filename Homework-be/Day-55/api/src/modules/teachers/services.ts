import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
  private teachers: any = []

  get(){
    return this.teachers
  }

  create(teacher: any) {
    this.teachers.push(teacher)
    return teacher;
  }

  update(id, teacher) {
    return teacher
  }

  delete(id) {
    return {"msg": "deleted successfully"}
  }
}
