interface AnswerBaseI {
  exam_result_id: number;
  question_id: number;
  answer: string;
  is_correct: boolean;
}

export interface AnswerI extends AnswerBaseI {
  id: number;
}

// Create or update
export interface AnswerReqI extends AnswerBaseI {}

// Response
export interface AnswerResI extends AnswerI {}
