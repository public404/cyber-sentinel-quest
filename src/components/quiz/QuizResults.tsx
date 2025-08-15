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
  gameOver?: boolean;
  allLevelsComplete?: boolean;
  passingScore: number;
}

const QuizResults = ({ 
  levelName,
  questions,
  selectedAnswers,
  score,
  onRetakeLevel,
  onBackToLevels,
  onNextLevel,
  isLastLevel,
  gameOver = false,
  allLevelsComplete = false,
  passingScore
}: QuizResultsProps) => {
  const percentage = (score / questions.length) * 100;
  const passed = score >= passingScore;
  const getOptionLetter = (index: number) => String.fromCharCode(97 + index);
  
  const isAnswerCorrect = (questionIndex: number) => {
    return selectedAnswers[questionIndex] === questions[questionIndex].answer;
  };

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-center">
          {allLevelsComplete ? "🏆 Congratulations! All Levels Complete!" : 
           gameOver ? "❌ Game Over" : 
           passed ? "✅ Level Passed!" : "❌ Level Failed"}
        </CardTitle>
        <CardDescription>
          {allLevelsComplete ? 
            "🎉 You completed all levels! Congratulations!" :
            gameOver ? 
              `❌ You did not pass ${levelName}. Game over.` :
              passed ? 
                `🎯 You scored ${score}/10 and passed ${levelName}!` :
                `❌ You scored ${score}/10. You need ${passingScore}/10 to pass.`
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className={`text-4xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
            {score}/10
          </div>
          <div className="text-xl text-muted-foreground">
            {percentage.toFixed(1)}% correct
          </div>
          {!passed && !allLevelsComplete && (
            <div className="text-sm text-muted-foreground">
              Minimum passing score: {passingScore}/10
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

        <div className="flex gap-3 justify-center">
          {(gameOver || !passed) && (
            <Button variant="outline" onClick={onRetakeLevel}>
              Retake Level
            </Button>
          )}
          <Button variant="outline" onClick={onBackToLevels}>
            Back to Levels
          </Button>
          {passed && !isLastLevel && !allLevelsComplete && (
            <Button onClick={onNextLevel}>
              Next Level
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizResults;