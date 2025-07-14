import {Injectable} from "@nestjs/common";

@Injectable()
export class QuestionService {
  create(Question) {
    console.log(Question);
  }
}