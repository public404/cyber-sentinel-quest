export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Level {
  name: string;
  questions: Question[];
}

export interface Role {
  name: string;
  levels: { [levelName: string]: Question[] };
}

// Game settings
export const PASSING_SCORE = 7; // Minimum correct answers to pass a level

// Utility function to shuffle array
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const roles: { [roleName: string]: { [levelName: string]: Question[] } } = {
  "Security Analyst / Cybersecurity Analyst": {
    "Level 1": [
      {"question": "Which protocol is used to securely browse websites?", "options": ["a) HTTP", "b) FTP", "c) HTTPS", "d) SMTP"], "answer": "c"},
      {"question": "What port does SSH run on by default?", "options": ["a) 21", "b) 22", "c) 23", "d) 80"], "answer": "b"},
      {"question": "Which file stores user account information in Linux?", "options": ["a) /etc/shadow", "b) /etc/passwd", "c) /etc/group", "d) /var/log/auth.log"], "answer": "b"},
      {"question": "What does a firewall primarily do?", "options": ["a) Detect viruses", "b) Block spam", "c) Control network traffic", "d) Encrypt emails"], "answer": "c"},
      {"question": "What does 2FA stand for?", "options": ["a) Two-Firewall Access", "b) Two-Factor Authentication", "c) Fast Forward Authentication", "d) Firewall Filter Alert"], "answer": "b"},
      {"question": "Which port is used for DNS?", "options": ["a) 443", "b) 25", "c) 53", "d) 110"], "answer": "c"},
      {"question": "What is phishing?", "options": ["a) Firewall attack", "b) Network scan", "c) Tricking users to reveal info", "d) Hash cracking"], "answer": "c"},
      {"question": "Which layer of OSI model does IP operate at?", "options": ["a) Data Link", "b) Network", "c) Session", "d) Application"], "answer": "b"},
      {"question": "Which protocol is used to send email?", "options": ["a) IMAP", "b) SMTP", "c) FTP", "d) POP3"], "answer": "b"},
      {"question": "Which command shows active network connections in Linux?", "options": ["a) netstat", "b) top", "c) whoami", "d) df"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "What is the use of 'chmod' command?", "options": ["a) Change password", "b) Modify file permissions", "c) Disk usage", "d) Show processes"], "answer": "b"},
      {"question": "What is the purpose of Nmap?", "options": ["a) Monitor CPU", "b) File encryption", "c) Network scanning", "d) Authentication"], "answer": "c"},
      {"question": "Which command lists logged-in users?", "options": ["a) who", "b) sudo", "c) usermod", "d) passwd"], "answer": "a"},
      {"question": "Which log shows failed logins in Linux?", "options": ["a) /var/log/messages", "b) /etc/shadow", "c) /var/log/auth.log", "d) /boot/grub.cfg"], "answer": "c"},
      {"question": "Which tool is used for packet capture?", "options": ["a) Metasploit", "b) Wireshark", "c) Nmap", "d) Nikto"], "answer": "b"},
      {"question": "Which port is used by FTP?", "options": ["a) 80", "b) 443", "c) 21", "d) 22"], "answer": "c"},
      {"question": "Which command checks disk usage?", "options": ["a) whoami", "b) df -h", "c) chmod", "d) netstat"], "answer": "b"},
      {"question": "What is the function of IDS?", "options": ["a) Encryption", "b) Detect intrusion", "c) Block spam", "d) Update systems"], "answer": "b"},
      {"question": "What does CVE stand for?", "options": ["a) Cybersecurity Vulnerability Engine", "b) Common Vulnerabilities and Exposures", "c) Core Virus Evaluator", "d) Critical Vulnerability Entry"], "answer": "b"},
      {"question": "Which port does HTTP run on?", "options": ["a) 443", "b) 22", "c) 80", "d) 25"], "answer": "c"}
    ],
    "Level 3": [
      {"question": "Which type of attack manipulates users to give up confidential information?", "options": ["a) Phishing", "b) SQL Injection", "c) MITM", "d) XSS"], "answer": "a"},
      {"question": "What is the first step in incident response?", "options": ["a) Containment", "b) Identification", "c) Eradication", "d) Recovery"], "answer": "b"},
      {"question": "Which tool is best for log analysis?", "options": ["a) Metasploit", "b) Burp Suite", "c) Splunk", "d) Wireshark"], "answer": "c"},
      {"question": "Question 4 for Security Analyst / Cybersecurity Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Security Analyst / Cybersecurity Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Security Analyst / Cybersecurity Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Security Analyst / Cybersecurity Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Security Analyst / Cybersecurity Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Security Analyst / Cybersecurity Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Security Analyst / Cybersecurity Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Security Analyst / Cybersecurity Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Security Analyst / Cybersecurity Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "Information Security Associate": {
    "Level 1": [
      {"question": "Question 1 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Information Security Associate - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Information Security Associate - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Information Security Associate - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Information Security Associate - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Information Security Associate - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "SOC Analyst (Level 1 or 2) – Security Operations Center": {
    "Level 1": [
      {"question": "What is a SIEM used for?", "options": ["a) Encrypt files", "b) Patch vulnerabilities", "c) Aggregate and analyze logs", "d) Perform backups"], "answer": "c"},
      {"question": "Which of the following is a SIEM tool?", "options": ["a) Nmap", "b) Splunk", "c) Wireshark", "d) Nessus"], "answer": "b"},
      {"question": "You see a brute force alert from the SIEM. What's your first step?", "options": ["a) Block all traffic", "b) Escalate to legal", "c) Investigate login attempts", "d) Restart the SIEM"], "answer": "c"},
      {"question": "What is a 'correlation rule' in SIEM?", "options": ["a) Alert threshold", "b) License configuration", "c) Linking multiple log events to detect patterns", "d) Backup setting"], "answer": "c"},
      {"question": "Which log would best help investigate failed logins on a Linux system?", "options": ["a) /var/log/syslog", "b) /etc/passwd", "c) /var/log/auth.log", "d) /boot/grub.cfg"], "answer": "c"},
      {"question": "A spike in outbound DNS requests could indicate:", "options": ["a) DDoS", "b) Data exfiltration", "c) Network scan", "d) Misconfigured firewall"], "answer": "b"},
      {"question": "What does a 'false positive' alert mean?", "options": ["a) Alert that was missed", "b) Alert that was valid", "c) Alert triggered incorrectly", "d) Malicious behavior"], "answer": "c"},
      {"question": "Which protocol's logs are crucial for detecting phishing emails?", "options": ["a) FTP", "b) SMTP", "c) SNMP", "d) ICMP"], "answer": "b"},
      {"question": "Which of the following best reduces SIEM false positives?", "options": ["a) Disable alerts", "b) Use default rules", "c) Fine-tune correlation rules", "d) Reduce log sources"], "answer": "c"},
      {"question": "What action should follow a confirmed SIEM alert of malware activity?", "options": ["a) Alert HR", "b) Escalate and isolate affected host", "c) Ignore and wait", "d) Uninstall SIEM"], "answer": "b"}
    ],
    "Level 2": [
      {"question": "Question 1 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for SOC Analyst (Level 1 or 2) – Security Operations Center - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "IT Security Administrator": {
    "Level 1": [
      {"question": "What is system hardening?", "options": ["a) Installing more RAM", "b) Reducing attack surface", "c) Upgrading hardware", "d) Adding more users"], "answer": "b"},
      {"question": "Which Windows tool manages local security policies?", "options": ["a) Group Policy", "b) Task Manager", "c) Control Panel", "d) Device Manager"], "answer": "a"},
      {"question": "What is the principle of least privilege?", "options": ["a) Give users maximum access", "b) Give users minimum required access", "c) Block all access", "d) Share all passwords"], "answer": "b"},
      {"question": "Question 4 for IT Security Administrator - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for IT Security Administrator - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for IT Security Administrator - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for IT Security Administrator - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for IT Security Administrator - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for IT Security Administrator - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for IT Security Administrator - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for IT Security Administrator - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for IT Security Administrator - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for IT Security Administrator - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for IT Security Administrator - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "Network Security Technician": {
    "Level 1": [
      {"question": "What is a VLAN?", "options": ["a) Virtual Local Area Network", "b) Very Large Area Network", "c) Virtual Link Access Node", "d) Verified Local Access Network"], "answer": "a"},
      {"question": "Which device operates at Layer 3 of the OSI model?", "options": ["a) Switch", "b) Hub", "c) Router", "d) Bridge"], "answer": "c"},
      {"question": "What is the purpose of NAT?", "options": ["a) Speed up network", "b) Translate private to public IPs", "c) Block viruses", "d) Encrypt data"], "answer": "b"},
      {"question": "Question 4 for Network Security Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Network Security Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Network Security Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Network Security Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Network Security Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Network Security Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Network Security Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Network Security Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Network Security Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Network Security Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Network Security Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "Incident Response Technician": {
    "Level 1": [
      {"question": "What are the phases of incident response (NIST)?", "options": ["a) Prepare, Detect, Analyze, Contain", "b) Preparation, Detection/Analysis, Containment/Eradication/Recovery, Post-incident", "c) Plan, Do, Check, Act", "d) Identify, Protect, Detect, Respond"], "answer": "b"},
      {"question": "What is the purpose of forensic imaging?", "options": ["a) Speed up computers", "b) Create exact copy for analysis", "c) Install software", "d) Delete evidence"], "answer": "b"},
      {"question": "When should you isolate a compromised system?", "options": ["a) Never", "b) After investigation", "c) Immediately after detection", "d) Only if asked"], "answer": "c"},
      {"question": "Question 4 for Incident Response Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Incident Response Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Incident Response Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Incident Response Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Incident Response Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Incident Response Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Incident Response Technician - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Incident Response Technician - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Incident Response Technician - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Incident Response Technician - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Incident Response Technician - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "Junior Penetration Tester": {
    "Level 1": [
      {"question": "What is the difference between white box and black box testing?", "options": ["a) Color of the box", "b) Knowledge of the system", "c) Type of vulnerability", "d) Testing duration"], "answer": "b"},
      {"question": "Which phase comes first in penetration testing?", "options": ["a) Exploitation", "b) Reconnaissance", "c) Post-exploitation", "d) Reporting"], "answer": "b"},
      {"question": "What is social engineering in the context of pen testing?", "options": ["a) Network scanning", "b) Manipulating people for information", "c) Code analysis", "d) System hardening"], "answer": "b"},
      {"question": "Question 4 for Junior Penetration Tester - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Junior Penetration Tester - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Junior Penetration Tester - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Junior Penetration Tester - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Junior Penetration Tester - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Junior Penetration Tester - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Junior Penetration Tester - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Junior Penetration Tester - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Junior Penetration Tester - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Junior Penetration Tester - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Junior Penetration Tester - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "Threat Intelligence Analyst (Entry-Level)": {
    "Level 1": [
      {"question": "What are IOCs?", "options": ["a) Internet Operation Centers", "b) Indicators of Compromise", "c) Information Operation Commands", "d) Internal Operational Controls"], "answer": "b"},
      {"question": "Which is a common threat intelligence framework?", "options": ["a) MITRE ATT&CK", "b) ISO 27001", "c) NIST Framework", "d) COBIT"], "answer": "a"},
      {"question": "What is the cyber kill chain?", "options": ["a) A weapon", "b) Model of attack progression", "c) Network topology", "d) Encryption method"], "answer": "b"},
      {"question": "Question 4 for Threat Intelligence Analyst (Entry-Level) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Threat Intelligence Analyst (Entry-Level) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Threat Intelligence Analyst (Entry-Level) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Threat Intelligence Analyst (Entry-Level) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Threat Intelligence Analyst (Entry-Level) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Threat Intelligence Analyst (Entry-Level) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Threat Intelligence Analyst (Entry-Level) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Threat Intelligence Analyst (Entry-Level) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Threat Intelligence Analyst (Entry-Level) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Threat Intelligence Analyst (Entry-Level) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Threat Intelligence Analyst (Entry-Level) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "Risk & Compliance Analyst (GRC)": {
    "Level 1": [
      {"question": "What does GRC stand for?", "options": ["a) General Risk Control", "b) Governance, Risk, and Compliance", "c) Global Regulatory Compliance", "d) Government Risk Committee"], "answer": "b"},
      {"question": "What is a risk assessment?", "options": ["a) Buying insurance", "b) Identifying and evaluating risks", "c) Installing antivirus", "d) Training employees"], "answer": "b"},
      {"question": "Which framework is commonly used for IT governance?", "options": ["a) COBIT", "b) NMAP", "c) TCP/IP", "d) SQL"], "answer": "a"},
      {"question": "Question 4 for Risk & Compliance Analyst (GRC) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Risk & Compliance Analyst (GRC) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Risk & Compliance Analyst (GRC) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Risk & Compliance Analyst (GRC) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Risk & Compliance Analyst (GRC) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Risk & Compliance Analyst (GRC) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Risk & Compliance Analyst (GRC) - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Risk & Compliance Analyst (GRC) - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Risk & Compliance Analyst (GRC) - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Risk & Compliance Analyst (GRC) - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Risk & Compliance Analyst (GRC) - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  },
  "Vulnerability Management Analyst": {
    "Level 1": [
      {"question": "What is a vulnerability scan?", "options": ["a) Checking for malware", "b) Automated assessment for security weaknesses", "c) Monitoring network traffic", "d) Backing up data"], "answer": "b"},
      {"question": "What does CVSS stand for?", "options": ["a) Common Vulnerability Scoring System", "b) Critical Virus Security Scanner", "c) Cyber Vulnerability Support System", "d) Computer Virus Scanning Service"], "answer": "a"},
      {"question": "What is patch management?", "options": ["a) Creating new software", "b) Process of updating software to fix vulnerabilities", "c) Removing old files", "d) Installing antivirus"], "answer": "b"},
      {"question": "Question 4 for Vulnerability Management Analyst - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Vulnerability Management Analyst - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Vulnerability Management Analyst - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Vulnerability Management Analyst - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Vulnerability Management Analyst - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Vulnerability Management Analyst - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Vulnerability Management Analyst - Level 1", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 2": [
      {"question": "Question 1 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Vulnerability Management Analyst - Level 2", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 3": [
      {"question": "Question 1 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Vulnerability Management Analyst - Level 3", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 4": [
      {"question": "Question 1 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Vulnerability Management Analyst - Level 4", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ],
    "Level 5": [
      {"question": "Question 1 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 2 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 3 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 4 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 5 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 6 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 7 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 8 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 9 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"},
      {"question": "Question 10 for Vulnerability Management Analyst - Level 5", "options": ["a) Option A", "b) Option B", "c) Option C", "d) Option D"], "answer": "a"}
    ]
  }
};

export const getRoleNames = (): string[] => {
  return Object.keys(roles);
};

export const getLevelsForRole = (roleName: string): string[] => {
  return Object.keys(roles[roleName] || {});
};

export const getQuestionsForRoleLevel = (roleName: string, levelName: string): Question[] => {
  return roles[roleName]?.[levelName] || [];
};