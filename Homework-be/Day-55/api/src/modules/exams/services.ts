import {Injectable} from "@nestjs/common";

@Injectable()
export class ExamService {
  create(Exam) {
    console.log(Exam);
  }
}