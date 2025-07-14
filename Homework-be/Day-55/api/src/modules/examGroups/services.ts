import {Injectable} from "@nestjs/common";

@Injectable()
export class ExamGroupService {
  create(examGroup) {
    console.log(examGroup);
  }
}