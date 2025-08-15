import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRoleNames, getLevelsForRole, getQuestionsForRoleLevel, PASSING_SCORE, shuffleArray } from '@/data/rolesData';
import RoleSelector from '@/components/quiz/RoleSelector';
import LevelSelector from '@/components/quiz/LevelSelector';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResults from '@/components/quiz/QuizResults';

interface RoleQuizState {
  currentRole: number; // -1 means role selector
  currentLevel: number; // -1 means level selector
  currentQuestion: number;
  selectedAnswers: { [roleIndex: number]: { [levelIndex: number]: string[] } };
  showResults: boolean;
  quizComplete: boolean;
  shuffledQuestions: any[];
  gameOver: boolean;
  allLevelsComplete: boolean;
  currentAnswer: string;
  showFeedback: boolean;
  isCorrect: boolean;
}

const RoleQuiz = () => {
  const roleNames = getRoleNames();
  
  const [quizState, setQuizState] = useState<RoleQuizState>({
    currentRole: -1, // -1 means role selector
    currentLevel: -1, // -1 means level selector
    currentQuestion: 0,
    selectedAnswers: {},
    showResults: false,
    quizComplete: false,
    shuffledQuestions: [],
    gameOver: false,
    allLevelsComplete: false,
    currentAnswer: '',
    showFeedback: false,
    isCorrect: false
  });
  
  const [completedRoles, setCompletedRoles] = useState<{ [roleIndex: number]: boolean }>({});
  const [completedLevels, setCompletedLevels] = useState<{ [roleIndex: number]: { [levelIndex: number]: boolean } }>({});
  const [roleScores, setRoleScores] = useState<{ [roleIndex: number]: number }>({});
  const [levelScores, setLevelScores] = useState<{ [roleIndex: number]: { [levelIndex: number]: number } }>({});

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('role-quiz-progress');
    if (savedProgress) {
      const { completedRoles: cRoles, completedLevels: cLevels, roleScores: rScores, levelScores: lScores } = JSON.parse(savedProgress);
      setCompletedRoles(cRoles || {});
      setCompletedLevels(cLevels || {});
      setRoleScores(rScores || {});
      setLevelScores(lScores || {});
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = (cRoles: any, cLevels: any, rScores: any, lScores: any) => {
    localStorage.setItem('role-quiz-progress', JSON.stringify({
      completedRoles: cRoles,
      completedLevels: cLevels,
      roleScores: rScores,
      levelScores: lScores
    }));
  };

  const handleSelectRole = (roleIndex: number) => {
    setQuizState({
      ...quizState,
      currentRole: roleIndex,
      currentLevel: -1, // Show level selector
      currentQuestion: 0,
      showResults: false,
      quizComplete: false
    });
  };

  const handleSelectLevel = (levelIndex: number) => {
    // Check if previous levels were passed (sequential progression)
    if (levelIndex > 0) {
      const prevLevelScore = levelScores[quizState.currentRole]?.[levelIndex - 1] || 0;
      if (prevLevelScore < PASSING_SCORE) {
        return; // Cannot access this level
      }
    }

    // Initialize answers array for this role/level if it doesn't exist
    const newAnswers = { ...quizState.selectedAnswers };
    if (!newAnswers[quizState.currentRole]) {
      newAnswers[quizState.currentRole] = {};
    }
    if (!newAnswers[quizState.currentRole][levelIndex]) {
      newAnswers[quizState.currentRole][levelIndex] = [];
    }

    // Shuffle questions for this level
    const roleName = roleNames[quizState.currentRole];
    const levelNames = getLevelsForRole(roleName);
    const levelName = levelNames[levelIndex];
    const questions = getQuestionsForRoleLevel(roleName, levelName);
    const shuffled = shuffleArray(questions).slice(0, 10); // Take first 10 questions

    setQuizState({
      ...quizState,
      currentLevel: levelIndex,
      currentQuestion: 0,
      selectedAnswers: newAnswers,
      showResults: false,
      quizComplete: false,
      shuffledQuestions: shuffled,
      gameOver: false,
      allLevelsComplete: false,
      currentAnswer: '',
      showFeedback: false,
      isCorrect: false
    });
  };

  const handleAnswerSelect = (answerIndex: string) => {
    const newAnswers = { ...quizState.selectedAnswers };
    if (!newAnswers[quizState.currentRole]) {
      newAnswers[quizState.currentRole] = {};
    }
    if (!newAnswers[quizState.currentRole][quizState.currentLevel]) {
      newAnswers[quizState.currentRole][quizState.currentLevel] = [];
    }
    newAnswers[quizState.currentRole][quizState.currentLevel][quizState.currentQuestion] = answerIndex;
    
    setQuizState({
      ...quizState,
      selectedAnswers: newAnswers
    });
  };

  const handleNext = () => {
    if (quizState.currentQuestion < quizState.shuffledQuestions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1
      });
    } else {
      // Level complete
      const score = calculateScore();
      
      // Update level scores
      const newLevelScores = { ...levelScores };
      if (!newLevelScores[quizState.currentRole]) {
        newLevelScores[quizState.currentRole] = {};
      }
      newLevelScores[quizState.currentRole][quizState.currentLevel] = score;
      
      // Check if passed (score >= 7)
      const passed = score >= PASSING_SCORE;
      
      if (!passed) {
        // Game over - did not pass
        setQuizState({
          ...quizState,
          gameOver: true,
          showResults: true,
          quizComplete: true
        });
        setLevelScores(newLevelScores);
        saveProgress(completedRoles, completedLevels, roleScores, newLevelScores);
        return;
      }
      
      // Update completed levels
      const newCompletedLevels = { ...completedLevels };
      if (!newCompletedLevels[quizState.currentRole]) {
        newCompletedLevels[quizState.currentRole] = {};
      }
      newCompletedLevels[quizState.currentRole][quizState.currentLevel] = true;
      
      // Check if all levels complete
      const roleName = roleNames[quizState.currentRole];
      const levelNames = getLevelsForRole(roleName);
      const totalLevels = levelNames.length;
      const isLastLevel = quizState.currentLevel === totalLevels - 1;
      
      if (isLastLevel) {
        // All levels complete - congratulations!
        const newCompletedRoles = { ...completedRoles };
        newCompletedRoles[quizState.currentRole] = true;
        const newRoleScores = { ...roleScores };
        newRoleScores[quizState.currentRole] = Object.values(newLevelScores[quizState.currentRole] || {}).reduce((sum, s) => sum + s, 0);
        
        setCompletedRoles(newCompletedRoles);
        setRoleScores(newRoleScores);
        setQuizState({
          ...quizState,
          allLevelsComplete: true,
          showResults: true,
          quizComplete: true
        });
        saveProgress(newCompletedRoles, newCompletedLevels, newRoleScores, newLevelScores);
      } else {
        setQuizState({
          ...quizState,
          showResults: true,
          quizComplete: true
        });
        saveProgress(completedRoles, newCompletedLevels, roleScores, newLevelScores);
      }
      
      setCompletedLevels(newCompletedLevels);
      setLevelScores(newLevelScores);
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
    const answers = quizState.selectedAnswers[quizState.currentRole]?.[quizState.currentLevel] || [];
    
    return answers.reduce((score, answer, index) => {
      return score + (answer === quizState.shuffledQuestions[index]?.answer ? 1 : 0);
    }, 0);
  };

  const handleRetakeLevel = () => {
    const newAnswers = { ...quizState.selectedAnswers };
    if (!newAnswers[quizState.currentRole]) {
      newAnswers[quizState.currentRole] = {};
    }
    newAnswers[quizState.currentRole][quizState.currentLevel] = [];
    
    // Re-shuffle questions
    const roleName = roleNames[quizState.currentRole];
    const levelNames = getLevelsForRole(roleName);
    const levelName = levelNames[quizState.currentLevel];
    const questions = getQuestionsForRoleLevel(roleName, levelName);
    const shuffled = shuffleArray(questions).slice(0, 10);
    
    setQuizState({
      ...quizState,
      currentQuestion: 0,
      selectedAnswers: newAnswers,
      showResults: false,
      quizComplete: false,
      shuffledQuestions: shuffled,
      gameOver: false,
      allLevelsComplete: false,
      currentAnswer: '',
      showFeedback: false,
      isCorrect: false
    });
  };

  const handleBackToLevels = () => {
    setQuizState({
      ...quizState,
      currentLevel: -1,
      currentQuestion: 0,
      showResults: false,
      quizComplete: false
    });
  };

  const handleBackToRoles = () => {
    setQuizState({
      ...quizState,
      currentRole: -1,
      currentLevel: -1,
      currentQuestion: 0,
      showResults: false,
      quizComplete: false
    });
  };

  const handleNextLevel = () => {
    const roleName = roleNames[quizState.currentRole];
    const levelNames = getLevelsForRole(roleName);
    const nextLevel = quizState.currentLevel + 1;
    
    if (nextLevel < levelNames.length) {
      // Initialize answers for next level
      const newAnswers = { ...quizState.selectedAnswers };
      if (!newAnswers[quizState.currentRole]) {
        newAnswers[quizState.currentRole] = {};
      }
      if (!newAnswers[quizState.currentRole][nextLevel]) {
        newAnswers[quizState.currentRole][nextLevel] = [];
      }

      // Shuffle questions for next level
      const nextLevelName = levelNames[nextLevel];
      const questions = getQuestionsForRoleLevel(roleName, nextLevelName);
      const shuffled = shuffleArray(questions).slice(0, 10);

      setQuizState({
        ...quizState,
        currentLevel: nextLevel,
        currentQuestion: 0,
        selectedAnswers: newAnswers,
        showResults: false,
        quizComplete: false,
        shuffledQuestions: shuffled,
        gameOver: false,
        allLevelsComplete: false,
        currentAnswer: '',
        showFeedback: false,
        isCorrect: false
      });
    }
  };

  // Role selector
  if (quizState.currentRole === -1) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to CyberSentinel
              </Button>
            </Link>
          </div>
          <RoleSelector
            completedRoles={completedRoles}
            onSelectRole={handleSelectRole}
            roleScores={roleScores}
          />
        </div>
      </div>
    );
  }

  // Level selector
  if (quizState.currentLevel === -1) {
    const roleName = roleNames[quizState.currentRole];
    const levelNames = getLevelsForRole(roleName);
    const roleLevels = levelNames.map((levelName, index) => ({
      name: levelName,
      questions: getQuestionsForRoleLevel(roleName, levelName)
    }));

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" size="sm" onClick={handleBackToRoles} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Roles
            </Button>
            <div className="text-center">
              <h2 className="text-xl font-semibold">{roleName}</h2>
              <p className="text-sm text-muted-foreground">Choose a level to begin</p>
            </div>
            <div></div>
          </div>
          <LevelSelector
            completedLevels={Object.values(completedLevels[quizState.currentRole] || {}).map(Boolean)}
            onSelectLevel={handleSelectLevel}
            levelScores={Object.values(levelScores[quizState.currentRole] || {}).map(Number)}
            levels={roleLevels}
          />
        </div>
      </div>
    );
  }

  // Quiz results
  if (quizState.showResults) {
    const roleName = roleNames[quizState.currentRole];
    const levelNames = getLevelsForRole(roleName);
    const levelName = levelNames[quizState.currentLevel];
    const score = calculateScore();
    
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <QuizResults
            levelName={levelName}
            questions={quizState.shuffledQuestions}
            selectedAnswers={quizState.selectedAnswers[quizState.currentRole]?.[quizState.currentLevel] || []}
            score={score}
            onRetakeLevel={handleRetakeLevel}
            onBackToLevels={handleBackToLevels}
            onNextLevel={handleNextLevel}
            isLastLevel={quizState.currentLevel === levelNames.length - 1}
            gameOver={quizState.gameOver}
            allLevelsComplete={quizState.allLevelsComplete}
            passingScore={PASSING_SCORE}
          />
        </div>
      </div>
    );
  }

  // Active quiz
  const roleName = roleNames[quizState.currentRole];
  const levelNames = getLevelsForRole(roleName);
  const levelName = levelNames[quizState.currentLevel];
  const currentQuestion = quizState.shuffledQuestions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizState.shuffledQuestions.length) * 100;
  const selectedAnswer = quizState.selectedAnswers[quizState.currentRole]?.[quizState.currentLevel]?.[quizState.currentQuestion] || '';

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" size="sm" onClick={handleBackToLevels} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {levelName}
          </Button>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">{roleName}</div>
            <div className="text-sm text-muted-foreground">
              Question {quizState.currentQuestion + 1} of {quizState.shuffledQuestions.length}
            </div>
          </div>
          <div></div>
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
            totalQuestions={quizState.shuffledQuestions.length}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            levelName={levelName}
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
              {quizState.currentQuestion === quizState.shuffledQuestions.length - 1 ? 'Finish Level' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleQuiz;