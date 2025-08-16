import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";
import {Role} from "@/shares";

@Entity('User')
export class UserEntity extends BaseEntity{
  @Column({
    nullable: true,
  })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: Role;

  @Column()
  status: string;

  @Column()
  school: string;

  @Column()
  parent_name: string;

  @Column()
  parent_phone: string;

  @Column()
  avatar: number;
}