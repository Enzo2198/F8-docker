import {Injectable} from "@nestjs/common";

@Injectable()
export class ClassUserService {
  create(classUser) {
    console.log(classUser);
  }
}