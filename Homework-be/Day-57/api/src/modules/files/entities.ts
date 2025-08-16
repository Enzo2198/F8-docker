import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('Files')
export class FileEntity extends BaseEntity{
  @Column()
  url: string;

  @Column()
  key: string;
}