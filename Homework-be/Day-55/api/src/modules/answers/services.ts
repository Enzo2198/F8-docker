import {Injectable} from "@nestjs/common";

@Injectable()
export class AnswerService {
  create(Answer) {
    console.log(Answer);
  }
}