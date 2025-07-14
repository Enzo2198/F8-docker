interface UserBaseI {
  name: string;
  email?: string;
  password: string;
  role: string;
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
export interface UserReqI extends UserBaseI {}

// Response
export interface UserResI extends UserI {}
