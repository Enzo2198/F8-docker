import {Injectable} from "@nestjs/common";

@Injectable()
export class JobService {
  create(job) {
    console.log(job);
  }
}