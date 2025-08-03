import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface GameState {
  username: string;
  level: number;
  gameStarted: boolean;
  showIntro: boolean;
  currentOutput: string[];
  awaitingInput: boolean;
  inputPrompt: string;
  expectedAnswer: string;
  currentTask: string;
  level3Step: 'username' | 'password' | null;
  level3Username: string;
}

const CyberSentinel = () => {
  const { toast } = useToast();
  const [gameState, setGameState] = useState<GameState>({
    username: '',
    level: 1,
    gameStarted: false,
    showIntro: false,
    currentOutput: [],
    awaitingInput: false,
    inputPrompt: '',
    expectedAnswer: '',
    currentTask: '',
    level3Step: null,
    level3Username: ''
  });
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const levelTopics = {
    1: "Reconnaissance (OSINT)",
    2: "Scanning & Enumeration", 
    3: "Exploitation (SQLi)",
    4: "Shell Access Simulation",
    5: "Privilege Escalation",
    6: "Persistence (Cronjob Backdoor)",
    7: "Log Cleansing",
    8: "Data Exfiltration"
  };

  const typeText = (text: string, callback?: () => void) => {
    setIsTyping(true);
    const words = text.split(' ');
    let currentText = '';
    
    words.forEach((word, index) => {
      setTimeout(() => {
        currentText += (index === 0 ? '' : ' ') + word;
        setGameState(prev => ({
          ...prev,
          currentOutput: [...prev.currentOutput.slice(0, -1), currentText]
        }));
        
        if (index === words.length - 1) {
          setIsTyping(false);
          callback?.();
        }
      }, index * 100);
    });
  };

  const addOutput = (text: string, isTyped: boolean = false) => {
    if (isTyped) {
      setGameState(prev => ({
        ...prev,
        currentOutput: [...prev.currentOutput, '']
      }));
      typeText(text);
    } else {
      setGameState(prev => ({
        ...prev,
        currentOutput: [...prev.currentOutput, text]
      }));
    }
  };

  const startGame = () => {
    if (!gameState.username.trim()) {
      toast({
        title: "Error",
        description: "Please enter your hacker alias first!",
        variant: "destructive"
      });
      return;
    }
    
    setGameState(prev => ({ ...prev, gameStarted: true, showIntro: true }));
    showIntro();
  };

  const showIntro = () => {
    addOutput(`🧠 Welcome, ${gameState.username}!`, true);
    setTimeout(() => {
      addOutput("", false);
      addOutput("Cybersecurity is about protecting systems from digital threats.", true);
      setTimeout(() => {
        addOutput("Today, you'll simulate an ethical hacker's journey through 8 stages:", false);
        addOutput("1. Reconnaissance", false);
        addOutput("2. Scanning", false);
        addOutput("3. Exploitation", false);
        addOutput("4. Shell Access", false);
        addOutput("5. Privilege Escalation", false);
        addOutput("6. Persistence", false);
        addOutput("7. Log Cleansing", false);
        addOutput("8. Data Exfiltration", false);
        addOutput("", false);
        addOutput("Remember: You're a WHITE HAT hacker. Learn. Hack. Defend. ⚔️", true);
        
        setTimeout(() => {
          setGameState(prev => ({ ...prev, showIntro: false }));
          startLevel(1);
        }, 3000);
      }, 2000);
    }, 1500);
  };

  const startLevel = (level: number) => {
    addOutput("", false);
    addOutput(`🌐 LEVEL ${level} — ${levelTopics[level as keyof typeof levelTopics]}`, false);
    addOutput("", false);
    
    switch (level) {
      case 1:
        level1();
        break;
      case 2:
        level2();
        break;
      case 3:
        level3();
        break;
      case 4:
        level4();
        break;
      case 5:
        level5();
        break;
      case 6:
        level6();
        break;
      case 7:
        level7();
        break;
      case 8:
        level8();
        break;
      default:
        gameComplete();
    }
  };

  const level1 = () => {
    addOutput("🕵️ Task: Find the hidden admin email in HTML.", true);
    setTimeout(() => {
      addOutput("", false);
      addOutput("<html>", false);
      addOutput("    <body>", false);
      addOutput("        <h1>Welcome to AcmeCorp!</h1>", false);
      addOutput("        <p>Contact: support@acmecorp.com</p>", false);
      addOutput("        <p>Dev contact: <span style='display:none'>admin@acmecorp.com</span></p>", false);
      addOutput("    </body>", false);
      addOutput("</html>", false);
      addOutput("", false);
      
      setGameState(prev => ({
        ...prev,
        awaitingInput: true,
        inputPrompt: "Enter the hidden admin email:",
        expectedAnswer: "admin@acmecorp.com",
        currentTask: "Find hidden email in HTML source"
      }));
    }, 1500);
  };

  const level2 = () => {
    addOutput("🌐 Task: Simulate a port scan on 192.168.1.10", true);
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        awaitingInput: true,
        inputPrompt: "Type 'nmap 192.168.1.10' to begin scan:",
        expectedAnswer: "nmap 192.168.1.10",
        currentTask: "Network port scanning"
      }));
    }, 1000);
  };

  const level3 = () => {
    addOutput("💥 Level 3: Exploitation (SQL Injection)", true);
    setTimeout(() => {
      addOutput("", false);
      addOutput("A vulnerable login form is exposed.", false);
      addOutput("You don't know the credentials. Try to break in using SQL injection.", false);
      addOutput("", false);
      addOutput("HINTS:", false);
      addOutput("- Think about how to **trick** the SQL query into returning TRUE", false);
      addOutput("- Use: `' OR '1'='1`", false);
      addOutput("- Try injecting into **either** username or password", false);
      addOutput("", false);
      
      setGameState(prev => ({
        ...prev,
        awaitingInput: true,
        inputPrompt: "Username:",
        expectedAnswer: "",
        currentTask: "SQL Injection bypass",
        level3Step: 'username'
      }));
    }, 1000);
  };

  const level4 = () => {
    addOutput("💻 Task: Simulate shell access.", true);
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        awaitingInput: true,
        inputPrompt: "Type a command to list files:",
        expectedAnswer: "ls",
        currentTask: "Basic shell commands"
      }));
    }, 1000);
  };

  const level5 = () => {
    addOutput("🧨 Task: Escalate privileges on Linux.", true);
    setTimeout(() => {
      addOutput("You run: sudo -l", false);
      addOutput("Result: User can run /usr/bin/vim as root.", false);
      setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          awaitingInput: true,
          inputPrompt: "Exploit via vim? (yes/no):",
          expectedAnswer: "yes",
          currentTask: "Privilege escalation via vim"
        }));
      }, 1000);
    }, 1000);
  };

  const level6 = () => {
    addOutput("🔐 Task: Set up persistence.", true);
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        awaitingInput: true,
        inputPrompt: "Add backdoor to cron? (yes/no):",
        expectedAnswer: "yes",
        currentTask: "Persistence mechanism"
      }));
    }, 1000);
  };

  const level7 = () => {
    addOutput("🧹 Task: Clear system logs.", true);
    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        awaitingInput: true,
        inputPrompt: "Command to clear auth log?",
        expectedAnswer: "echo > /var/log/auth.log",
        currentTask: "Log cleansing"
      }));
    }, 1000);
  };

  const level8 = () => {
    addOutput("🚨 Final Task: Exfiltrate sensitive file.", true);
    setTimeout(() => {
      addOutput("You found: flag.txt (contains secret)", false);
      setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          awaitingInput: true,
          inputPrompt: "How will you exfiltrate it? (email / stego / encode):",
          expectedAnswer: "stego",
          currentTask: "Data exfiltration"
        }));
      }, 1000);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const input = currentInput.toLowerCase().trim();
    const expected = gameState.expectedAnswer.toLowerCase();
    
    addOutput(`> ${currentInput}`, false);
    
    let isCorrect = false;
    let response = "";

    switch (gameState.level) {
      case 1:
        isCorrect = input === expected;
        response = isCorrect 
          ? "✅ Correct! You've mastered basic OSINT."
          : "❌ Not quite. Check the HTML source for hidden data.";
        break;
      case 2:
        isCorrect = input === expected;
        if (isCorrect) {
          response = "Scanning...\n";
          addOutput(response, false);
          setCurrentInput('');
          setGameState(prev => ({ ...prev, awaitingInput: false }));
          
          setTimeout(() => addOutput("🟢 Port 22/tcp OPEN", false), 500);
          setTimeout(() => addOutput("🟢 Port 80/tcp OPEN", false), 1000);
          setTimeout(() => addOutput("🟢 Port 443/tcp OPEN", false), 1500);
          setTimeout(() => {
            addOutput("💡 Scanning reveals open ports. These are possible attack vectors.", true);
            setTimeout(() => nextLevel(), 2000);
          }, 2000);
          return;
        } else {
          response = "❌ Incorrect command. Type the exact nmap command shown.";
        }
        break;
      case 3:
        if (gameState.level3Step === 'username') {
          // Store username and move to password input
          setGameState(prev => ({
            ...prev,
            level3Username: currentInput,
            level3Step: 'password',
            inputPrompt: "Password:",
            awaitingInput: true
          }));
          setCurrentInput('');
          return;
        } else if (gameState.level3Step === 'password') {
          // Check if either username or password contains SQL injection
          const username = gameState.level3Username.toLowerCase();
          const password = input;
          
          isCorrect = username.includes("' or '1'='1") || password.includes("' or '1'='1");
          response = isCorrect
            ? "🔓 Access Granted! SQL Injection successful.\n💡 LESSON: Always sanitize user inputs in web forms."
            : "❌ Access Denied. Try a classic SQL injection like ' OR '1'='1";
        }
        break;
      case 4:
        isCorrect = input === expected;
        response = isCorrect
          ? "flag.txt  backdoor.sh  notes.txt"
          : "❌ Incorrect. Hint: Use basic Unix commands like 'ls'.";
        break;
      case 5:
        isCorrect = input === expected;
        response = isCorrect
          ? "🔥 Root access gained via vim escape!"
          : "❌ Missed opportunity. Vim can be used to spawn root shells.";
        break;
      case 6:
        isCorrect = input === expected;
        response = isCorrect
          ? "✅ Backdoor set: @reboot /usr/bin/nc -lvp 4444 -e /bin/bash"
          : "❌ No persistence. A reboot would kick you out.";
        break;
      case 7:
        isCorrect = input.includes("echo >") || input.includes("> /var/log") || input === expected;
        response = isCorrect
          ? "🧼 Logs wiped. Tracks covered."
          : "❌ Incorrect. Use redirection or echo to clear logs.";
        break;
      case 8:
        isCorrect = input === expected;
        response = isCorrect
          ? "🕵️ Smart move! You hid the file in an image and escaped undetected."
          : "❌ Detected by IDS! Steganography would have been stealthier.";
        break;
    }

    addOutput(response, false);
    setCurrentInput('');
    
    if (isCorrect) {
      toast({
        title: "Success!",
        description: "Challenge completed successfully",
        variant: "default"
      });
      setTimeout(() => nextLevel(), 2000);
    } else {
      toast({
        title: "Level Restarting",
        description: "Incorrect answer - starting level over",
        variant: "destructive"
      });
      setGameState(prev => ({ ...prev, awaitingInput: false }));
      setTimeout(() => startLevel(gameState.level), 1500);
      return;
    }

    setGameState(prev => ({ ...prev, awaitingInput: false }));
  };

  const nextLevel = () => {
    if (gameState.level >= 8) {
      gameComplete();
    } else {
      const newLevel = gameState.level + 1;
      setGameState(prev => ({ ...prev, level: newLevel }));
      setTimeout(() => startLevel(newLevel), 1000);
    }
  };

  const gameComplete = () => {
    addOutput("", false);
    addOutput("🎉 MISSION COMPLETE!", true);
    setTimeout(() => {
      addOutput("You've simulated the entire hacking kill chain like a pro 💻🦅", true);
    }, 1000);
  };

  const resetGame = () => {
    setGameState({
      username: '',
      level: 1,
      gameStarted: false,
      showIntro: false,
      currentOutput: [],
      awaitingInput: false,
      inputPrompt: '',
      expectedAnswer: '',
      currentTask: '',
      level3Step: null,
      level3Username: ''
    });
    setCurrentInput('');
  };

  if (!gameState.gameStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="terminal-window w-full max-w-2xl">
          <CardContent className="p-8 text-center">
            <div className="scanline mb-8">
              <h1 className="text-4xl font-bold matrix-text mb-4">
                CYBER SENTINEL
              </h1>
              <p className="text-xl terminal-text mb-2">
                Ethical Hacking Simulator
              </p>
              <p className="text-accent mb-8">
                Learn. Hack. Defend.
              </p>
              <div className="mb-6">
                <Link to="/quiz">
                  <Button variant="outline" className="cyber-button">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Take Knowledge Test
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 terminal-text">
                  Enter your hacker alias:
                </label>
                <Input
                  type="text"
                  value={gameState.username}
                  onChange={(e) => setGameState(prev => ({ ...prev, username: e.target.value }))}
                  className="terminal-input text-center"
                  placeholder="elite_hacker_2024"
                  onKeyPress={(e) => e.key === 'Enter' && startGame()}
                />
              </div>
              
              <Button 
                onClick={startGame}
                className="cyber-button w-full"
                disabled={!gameState.username.trim()}
              >
                INITIALIZE HACK SEQUENCE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="terminal-window">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold matrix-text">
                  CYBER SENTINEL
                </h2>
                <p className="text-accent">
                  Agent: {gameState.username}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/quiz">
                  <Button variant="outline" size="sm" className="cyber-button">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Knowledge Test
                  </Button>
                </Link>
                <div className="text-right">
                  <div className="level-indicator text-lg">
                    LEVEL {gameState.level}/8
                  </div>
                  {gameState.currentTask && (
                    <p className="text-sm text-muted-foreground">
                      {gameState.currentTask}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="terminal-output bg-input/50 p-4 rounded min-h-96 max-h-96 overflow-y-auto mb-4 font-mono text-sm">
              {gameState.currentOutput.map((line, index) => (
                <div 
                  key={index} 
                  className={`mb-1 ${
                    line.startsWith('✅') || line.startsWith('🔓') || line.startsWith('🔥') 
                      ? 'success-text' 
                      : line.startsWith('❌') 
                      ? 'error-text'
                      : line.startsWith('🌐') || line.startsWith('LEVEL')
                      ? 'level-indicator'
                      : 'terminal-text'
                  }`}
                >
                  {line}
                  {index === gameState.currentOutput.length - 1 && isTyping && (
                    <span className="terminal-cursor"></span>
                  )}
                </div>
              ))}
            </div>

            {gameState.awaitingInput && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 terminal-text">
                    {gameState.inputPrompt}
                  </label>
                  <Input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    className="terminal-input"
                    placeholder="Enter your response..."
                    autoFocus
                  />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="cyber-button">
                    EXECUTE
                  </Button>
                  <Button 
                    type="button" 
                    onClick={resetGame}
                    variant="outline"
                    className="cyber-button"
                  >
                    RESTART
                  </Button>
                </div>
              </form>
            )}

            {gameState.level > 8 && (
              <div className="text-center">
                <Button 
                  onClick={resetGame}
                  className="cyber-button"
                >
                  START NEW MISSION
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CyberSentinel;