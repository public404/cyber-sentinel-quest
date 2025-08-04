import { Level } from '@/types/quiz';

export const levels: Level[] = [
  {
    name: "Level 1 – Fundamentals",
    questions: [
      {
        question: "Which protocol is used to securely browse websites?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: "c"
      },
      {
        question: "What port does SSH run on by default?",
        options: ["21", "22", "23", "80"],
        answer: "b"
      },
      {
        question: "Which file stores user account information in Linux?",
        options: ["/etc/shadow", "/etc/passwd", "/etc/group", "/var/log/auth.log"],
        answer: "b"
      },
      {
        question: "What does a firewall primarily do?",
        options: ["Detect viruses", "Block spam", "Control network traffic", "Encrypt emails"],
        answer: "c"
      },
      {
        question: "What does 2FA stand for?",
        options: ["Two-Firewall Access", "Two-Factor Authentication", "Fast Forward Authentication", "Firewall Filter Alert"],
        answer: "b"
      },
      {
        question: "Which port is used for DNS?",
        options: ["443", "25", "53", "110"],
        answer: "c"
      },
      {
        question: "What is phishing?",
        options: ["Firewall attack", "Network scan", "Tricking users to reveal info", "Hash cracking"],
        answer: "c"
      },
      {
        question: "Which layer of OSI model does IP operate at?",
        options: ["Data Link", "Network", "Session", "Application"],
        answer: "b"
      },
      {
        question: "Which protocol is used to send email?",
        options: ["IMAP", "SMTP", "FTP", "POP3"],
        answer: "b"
      },
      {
        question: "Which command shows active network connections in Linux?",
        options: ["netstat", "top", "whoami", "df"],
        answer: "a"
      }
    ]
  },
  {
    name: "Level 2 – Intermediate Tools",
    questions: [
      {
        question: "What is the use of 'chmod' command?",
        options: ["Change password", "Modify file permissions", "Disk usage", "Show processes"],
        answer: "b"
      },
      {
        question: "What is the purpose of Nmap?",
        options: ["Monitor CPU", "File encryption", "Network scanning", "Authentication"],
        answer: "c"
      },
      {
        question: "Which command lists logged-in users?",
        options: ["who", "sudo", "usermod", "passwd"],
        answer: "a"
      },
      {
        question: "Which log shows failed logins in Linux?",
        options: ["/var/log/messages", "/etc/shadow", "/var/log/auth.log", "/boot/grub.cfg"],
        answer: "c"
      },
      {
        question: "Which tool is used for packet capture?",
        options: ["Metasploit", "Wireshark", "Nmap", "Nikto"],
        answer: "b"
      },
      {
        question: "Which port is used by FTP?",
        options: ["80", "443", "21", "22"],
        answer: "c"
      },
      {
        question: "Which command checks disk usage?",
        options: ["whoami", "df -h", "chmod", "netstat"],
        answer: "b"
      },
      {
        question: "What is the function of IDS?",
        options: ["Encryption", "Detect intrusion", "Block spam", "Update systems"],
        answer: "b"
      },
      {
        question: "What does CVE stand for?",
        options: ["Cybersecurity Vulnerability Engine", "Common Vulnerabilities and Exposures", "Core Virus Evaluator", "Critical Vulnerability Entry"],
        answer: "b"
      },
      {
        question: "Which port does HTTP run on?",
        options: ["443", "22", "80", "25"],
        answer: "c"
      }
    ]
  },
  {
    name: "Level 3 – Threat Detection",
    questions: [
      {
        question: "What kind of attack is a SYN flood?",
        options: ["Phishing", "DDoS", "Keylogger", "SQL Injection"],
        answer: "b"
      },
      {
        question: "Which tool is best for analyzing malware behavior?",
        options: ["Nmap", "Netcat", "Cuckoo Sandbox", "Nikto"],
        answer: "c"
      },
      {
        question: "What log file would show SSH access attempts?",
        options: ["/var/log/secure", "/etc/passwd", "/etc/shadow", "/var/log/syslog"],
        answer: "a"
      },
      {
        question: "What does a reverse shell do?",
        options: ["Encrypts files", "Creates fake processes", "Gives remote control to attacker", "Disables firewall"],
        answer: "c"
      },
      {
        question: "Which tool is used for brute-forcing passwords?",
        options: ["Hydra", "Nmap", "Netcat", "Ping"],
        answer: "a"
      },
      {
        question: "What is Base64 used for in attacks?",
        options: ["Encryption", "Obfuscation", "Compression", "Protocol"],
        answer: "b"
      },
      {
        question: "Which command decodes base64 in Linux?",
        options: ["decode64", "openssl", "base64 -d", "hexedit"],
        answer: "c"
      },
      {
        question: "How do attackers escalate privilege in Linux?",
        options: ["chmod", "sudo su", "ls -al", "ssh user@host"],
        answer: "b"
      },
      {
        question: "What is an IOC?",
        options: ["IP over connection", "Indicator of Compromise", "Internet Object Category", "Invalid Operational Control"],
        answer: "b"
      },
      {
        question: "What command shows listening ports in Linux?",
        options: ["lsports", "netstat -tuln", "tcpdump", "arp"],
        answer: "b"
      }
    ]
  },
  {
    name: "Level 4 – Incident Response",
    questions: [
      {
        question: "What is the first phase in incident response?",
        options: ["Eradication", "Containment", "Preparation", "Recovery"],
        answer: "c"
      },
      {
        question: "Which tool captures memory dumps?",
        options: ["Volatility", "Wireshark", "Nikto", "John the Ripper"],
        answer: "a"
      },
      {
        question: "What should be done immediately after identifying malware?",
        options: ["Delete all files", "Reboot system", "Isolate the system", "Notify HR"],
        answer: "c"
      },
      {
        question: "Which log contains kernel messages in Linux?",
        options: ["/var/log/kern.log", "/etc/sysctl.conf", "/boot/grub.cfg", "/proc/kcore"],
        answer: "a"
      },
      {
        question: "What is chain of custody in forensics?",
        options: ["Arrest record", "File transfer logs", "Evidence handling trail", "Jail sentence"],
        answer: "c"
      },
      {
        question: "What is a honeypot used for?",
        options: ["Real traffic analysis", "Log parsing", "Lure attackers", "Patch systems"],
        answer: "c"
      },
      {
        question: "Which format is used for forensic images?",
        options: [".zip", ".img", ".tar", ".exe"],
        answer: "b"
      },
      {
        question: "What Linux command lists all cron jobs?",
        options: ["crontab -l", "cronjobs", "jobs -a", "schedule list"],
        answer: "a"
      },
      {
        question: "Where are bash history logs stored?",
        options: ["/etc/bash.conf", "/var/log/bash", "~/.bash_history", "/home/.log"],
        answer: "c"
      },
      {
        question: "What does SIEM stand for?",
        options: ["System Internet Event Monitor", "Security Information and Event Management", "Secure Internet Event Module", "Serial Information Extract Manager"],
        answer: "b"
      }
    ]
  },
  {
    name: "Level 5 – Advanced Analysis & Threat Hunting",
    questions: [
      {
        question: "Which protocol does DNS primarily use?",
        options: ["TCP", "UDP", "ICMP", "FTP"],
        answer: "b"
      },
      {
        question: "What is lateral movement?",
        options: ["Movement of packets", "Accessing unrelated accounts or systems", "Server rebooting", "Downloading tools"],
        answer: "b"
      },
      {
        question: "Which MITRE ATT&CK tactic covers credential dumping?",
        options: ["Initial Access", "Execution", "Credential Access", "Collection"],
        answer: "c"
      },
      {
        question: "What tool can analyze memory for malicious activity?",
        options: ["Volatility", "Nmap", "SSH", "Telnet"],
        answer: "a"
      },
      {
        question: "Which of the following is a persistence mechanism?",
        options: ["netcat", "cronjob", "ping", "top"],
        answer: "b"
      },
      {
        question: "What is a common indicator of data exfiltration?",
        options: ["Rebooting", "Sudden bandwidth spike", "Cron update", "High CPU"],
        answer: "b"
      },
      {
        question: "Which file often contains startup persistence logic?",
        options: ["~/.bashrc", "/tmp", "/etc/shadow", "/dev/null"],
        answer: "a"
      },
      {
        question: "Which port is often used in reverse shells?",
        options: ["22", "80", "4444", "53"],
        answer: "c"
      },
      {
        question: "What is the best method to detect zero-day malware?",
        options: ["Signature-based AV", "Sandboxing", "URL filter", "Port blocking"],
        answer: "b"
      },
      {
        question: "Which Linux command finds all SUID files?",
        options: ["find / -perm -4000", "suid -a", "lsuid", "chkrootkit"],
        answer: "a"
      }
    ]
  }
];