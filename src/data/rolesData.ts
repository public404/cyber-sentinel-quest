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

export const roles: { [roleName: string]: { [levelName: string]: Question[] } } = {
  "Security Analyst / Cybersecurity Analyst": {
    "Level 1 – Fundamentals": [
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
    "Level 2 – Intermediate Tools": [
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
    "Level 3 – Interview Questions": [
      {"question": "Which type of attack manipulates users to give up confidential information?", "options": ["a) Phishing", "b) SQL Injection", "c) MITM", "d) XSS"], "answer": "a"},
      {"question": "What is the first step in incident response?", "options": ["a) Containment", "b) Identification", "c) Eradication", "d) Recovery"], "answer": "b"},
      {"question": "Which tool is best for log analysis?", "options": ["a) Metasploit", "b) Burp Suite", "c) Splunk", "d) Wireshark"], "answer": "c"}
    ]
  },
  "SOC Analyst": {
    "Level 1 – SIEM Basics": [
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
    "Level 2 – Alert Analysis": [],
    "Level 3 – Incident Triage": [],
    "Level 4 – Threat Hunting": [],
    "Level 5 – Reporting & Escalation": []
  },
  "IT Security Administrator": {
    "Level 1 – System Hardening": [
      {"question": "What is system hardening?", "options": ["a) Installing more RAM", "b) Reducing attack surface", "c) Upgrading hardware", "d) Adding more users"], "answer": "b"},
      {"question": "Which Windows tool manages local security policies?", "options": ["a) Group Policy", "b) Task Manager", "c) Control Panel", "d) Device Manager"], "answer": "a"},
      {"question": "What is the principle of least privilege?", "options": ["a) Give users maximum access", "b) Give users minimum required access", "c) Block all access", "d) Share all passwords"], "answer": "b"}
    ]
  },
  "Network Security Technician": {
    "Level 1 – Network Fundamentals": [
      {"question": "What is a VLAN?", "options": ["a) Virtual Local Area Network", "b) Very Large Area Network", "c) Virtual Link Access Node", "d) Verified Local Access Network"], "answer": "a"},
      {"question": "Which device operates at Layer 3 of the OSI model?", "options": ["a) Switch", "b) Hub", "c) Router", "d) Bridge"], "answer": "c"},
      {"question": "What is the purpose of NAT?", "options": ["a) Speed up network", "b) Translate private to public IPs", "c) Block viruses", "d) Encrypt data"], "answer": "b"}
    ]
  },
  "Incident Response Technician": {
    "Level 1 – IR Fundamentals": [
      {"question": "What are the phases of incident response (NIST)?", "options": ["a) Prepare, Detect, Analyze, Contain", "b) Preparation, Detection/Analysis, Containment/Eradication/Recovery, Post-incident", "c) Plan, Do, Check, Act", "d) Identify, Protect, Detect, Respond"], "answer": "b"},
      {"question": "What is the purpose of forensic imaging?", "options": ["a) Speed up computers", "b) Create exact copy for analysis", "c) Install software", "d) Delete evidence"], "answer": "b"},
      {"question": "When should you isolate a compromised system?", "options": ["a) Never", "b) After investigation", "c) Immediately after detection", "d) Only if asked"], "answer": "c"}
    ]
  },
  "Junior Penetration Tester": {
    "Level 1 – Pen Testing Basics": [
      {"question": "What is the difference between white box and black box testing?", "options": ["a) Color of the box", "b) Knowledge of the system", "c) Type of vulnerability", "d) Testing duration"], "answer": "b"},
      {"question": "Which phase comes first in penetration testing?", "options": ["a) Exploitation", "b) Reconnaissance", "c) Post-exploitation", "d) Reporting"], "answer": "b"},
      {"question": "What is social engineering in the context of pen testing?", "options": ["a) Network scanning", "b) Manipulating people for information", "c) Code analysis", "d) System hardening"], "answer": "b"}
    ]
  },
  "Threat Intelligence Analyst (Entry-Level)": {
    "Level 1 – Threat Intel Basics": [
      {"question": "What are IOCs?", "options": ["a) Internet Operation Centers", "b) Indicators of Compromise", "c) Information Operation Commands", "d) Internal Operational Controls"], "answer": "b"},
      {"question": "Which is a common threat intelligence framework?", "options": ["a) MITRE ATT&CK", "b) ISO 27001", "c) NIST Framework", "d) COBIT"], "answer": "a"},
      {"question": "What is the cyber kill chain?", "options": ["a) A weapon", "b) Model of attack progression", "c) Network topology", "d) Encryption method"], "answer": "b"}
    ]
  },
  "Risk & Compliance Analyst (GRC)": {
    "Level 1 – GRC Fundamentals": [
      {"question": "What does GRC stand for?", "options": ["a) General Risk Control", "b) Governance, Risk, and Compliance", "c) Global Regulatory Compliance", "d) Government Risk Committee"], "answer": "b"},
      {"question": "What is a risk assessment?", "options": ["a) Buying insurance", "b) Identifying and evaluating risks", "c) Installing antivirus", "d) Training employees"], "answer": "b"},
      {"question": "Which framework is commonly used for IT governance?", "options": ["a) COBIT", "b) NMAP", "c) TCP/IP", "d) SQL"], "answer": "a"}
    ]
  },
  "Vulnerability Management Analyst": {
    "Level 1 – Vuln Management Basics": [
      {"question": "What is a vulnerability scan?", "options": ["a) Checking for malware", "b) Automated assessment for security weaknesses", "c) Monitoring network traffic", "d) Backing up data"], "answer": "b"},
      {"question": "What does CVSS stand for?", "options": ["a) Common Vulnerability Scoring System", "b) Critical Virus Security Scanner", "c) Cyber Vulnerability Support System", "d) Computer Virus Scanning Service"], "answer": "a"},
      {"question": "What is patch management?", "options": ["a) Creating new software", "b) Process of updating software to fix vulnerabilities", "c) Removing old files", "d) Installing antivirus"], "answer": "b"}
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