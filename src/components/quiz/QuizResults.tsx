import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw, ArrowLeft, ArrowRight } from 'lucide-react';
import { Question } from '@/types/quiz';

interface QuizResultsProps {
  levelName: string;
  questions: Question[];
  selectedAnswers: string[];
  score: number;
  onRetakeLevel: () => void;
  onBackToLevels: () => void;
  onNextLevel?: () => void;
  isLastLevel: boolean;
}

const QuizResults = ({ 
  levelName, 
  questions, 
  selectedAnswers, 
  score, 
  onRetakeLevel, 
  onBackToLevels,
  onNextLevel,
  isLastLevel 
}: QuizResultsProps) => {
  const percentage = Math.round((score / questions.length) * 100);
  const getOptionLetter = (index: number) => String.fromCharCode(97 + index);
  
  const isAnswerCorrect = (questionIndex: number) => {
    return selectedAnswers[questionIndex] === questions[questionIndex].answer;
  };

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          {levelName} Results
        </CardTitle>
        <CardDescription>Your performance on this level</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="text-5xl font-bold text-primary">
            {score}/{questions.length}
          </div>
          <div className="text-xl text-muted-foreground">
            {percentage}% Score
          </div>
          {score === questions.length ? (
            <div className="space-y-2">
              <div className="text-2xl">🎉</div>
              <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                Perfect Score! Level Mastered!
              </div>
            </div>
          ) : score >= 7 ? (
            <div className="space-y-2">
              <div className="text-2xl">🎯</div>
              <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Great job! Level passed!
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-2xl">📘</div>
              <div className="text-lg text-orange-600 dark:text-orange-400">
                Keep practicing to improve your skills
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Review Your Answers:</h3>
          {questions.map((q, index) => (
            <Card key={index} className="border-l-4 border-l-primary/20">
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <p className="font-medium text-sm">
                      {index + 1}. {q.question}
                    </p>
                    {isAnswerCorrect(index) ? (
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {q.options.map((option, optIndex) => {
                      const optionLetter = getOptionLetter(optIndex);
                      const isSelected = selectedAnswers[index] === optionLetter;
                      const isCorrect = q.answer === optionLetter;
                      
                      return (
                        <div
                          key={optIndex}
                          className={`p-2 rounded border ${
                            isCorrect
                              ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200'
                              : isSelected
                              ? 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
                              : 'bg-muted'
                          }`}
                        >
                          <span className="font-mono font-semibold">{optionLetter})</span> {option}
                          {isCorrect && <Badge variant="outline" className="ml-2 text-xs">Correct</Badge>}
                          {isSelected && !isCorrect && <Badge variant="destructive" className="ml-2 text-xs">Your Answer</Badge>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onRetakeLevel} variant="outline" className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Retake Level
          </Button>
          <Button onClick={onBackToLevels} variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            All Levels
          </Button>
          {!isLastLevel && score >= 7 && onNextLevel && (
            <Button onClick={onNextLevel} className="flex items-center gap-2">
              Next Level
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizResults;