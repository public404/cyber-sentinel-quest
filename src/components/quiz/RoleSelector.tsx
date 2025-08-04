import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getRoleNames } from '@/data/rolesData';
import { CheckCircle, Lock, Users } from 'lucide-react';

interface RoleSelectorProps {
  completedRoles: { [roleIndex: number]: boolean };
  onSelectRole: (roleIndex: number) => void;
  roleScores: { [roleIndex: number]: number };
}

const RoleSelector = ({ completedRoles, onSelectRole, roleScores }: RoleSelectorProps) => {
  const roleNames = getRoleNames();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Cybersecurity Career Roles</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose your cybersecurity career path and test your knowledge across different specializations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roleNames.map((roleName, index) => {
          const isCompleted = completedRoles[index];
          const score = roleScores[index] || 0;

          return (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                isCompleted ? 'ring-2 ring-primary/20' : ''
              }`}
              onClick={() => onSelectRole(index)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg leading-6">{roleName}</CardTitle>
                    <CardDescription className="text-sm">
                      Specialized cybersecurity role
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    {isCompleted && (
                      <CheckCircle className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {isCompleted && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Best Score:</span>
                      <Badge variant="secondary">
                        {score} points
                      </Badge>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full" 
                    variant={isCompleted ? "secondary" : "default"}
                  >
                    {isCompleted ? "Continue Role" : "Start Role"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>Complete challenges in each role to build your cybersecurity expertise</p>
      </div>
    </div>
  );
};

export default RoleSelector;