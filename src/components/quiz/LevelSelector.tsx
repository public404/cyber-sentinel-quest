import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, CheckCircle } from 'lucide-react';
import { levels } from '@/data/quizData';

interface LevelSelectorProps {
  completedLevels: boolean[];
  onSelectLevel: (levelIndex: number) => void;
  levelScores: number[];
}

const LevelSelector = ({ completedLevels, onSelectLevel, levelScores }: LevelSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Security Analyst Challenge
        </h1>
        <p className="text-muted-foreground">
          Complete all 5 levels to master cybersecurity fundamentals
        </p>
      </div>
      
      <div className="grid gap-4">
        {levels.map((level, index) => {
          const isUnlocked = index === 0 || completedLevels[index - 1];
          const isCompleted = completedLevels[index];
          const score = levelScores[index] || 0;
          
          return (
            <Card key={index} className={`transition-all ${isUnlocked ? 'hover:shadow-md' : 'opacity-60'}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {level.name}
                      {isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {!isUnlocked && <Lock className="h-5 w-5 text-muted-foreground" />}
                    </CardTitle>
                    <CardDescription>
                      10 questions • {isCompleted ? `${score}/10 score` : 'Not completed'}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <Badge variant={score === 10 ? "default" : "secondary"}>
                        {score === 10 ? "Perfect!" : `${score}/10`}
                      </Badge>
                    )}
                    <Button
                      onClick={() => onSelectLevel(index)}
                      disabled={!isUnlocked}
                      variant={isCompleted ? "outline" : "default"}
                    >
                      {isCompleted ? "Retake" : "Start Level"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LevelSelector;