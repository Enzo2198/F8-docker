import {Injectable} from "@nestjs/common";

@Injectable()
export class TopicService {
  create(Topic) {
    console.log(Topic);
  }
}