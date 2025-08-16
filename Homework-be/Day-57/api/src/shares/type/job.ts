interface JobBaseI {
  name: string;
}

export interface JobI extends JobBaseI {
  id: number;
}

// Create or update
export interface JobReqI extends JobBaseI {}

// Response
export interface JobResI extends JobI {}
