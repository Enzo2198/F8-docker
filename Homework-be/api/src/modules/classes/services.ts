import { Injectable } from '@nestjs/common';
import {ClassReqI, ClassResI} from "@/modules/shares";


@Injectable()
export class ClassService {
  private classes: any = []

  get() {
    return this.classes;
  }

  create(className: ClassReqI): ClassResI{
    this.classes.push(className);
    return className
  }

  update(id: number, className: ClassReqI): ClassResI {
    this.classes[id] = {...this.classes[id], ...className};
    return this.classes[id]
  }

  delete(id: number) {
    this.classes.splice(id,1)
    return {'msg': 'Class deleted successfully.'};
  }
}
