interface SubjectBaseI {
  name: string;
  code?: string;
}

export interface SubjectI extends SubjectBaseI {
  id: number;
}

// Create or update
export interface SubjectReqI extends SubjectBaseI {}

// Response
export interface SubjectResI extends SubjectI {}
