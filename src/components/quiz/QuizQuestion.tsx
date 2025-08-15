import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Question } from '@/types/quiz';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string;
  onAnswerSelect: (answer: string) => void;
  levelName: string;
  showFeedback?: boolean;
  isCorrect?: boolean;
  correctAnswer?: string;
}

const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  onAnswerSelect,
  levelName,
  showFeedback = false,
  isCorrect = false,
  correctAnswer
}: QuizQuestionProps) => {
  const getOptionLetter = (index: number) => String.fromCharCode(97 + index); // a, b, c, d

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">
              {levelName}
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline">
                Question {questionNumber} of {totalQuestions}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            {question.question}
          </h2>
          <div className="grid gap-3">
            {question.options.map((option, index) => {
              const optionLetter = getOptionLetter(index);
              const isSelected = selectedAnswer === optionLetter;
              
              return (
                <Button
                  key={index}
                  variant={isSelected ? "default" : "outline"}
                  className="justify-start text-left h-auto p-4 whitespace-normal"
                  onClick={() => onAnswerSelect(optionLetter)}
                >
                  <span className="font-mono font-semibold mr-3">{optionLetter})</span>
                  <span>{option}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;