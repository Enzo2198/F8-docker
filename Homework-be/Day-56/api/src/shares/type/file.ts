interface FileBaseI {
  url: string;
  key: string;
}

export interface FileI extends FileBaseI {
  id: number;
}

// Create or update
export interface FileReqI extends FileBaseI {}

// Response
export interface FileResI extends FileI {}
