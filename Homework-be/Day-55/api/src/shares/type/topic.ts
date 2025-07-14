interface TopicBaseI {
  subject_id: number;
  code: number;
  name: string;
}

export interface TopicI extends TopicBaseI {
  id: number;
}

// Create or update
export interface TopicReqI extends TopicBaseI {}

// Response
export interface TopicResI extends TopicI {}
