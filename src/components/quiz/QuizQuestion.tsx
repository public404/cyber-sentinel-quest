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
              const isCorrectOption = correctAnswer === optionLetter;
              
              let variant: "default" | "outline" | "destructive" | "secondary" = "outline";
              let className = "justify-start text-left h-auto p-4 whitespace-normal";
              
              if (showFeedback) {
                if (isSelected && isCorrect) {
                  variant = "default";
                  className += " bg-green-100 dark:bg-green-900 border-green-500";
                } else if (isSelected && !isCorrect) {
                  variant = "destructive";
                } else if (isCorrectOption && !isCorrect) {
                  variant = "secondary";
                  className += " bg-green-100 dark:bg-green-900 border-green-500";
                }
              } else if (isSelected) {
                variant = "default";
              }
              
              return (
                <Button
                  key={index}
                  variant={variant}
                  className={className}
                  onClick={() => !showFeedback && onAnswerSelect(optionLetter)}
                  disabled={showFeedback}
                >
                  <span className="font-mono font-semibold mr-3">{optionLetter})</span>
                  <span>{option}</span>
                  {showFeedback && isSelected && (
                    <span className="ml-auto">
                      {isCorrect ? "✅" : "❌"}
                    </span>
                  )}
                  {showFeedback && isCorrectOption && !isSelected && (
                    <span className="ml-auto text-green-600">✓ Correct</span>
                  )}
                </Button>
              );
            })}
            
            {showFeedback && (
              <div className="mt-4 p-4 rounded-lg bg-muted">
                <p className="text-sm font-medium">
                  {isCorrect ? (
                    <span className="text-green-600">✅ Correct!</span>
                  ) : (
                    <span className="text-red-600">❌ Wrong! Correct answer was {correctAnswer}</span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;