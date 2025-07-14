import {Injectable} from "@nestjs/common";

@Injectable()
export class ExamResultService {
  create(ExamResult) {
    console.log(ExamResult);
  }
}