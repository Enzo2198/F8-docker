import { Column, Entity } from "typeorm";
import { BaseEntity } from "@/modules/base/entities";

@Entity('Files')
export class FilesEntity extends BaseEntity{
  @Column()
  url: string;

  @Column()
  key: string;
}