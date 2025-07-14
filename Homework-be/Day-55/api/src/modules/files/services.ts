import {Injectable} from "@nestjs/common";

@Injectable()
export class FileService {
  create(File) {
    console.log(File);
  }
}