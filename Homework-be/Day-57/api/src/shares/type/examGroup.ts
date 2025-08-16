interface ExamGroupBaseI {
  name: string;
  class_id: number;
  start_time: Date;
  await_time: number;
  is_once: boolean;
  is_save_local: boolean;
}

export interface ExamGroupI extends ExamGroupBaseI {
  id: number;
}

// Create or update
export interface ExamGroupReqI extends ExamGroupBaseI {}

// Response
export interface ExamGroupResI extends ExamGroupI {}
