export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Level {
  name: string;
  questions: Question[];
}

export interface QuizState {
  currentLevel: number;
  currentQuestion: number;
  selectedAnswers: string[][];
  showResults: boolean;
  quizComplete: boolean;
}