import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { levels } from '@/data/quizData';
import { QuizState } from '@/types/quiz';
import LevelSelector from '@/components/quiz/LevelSelector';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResults from '@/components/quiz/QuizResults';

const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentLevel: -1, // -1 means level selector
    currentQuestion: 0,
    selectedAnswers: Array.from({ length: levels.length }, () => []),
    showResults: false,
    quizComplete: false
  });
  
  const [completedLevels, setCompletedLevels] = useState<boolean[]>(
    Array(levels.length).fill(false)
  );
  
  const [levelScores, setLevelScores] = useState<number[]>(
    Array(levels.length).fill(0)
  );

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('quiz-progress');
    if (savedProgress) {
      const { completed, scores } = JSON.parse(savedProgress);
      setCompletedLevels(completed || Array(levels.length).fill(false));
      setLevelScores(scores || Array(levels.length).fill(0));
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (completed: boolean[], scores: number[]) => {
    localStorage.setItem('quiz-progress', JSON.stringify({
      completed,
      scores
    }));
  };

  const handleSelectLevel = (levelIndex: number) => {
    setQuizState({
      currentLevel: levelIndex,
      currentQuestion: 0,
      selectedAnswers: quizState.selectedAnswers,
      showResults: false,
      quizComplete: false
    });
  };

  const handleAnswerSelect = (answerIndex: string) => {
    const newAnswers = [...quizState.selectedAnswers];
    newAnswers[quizState.currentLevel][quizState.currentQuestion] = answerIndex;
    setQuizState({
      ...quizState,
      selectedAnswers: newAnswers
    });
  };

  const handleNext = () => {
    const currentLevelQuestions = levels[quizState.currentLevel].questions;
    if (quizState.currentQuestion < currentLevelQuestions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1
      });
    } else {
      // Level complete
      const score = calculateScore();
      const newCompletedLevels = [...completedLevels];
      const newLevelScores = [...levelScores];
      newCompletedLevels[quizState.currentLevel] = true;
      newLevelScores[quizState.currentLevel] = score;
      
      setCompletedLevels(newCompletedLevels);
      setLevelScores(newLevelScores);
      saveProgress(newCompletedLevels, newLevelScores);
      
      setQuizState({
        ...quizState,
        showResults: true,
        quizComplete: true
      });
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion - 1
      });
    }
  };

  const calculateScore = () => {
    const currentLevelAnswers = quizState.selectedAnswers[quizState.currentLevel];
    const currentLevelQuestions = levels[quizState.currentLevel].questions;
    return currentLevelAnswers.reduce((score, answer, index) => {
      return score + (answer === currentLevelQuestions[index].answer ? 1 : 0);
    }, 0);
  };

  const handleRetakeLevel = () => {
    const newAnswers = [...quizState.selectedAnswers];
    newAnswers[quizState.currentLevel] = [];
    setQuizState({
      currentLevel: quizState.currentLevel,
      currentQuestion: 0,
      selectedAnswers: newAnswers,
      showResults: false,
      quizComplete: false
    });
  };

  const handleBackToLevels = () => {
    setQuizState({
      currentLevel: -1,
      currentQuestion: 0,
      selectedAnswers: quizState.selectedAnswers,
      showResults: false,
      quizComplete: false
    });
  };

  const handleNextLevel = () => {
    const nextLevel = quizState.currentLevel + 1;
    if (nextLevel < levels.length) {
      setQuizState({
        currentLevel: nextLevel,
        currentQuestion: 0,
        selectedAnswers: quizState.selectedAnswers,
        showResults: false,
        quizComplete: false
      });
    }
  };

  // Level selector
  if (quizState.currentLevel === -1) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to CyberSentinel
              </Button>
            </Link>
          </div>
          <LevelSelector
            completedLevels={completedLevels}
            onSelectLevel={handleSelectLevel}
            levelScores={levelScores}
          />
        </div>
      </div>
    );
  }

  // Quiz results
  if (quizState.showResults) {
    const currentLevel = levels[quizState.currentLevel];
    const score = calculateScore();
    
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <QuizResults
            levelName={currentLevel.name}
            questions={currentLevel.questions}
            selectedAnswers={quizState.selectedAnswers[quizState.currentLevel]}
            score={score}
            onRetakeLevel={handleRetakeLevel}
            onBackToLevels={handleBackToLevels}
            onNextLevel={handleNextLevel}
            isLastLevel={quizState.currentLevel === levels.length - 1}
          />
        </div>
      </div>
    );
  }

  // Active quiz
  const currentLevel = levels[quizState.currentLevel];
  const currentQuestion = currentLevel.questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / currentLevel.questions.length) * 100;
  const selectedAnswer = quizState.selectedAnswers[quizState.currentLevel][quizState.currentQuestion] || '';

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" size="sm" onClick={handleBackToLevels} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            All Levels
          </Button>
          <div className="text-sm text-muted-foreground">
            Question {quizState.currentQuestion + 1} of {currentLevel.questions.length}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <QuizQuestion
            question={currentQuestion}
            questionNumber={quizState.currentQuestion + 1}
            totalQuestions={currentLevel.questions.length}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            levelName={currentLevel.name}
          />
          
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={quizState.currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              {quizState.currentQuestion === currentLevel.questions.length - 1 ? 'Finish Level' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;