export enum Role {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

export interface UserBaseI {
  name: string;
  email?: string;
  role: Role;
  status: string;
  school: string;
  parent_name: string;
  parent_phone: string;
  avatar: number;
}

export interface UserI extends UserBaseI {
  id: number;
}

// Create or update
export interface UserReqI extends UserBaseI {
  password: string;
}

// Response
export interface UserResI extends UserI {}
