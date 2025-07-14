import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
  create(User) {
    console.log(User);
  }
}