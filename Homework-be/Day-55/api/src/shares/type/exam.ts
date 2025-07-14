interface ExamBaseI {
  name: string;
  exam_group_id: number;
  class_id: number;
  code?: string;
  number_of_question: number;
  total_time: number;
  correct_answer: string;
  description: string;
  device: string;
}

export interface ExamI extends ExamBaseI {
  id: number;
}

// Create or update
export interface ExamReqI extends ExamBaseI {}

// Response
export interface ExamResI extends ExamI {}
