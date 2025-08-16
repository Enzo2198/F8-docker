interface QuestionBaseI {
  exam_id: number;
  index: number;
  type: string;
  correct_answer: string;
  topic_id: number;
}

export interface QuestionI extends QuestionBaseI {
  id: number;
}

// Create or update
export interface QuestionReqI extends QuestionBaseI {}

// Response
export interface QuestionResI extends QuestionI {}
