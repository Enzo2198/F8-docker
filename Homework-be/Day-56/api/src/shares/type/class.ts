interface ClassBaseI {
  name: string;
  code?: string;
}

export interface ClassI extends ClassBaseI {
  id: number;
}

// Create or update
export interface ClassReqI extends ClassBaseI {}

// Response
export interface ClassResI extends ClassI {}
