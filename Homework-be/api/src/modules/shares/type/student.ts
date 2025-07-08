export interface AvatarI {
  id: number
  url: string
  payload: string
}

export interface StudentI {
  name: string
  email?: string
  school: string
  parent_name: string
  parent_phone: number
  avatar: AvatarI
}

export interface StudentReqI extends StudentI {}

export interface StudentResI extends StudentI {}
