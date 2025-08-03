import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: "A large number of requests from a single IP to port 22 is most likely a:",
    options: [
      "Port scan",
      "Brute force SSH attack",
      "Normal admin access",
      "DNS tunneling"
    ],
    answer: "b"
  },
  {
    question: "Decode this base64 payload: 'ZWNobyBoYWNrZWQh'",
    options: [
      "hack complete!",
      "echo hacked!",
      "sudo backdoor",
      "reverse shell"
    ],
    answer: "b"
  },
  {
    question: "Which Nmap command would you use for a stealth scan?",
    options: [
      "nmap -sS",
      "nmap -sU",
      "nmap -sV",
      "nmap -O"
    ],
    answer: "a"
  },
  {
    question: "You see repeated log entries like:\n[Auth] Failed login from 192.168.1.55 user=root\nWhat should be your immediate action?",
    options: [
      "Block IP 192.168.1.55",
      "Reboot the system",
      "Grant root access to the user",
      "Clear the logs"
    ],
    answer: "a"
  },
  {
    question: "You receive a phishing email with a suspicious attachment. What's your first action?",
    options: [
      "Open it in a browser",
      "Forward it to coworkers",
      "Analyze it in a sandbox",
      "Upload to social media"
    ],
    answer: "c"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].answer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizComplete(false);
  };

  const getOptionLetter = (index: number) => String.fromCharCode(97 + index); // a, b, c, d

  const isAnswerCorrect = (questionIndex: number) => {
    return selectedAnswers[questionIndex] === questions[questionIndex].answer;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Quiz Results
              </CardTitle>
              <CardDescription>Security Analyst / Cybersecurity Analyst Challenge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {score}/{questions.length}
                </div>
                <div className="text-2xl text-muted-foreground">
                  {percentage}% Score
                </div>
                {score === questions.length ? (
                  <div className="space-y-2">
                    <div className="text-2xl">🎉</div>
                    <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                      Perfect Score! You're ready to become a Security Analyst!
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-2xl">📘</div>
                    <div className="text-lg text-orange-600 dark:text-orange-400">
                      Keep practicing to improve your cybersecurity skills
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Review Your Answers:</h3>
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
                <Button onClick={resetQuiz} variant="outline" className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Retake Quiz
                </Button>
                <Button asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Back to CyberSentinel
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Security Analyst Challenge
                </CardTitle>
                <CardDescription>
                  Question {currentQuestion + 1} of {questions.length}
                </CardDescription>
              </div>
              <Link to="/">
                <Button variant="outline" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                {questions[currentQuestion].question}
              </h2>
              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => {
                  const optionLetter = getOptionLetter(index);
                  const isSelected = selectedAnswers[currentQuestion] === optionLetter;
                  
                  return (
                    <Button
                      key={index}
                      variant={isSelected ? "default" : "outline"}
                      className="justify-start text-left h-auto p-4 whitespace-normal"
                      onClick={() => handleAnswerSelect(optionLetter)}
                    >
                      <span className="font-mono font-semibold mr-3">{optionLetter})</span>
                      <span>{option}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestion]}
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;