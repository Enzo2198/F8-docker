import {Injectable} from "@nestjs/common";

@Injectable()
export class ClassService {
  create(cls) {
    console.log(cls);
  }
}