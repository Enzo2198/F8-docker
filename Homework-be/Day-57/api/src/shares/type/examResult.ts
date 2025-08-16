interface ExamResultBaseI {
  user_id:  number;
  exam_id: number;
  status: string;
  answers: string;
  number_of_correct_answer: number;
  score:  number;
}

export interface ExamResultI extends ExamResultBaseI {
  id: number;
}

// Create or update
export interface ExamResultReqI extends ExamResultBaseI {}

// Response
export interface ExamResultResI extends ExamResultI {}
