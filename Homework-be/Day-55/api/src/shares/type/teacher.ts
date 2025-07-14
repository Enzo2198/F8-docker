interface TeacherBaseI {
  name: string;
  email?: string;
}

export interface TeacherI extends TeacherBaseI {
  id: number;
}

export interface TeacherReqI extends TeacherBaseI {
  id?: number
}

export interface TeacherResI extends TeacherI {}
