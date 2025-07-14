interface ClassUserBaseI {
  class_id: number;
  user_id: number;
}

export interface ClassUserI extends ClassUserBaseI {
  id: number;
}

// Create or update
export interface ClassUserReqI extends ClassUserBaseI {}

// Response
export interface ClassUserResI extends ClassUserI {}
