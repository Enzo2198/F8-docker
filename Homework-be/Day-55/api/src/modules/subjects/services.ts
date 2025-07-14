import {Injectable} from "@nestjs/common";

@Injectable()
export class SubjectService {
  create(subject) {
    console.log(subject);
  }
}