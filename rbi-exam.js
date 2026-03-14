"use strict";

/* ══════════════════════════════════════
   100 QUESTION BANK
══════════════════════════════════════ */
const QB = [
  /* ── EASY 25 ── */
  {
    q: "What does 'phishing' mean in cyber security?",
    a: "A technique to catch computer viruses",
    b: "A fraudulent attempt to steal sensitive information through deceptive emails or websites",
    c: "A method of encrypting banking data",
    d: "A secure file transfer protocol",
    ans: "b",
    diff: "easy",
    topic: "Phishing",
    expl: "Phishing uses deceptive communications to trick victims into revealing credentials or clicking malicious links.",
  },
  {
    q: "Which of the following is a strong password?",
    a: "password123",
    b: "RaJesh@1985",
    c: "Tr#9xL!mK2@qZ",
    d: "Bank2024",
    ans: "c",
    diff: "easy",
    topic: "Password Security",
    expl: "Strong passwords use uppercase, lowercase, numbers, and symbols with at least 12 characters.",
  },
  {
    q: "What is Multi-Factor Authentication (MFA)?",
    a: "Using multiple passwords for one account",
    b: "A process requiring two or more verification factors to confirm identity",
    c: "Encrypting data in multiple layers",
    d: "Logging into multiple systems at once",
    ans: "b",
    diff: "easy",
    topic: "MFA",
    expl: "MFA adds a security layer beyond passwords — typically a one-time code sent to a registered device.",
  },
  {
    q: "A bank employee receives an unexpected email with an attachment from an unknown sender. What is the safest action?",
    a: "Open the attachment immediately",
    b: "Forward it to colleagues",
    c: "Do not open — report to IT security",
    d: "Reply asking who sent it",
    ans: "c",
    diff: "easy",
    topic: "Email Security",
    expl: "Unexpected attachments from unknown senders are a common malware delivery method. Always report to IT security.",
  },
  {
    q: "What does 'malware' stand for?",
    a: "Managed software",
    b: "Malicious software",
    c: "Marketing software",
    d: "Manual software",
    ans: "b",
    diff: "easy",
    topic: "Malware",
    expl: "Malware is any software intentionally designed to cause damage — including viruses, trojans, ransomware, and spyware.",
  },
  {
    q: "What is the safest way to access the bank's online portal?",
    a: "Click a link from any email",
    b: "Type the official URL directly in the browser",
    c: "Use a link shared on WhatsApp",
    d: "Access via any public computer",
    ans: "b",
    diff: "easy",
    topic: "Secure Banking Systems",
    expl: "Always type official bank URLs directly. Phishing sites use lookalike URLs in emails and messages.",
  },
  {
    q: "What is 'smishing'?",
    a: "Phishing attacks conducted via SMS messages",
    b: "A technique to crack passwords",
    c: "Email-based phishing",
    d: "An anti-virus method",
    ans: "a",
    diff: "easy",
    topic: "Smishing",
    expl: "Smishing uses fraudulent SMS messages to deceive recipients into revealing personal or banking information.",
  },
  {
    q: "What is ransomware?",
    a: "Software that speeds up computers",
    b: "Malware that encrypts files and demands payment for the decryption key",
    c: "A banking security tool",
    d: "A type of antivirus",
    ans: "b",
    diff: "easy",
    topic: "Ransomware",
    expl: "Ransomware is a critical threat to banks. Regular backups and patch management are the primary defences.",
  },
  {
    q: "What is the primary purpose of a firewall?",
    a: "Speed up internet connection",
    b: "Monitor and control network traffic based on security rules",
    c: "Store passwords securely",
    d: "Back up important data",
    ans: "b",
    diff: "easy",
    topic: "Network Security",
    expl: "Firewalls are the first line of network defence, blocking unauthorised access while permitting legitimate traffic.",
  },
  {
    q: "What does OTP stand for in banking?",
    a: "Online Transfer Protocol",
    b: "One-Time Password",
    c: "Official Transaction Pin",
    d: "Outbound Token Protocol",
    ans: "b",
    diff: "easy",
    topic: "MFA",
    expl: "OTPs are time-limited codes sent to registered devices. They must never be shared with anyone.",
  },
  {
    q: "A colleague calls claiming to be from IT and asks for your system password. What should you do?",
    a: "Give the password as it is a colleague",
    b: "Give only part of the password",
    c: "Refuse and report the incident to IT security immediately",
    d: "Email the password to be safe",
    ans: "c",
    diff: "easy",
    topic: "Social Engineering",
    expl: "Legitimate IT teams never ask for passwords. This is a vishing (voice phishing) social engineering attack.",
  },
  {
    q: "What is 'vishing'?",
    a: "Voice-based phishing attacks using phone calls",
    b: "A visual phishing method",
    c: "Video-based hacking",
    d: "An email filtering technique",
    ans: "a",
    diff: "easy",
    topic: "Vishing",
    expl: "Vishing fraudsters impersonate bank officials or IT support over phone calls to extract sensitive information.",
  },
  {
    q: "Which of the following is NOT a good password practice?",
    a: "Using different passwords for each system",
    b: "Mixing letters, numbers, and symbols",
    c: "Using your employee ID as your password",
    d: "Changing passwords regularly",
    ans: "c",
    diff: "easy",
    topic: "Password Security",
    expl: "Employee IDs are easily guessable. Passwords must be random and not based on identifiable information.",
  },
  {
    q: "What should you do if you suspect your banking system has been compromised?",
    a: "Continue working normally",
    b: "Immediately report to your IT security team or CISO",
    c: "Restart the computer and continue",
    d: "Tell your manager at the end of the day",
    ans: "b",
    diff: "easy",
    topic: "Incident Reporting",
    expl: "RBI mandates prompt reporting of cyber incidents. Delay can worsen the damage significantly.",
  },
  {
    q: "What is social engineering in cyber security?",
    a: "Building social media websites",
    b: "Psychologically manipulating people into revealing confidential information",
    c: "Engineering social networks for banks",
    d: "A firewall configuration technique",
    ans: "b",
    diff: "easy",
    topic: "Social Engineering",
    expl: "Social engineering exploits human psychology rather than technical vulnerabilities. Awareness training is the primary defence.",
  },
  {
    q: "What is the safest ATM practice?",
    a: "Share your PIN with trusted colleagues",
    b: "Use any ATM regardless of its condition",
    c: "Shield the keypad when entering your PIN and use bank-operated ATMs in well-lit areas",
    d: "Note your PIN in your phone contacts",
    ans: "c",
    diff: "easy",
    topic: "ATM Security",
    expl: "PIN security is critical at ATMs. Skimming devices and shoulder surfing are common threats.",
  },
  {
    q: "What does data encryption protect?",
    a: "It speeds up data transfer",
    b: "It converts data into unreadable format to protect it from unauthorised access",
    c: "It deletes old data automatically",
    d: "It backs up data to the cloud",
    ans: "b",
    diff: "easy",
    topic: "Information Security",
    expl: "Encryption ensures data confidentiality. Even if intercepted, encrypted data cannot be read without the key.",
  },
  {
    q: "What is the Principle of Least Privilege in banking IT?",
    a: "Giving all employees access to all systems",
    b: "Granting employees only the minimum access needed to perform their job",
    c: "Allowing managers more internet privileges",
    d: "Restricting only admin accounts",
    ans: "b",
    diff: "easy",
    topic: "Information Security",
    expl: "Least privilege limits damage from insider threats and compromised accounts by restricting unnecessary access.",
  },
  {
    q: "Why should you lock your computer when leaving your workstation?",
    a: "To save electricity",
    b: "To prevent unauthorised access to banking systems and customer data",
    c: "It is not necessary if you are away briefly",
    d: "To improve computer performance",
    ans: "b",
    diff: "easy",
    topic: "Employee Security Practices",
    expl: "Unattended unlocked workstations are a significant insider threat vector. Always lock your screen when stepping away.",
  },
  {
    q: "What is two-factor authentication?",
    a: "Having two different passwords",
    b: "A security process requiring two separate verification methods",
    c: "Logging in twice to a system",
    d: "Using two different browsers",
    ans: "b",
    diff: "easy",
    topic: "MFA",
    expl: "Two-factor authentication combines something you know (password) with something you have (OTP device).",
  },
  {
    q: "An employee finds a USB drive in the office parking lot. What should they do?",
    a: "Plug it into their work computer to identify the owner",
    b: "Take it home",
    c: "Hand it to IT security without plugging it in anywhere",
    d: "Throw it away",
    ans: "c",
    diff: "easy",
    topic: "Device Security",
    expl: "Unknown USB drives may contain malware. Plugging them in can silently compromise banking systems.",
  },
  {
    q: "What does HTTPS in a URL indicate?",
    a: "The website loads faster",
    b: "The website uses a secure encrypted connection",
    c: "The website is government-owned",
    d: "The website is free from viruses",
    ans: "b",
    diff: "easy",
    topic: "Secure Banking Systems",
    expl: "HTTPS uses TLS encryption to protect data in transit. Always check for HTTPS before entering banking credentials.",
  },
  {
    q: "What should a bank employee do with confidential customer data?",
    a: "Share freely with colleagues for efficiency",
    b: "Handle according to the bank's data privacy policy on a need-to-know basis",
    c: "Store on personal devices for convenience",
    d: "Send via personal email if official email is slow",
    ans: "b",
    diff: "easy",
    topic: "Data Privacy",
    expl: "Confidential data must follow RBI data privacy regulations. Unauthorised sharing violates compliance and law.",
  },
  {
    q: "What is the purpose of an antivirus program?",
    a: "To increase internet speed",
    b: "To detect, prevent, and remove malicious software",
    c: "To manage employee passwords",
    d: "To back up banking data",
    ans: "b",
    diff: "easy",
    topic: "Device Security",
    expl: "Antivirus software scans for known malware signatures and suspicious behaviour to protect banking endpoints.",
  },
  {
    q: "What should you do when you receive a suspicious link in a banking email?",
    a: "Click the link to verify it",
    b: "Forward the link to your team",
    c: "Do not click — report to IT security immediately",
    d: "Copy the link to a browser to check",
    ans: "c",
    diff: "easy",
    topic: "Phishing",
    expl: "Suspicious links must never be clicked. Report immediately to the IT security team for investigation.",
  },

  /* ── MEDIUM 50 ── */
  {
    q: "A bank employee receives a call from someone claiming to be from RBI demanding credentials for an urgent audit. What is the correct response?",
    a: "Share credentials since it is RBI",
    b: "Ask them to send an official email first",
    c: "Refuse, hang up, and immediately report to your CISO and manager",
    d: "Share only partial credentials",
    ans: "c",
    diff: "medium",
    topic: "Vishing",
    expl: "RBI never calls employees demanding credentials. This is a vishing attack. Immediate reporting to the CISO is mandatory.",
  },
  {
    q: "Under RBI's Cyber Security Framework, how quickly must a significant cyber incident be reported to RBI?",
    a: "Within 30 days",
    b: "Within 7 days",
    c: "Within 2 to 6 hours of detection",
    d: "Within 24 hours",
    ans: "c",
    diff: "medium",
    topic: "Incident Reporting",
    expl: "RBI mandates reporting of significant cyber incidents within 2-6 hours of detection per the RBI Cyber Security Framework.",
  },
  {
    q: "What is spear phishing?",
    a: "Generic phishing targeting thousands of random users",
    b: "A highly targeted phishing attack using personalised information about a specific individual or organisation",
    c: "Phishing using telephone calls",
    d: "Phishing via SMS messages",
    ans: "b",
    diff: "medium",
    topic: "Phishing",
    expl: "Spear phishing uses researched personal details to craft convincing attacks against specific bank employees.",
  },
  {
    q: "A customer reports Rs. 50,000 was debited without authorisation. What is the FIRST step?",
    a: "Ask them to visit the branch in person",
    b: "Tell them to wait 48 hours",
    c: "Immediately escalate to the fraud management team and block the account per incident response protocol",
    d: "File a police report on their behalf",
    ans: "c",
    diff: "medium",
    topic: "Unauthorized Transactions",
    expl: "RBI guidelines require banks to act immediately on reported unauthorised transactions to minimise customer liability.",
  },
  {
    q: "What is a Man-in-the-Middle (MitM) attack?",
    a: "An attack where the attacker physically stands between two people",
    b: "An attack where the attacker secretly intercepts and possibly alters communication between two parties",
    c: "An attack targeting only mobile banking apps",
    d: "A type of password guessing attack",
    ans: "b",
    diff: "medium",
    topic: "Network Security",
    expl: "MitM attacks can intercept banking transactions. HTTPS and proper certificate validation are key defences.",
  },
  {
    q: "Which is a common sign of a phishing email?",
    a: "The email uses the official bank logo",
    b: "The email was sent to your official work address",
    c: "The email creates urgency, has a misspelled domain, and asks for login credentials",
    d: "The email mentions a customer's name",
    ans: "c",
    diff: "medium",
    topic: "Phishing",
    expl: "Urgency, fear, misspelled domains, and credential requests are classic phishing indicators.",
  },
  {
    q: "What is the purpose of a Security Operations Centre (SOC)?",
    a: "To manage the bank's social media accounts",
    b: "To continuously monitor, detect, and respond to cyber security threats in real time",
    c: "To process customer loan applications",
    d: "To manage IT equipment procurement",
    ans: "b",
    diff: "medium",
    topic: "Banking IT Systems",
    expl: "An SOC provides round-the-clock monitoring to detect threats before they cause significant damage.",
  },
  {
    q: "What is 'shoulder surfing' in banking security?",
    a: "A type of online banking fraud",
    b: "Observing someone's screen or keyboard to steal sensitive information like PINs",
    c: "Surfing the internet without authorisation",
    d: "An attack on banking websites",
    ans: "b",
    diff: "medium",
    topic: "ATM Security",
    expl: "Shoulder surfing at ATMs and workstations is a low-tech but effective way to steal credentials and PINs.",
  },
  {
    q: "What does the RBI's Cyber Security Framework for Banks primarily address?",
    a: "Digital marketing guidelines",
    b: "A minimum baseline of cyber security measures banks must implement",
    c: "Interest rate regulations",
    d: "Customer onboarding procedures",
    ans: "b",
    diff: "medium",
    topic: "Cyber Security Basics",
    expl: "RBI's 2016 Cyber Security Framework mandates minimum security controls for all commercial banks in India.",
  },
  {
    q: "What is a Distributed Denial of Service (DDoS) attack?",
    a: "An attack that steals customer data",
    b: "An attack that overwhelms a server with massive traffic to make services unavailable",
    c: "A type of insider threat",
    d: "Malware installed on banking servers",
    ans: "b",
    diff: "medium",
    topic: "Network Security",
    expl: "DDoS attacks can take banking services offline. Banks must have DDoS mitigation and business continuity plans.",
  },
  {
    q: "Which best describes safe UPI usage?",
    a: "Never enter your UPI PIN on any app",
    b: "Share your UPI PIN with family for emergency transactions",
    c: "Never share your UPI PIN; verify collect requests carefully; use only official bank apps",
    d: "UPI is always safe so no special care is needed",
    ans: "c",
    diff: "medium",
    topic: "UPI Security",
    expl: "UPI fraud exploits careless PIN sharing and fake collect requests. Always verify before accepting requests.",
  },
  {
    q: "What is 'tailgating' in physical security?",
    a: "Leaving your office at the end of the day",
    b: "An unauthorised person entering a secure area by following an authorised person",
    c: "Following a suspected criminal",
    d: "A type of network attack",
    ans: "b",
    diff: "medium",
    topic: "Employee Security Practices",
    expl: "Tailgating bypasses physical access controls. Always challenge unfamiliar people in restricted banking areas.",
  },
  {
    q: "What is a zero-day vulnerability?",
    a: "A vulnerability that is already patched",
    b: "A software vulnerability unknown to the vendor with no available patch",
    c: "A vulnerability that is zero percent dangerous",
    d: "A vulnerability in zero-balance accounts",
    ans: "b",
    diff: "medium",
    topic: "Cyber Security Basics",
    expl: "Zero-day vulnerabilities are critical because no patch exists. Banks must use behaviour-based detection systems.",
  },
  {
    q: "What is the role of a Chief Information Security Officer (CISO)?",
    a: "Managing branch operations",
    b: "Overseeing and implementing the bank's overall information security strategy and risk management",
    c: "Approving customer loan applications",
    d: "Managing ATM operations",
    ans: "b",
    diff: "medium",
    topic: "Information Security",
    expl: "RBI requires banks to designate a CISO responsible for cyber security, reporting directly to the Board or CEO.",
  },
  {
    q: "What is 'pretexting' in social engineering?",
    a: "Writing false information in reports",
    b: "Creating a fabricated scenario to manipulate someone into providing information or access",
    c: "A type of network monitoring",
    d: "Pre-reviewing a text message before sending",
    ans: "b",
    diff: "medium",
    topic: "Social Engineering",
    expl: "Pretexting creates a believable backstory to manipulate employees — for example, impersonating an auditor.",
  },
  {
    q: "What is a brute force attack?",
    a: "Physically breaking into a bank server room",
    b: "Systematically trying every possible password combination until the correct one is found",
    c: "An attack using extreme network traffic",
    d: "Overloading a system with emails",
    ans: "b",
    diff: "medium",
    topic: "Cyber Security Basics",
    expl: "Brute force attacks are countered by account lockout policies, strong passwords, and MFA.",
  },
  {
    q: "What should banks do regarding cyber security awareness training under RBI guidelines?",
    a: "Conduct training only after a breach",
    b: "Train only IT staff",
    c: "Conduct mandatory awareness training for all employees at regular intervals",
    d: "Training is optional and left to branch managers",
    ans: "c",
    diff: "medium",
    topic: "Employee Security Practices",
    expl: "RBI mandates that all bank employees receive regular cyber security training to create a security-aware culture.",
  },
  {
    q: "What is network segmentation and why is it important for banks?",
    a: "Dividing the network to sell to different customers",
    b: "Separating network parts so a breach in one segment does not automatically compromise others",
    c: "Combining all bank networks for efficiency",
    d: "Restricting internet access for all employees",
    ans: "b",
    diff: "medium",
    topic: "Network Security",
    expl: "Network segmentation is a key RBI recommendation. It limits breach spread and protects the core banking network.",
  },
  {
    q: "What is the purpose of a VAPT (Vulnerability Assessment and Penetration Test)?",
    a: "To assess employee work performance",
    b: "To simulate cyber attacks on banking systems to identify and fix security weaknesses",
    c: "To test new banking software features",
    d: "To test internet connection speed",
    ans: "b",
    diff: "medium",
    topic: "Banking IT Systems",
    expl: "RBI recommends regular VAPT. It identifies exploitable weaknesses before real attackers can use them.",
  },
  {
    q: "What is an insider threat in the banking context?",
    a: "A threat from outside the bank",
    b: "A security risk from current or former employees, contractors, or partners who misuse their access",
    c: "A threat from internet hackers",
    d: "A physical threat to bank branches",
    ans: "b",
    diff: "medium",
    topic: "Insider Threats",
    expl: "Insider threats are among the most damaging. Separation of duties, access controls, and monitoring are key mitigations.",
  },
  {
    q: "What is 'business email compromise' (BEC) fraud?",
    a: "Phishing emails to customers",
    b: "Fraudulent emails impersonating bank executives or vendors to trick employees into transferring funds",
    c: "Hacking into the bank's email server",
    d: "Using bank email for personal use",
    ans: "b",
    diff: "medium",
    topic: "Digital Fraud Prevention",
    expl: "BEC fraud causes billions in banking losses. Always verify unusual fund transfer requests through a second channel.",
  },
  {
    q: "What is the function of a VPN for bank employees working remotely?",
    a: "To increase internet speed",
    b: "To create an encrypted tunnel for secure access to banking systems over public networks",
    c: "To block social media during work hours",
    d: "To share files with customers",
    ans: "b",
    diff: "medium",
    topic: "Network Security",
    expl: "VPNs encrypt all traffic between remote employees and banking systems, preventing interception on public networks.",
  },
  {
    q: "What is 'data classification' in banking information security?",
    a: "Organising data by employee name",
    b: "Categorising data based on sensitivity to apply appropriate security controls",
    c: "Classifying customer accounts by balance",
    d: "Sorting data by transaction date",
    ans: "b",
    diff: "medium",
    topic: "Information Security",
    expl: "Data classification ensures the right level of protection is applied to sensitive banking data.",
  },
  {
    q: "What is a security patch?",
    a: "A physical repair for damaged hardware",
    b: "Software code released to fix known vulnerabilities in existing software",
    c: "A backup copy of a programme",
    d: "An antivirus update notification",
    ans: "b",
    diff: "medium",
    topic: "Cyber Hygiene",
    expl: "Timely patching closes known vulnerabilities. Unpatched systems are a leading cause of banking cyber breaches.",
  },
  {
    q: "Why is 'segregation of duties' important in a core banking system?",
    a: "To distribute workload evenly",
    b: "To ensure no single employee can complete a high-risk transaction alone, preventing fraud",
    c: "To segregate IT from banking operations",
    d: "To create separate departments",
    ans: "b",
    diff: "medium",
    topic: "Core Banking Security",
    expl: "Segregation of duties is a fundamental control to prevent and detect fraud in core banking systems.",
  },
  {
    q: "What is 'credential stuffing'?",
    a: "Filling in job application forms online",
    b: "Using stolen username and password combinations from one breach to attempt login to multiple other accounts",
    c: "Guessing passwords through brute force",
    d: "Phishing for login credentials",
    ans: "b",
    diff: "medium",
    topic: "Cyber Security Basics",
    expl: "Credential stuffing exploits password reuse. Banks should encourage unique passwords and implement anomaly detection.",
  },
  {
    q: "What is the risk of using public Wi-Fi to access banking systems?",
    a: "No risk if using HTTPS websites",
    b: "The connection may be intercepted by attackers on the same network, exposing banking data",
    c: "It is slightly slower but safe",
    d: "Only a risk if the Wi-Fi password is shared",
    ans: "b",
    diff: "medium",
    topic: "Network Security",
    expl: "Public Wi-Fi networks are unsecured. Always use VPN and avoid accessing banking systems on public networks.",
  },
  {
    q: "What does RBI's 'Customer Protection — Limiting Liability' circular cover?",
    a: "Insurance for bank employees",
    b: "Limiting the financial liability of customers in cases of unauthorised banking transactions",
    c: "Customer service standards",
    d: "Loan interest rate limits",
    ans: "b",
    diff: "medium",
    topic: "Customer Awareness",
    expl: "This RBI directive protects customers by defining liability limits for unauthorised transactions and requiring quick resolution.",
  },
  {
    q: "What is DNS spoofing?",
    a: "A type of email spam",
    b: "Manipulating DNS records to redirect users to fake banking websites",
    c: "An antivirus technique",
    d: "A secure DNS protocol",
    ans: "b",
    diff: "medium",
    topic: "Network Security",
    expl: "DNS spoofing redirects banking customers to fraudulent websites indistinguishable from real ones, enabling credential theft.",
  },
  {
    q: "Why must bank employees use encrypted email for sensitive information?",
    a: "Encrypted emails are faster",
    b: "To prevent unauthorised persons from reading sensitive banking information in transit",
    c: "RBI requires all emails to be encrypted",
    d: "Encryption is only needed for external emails",
    ans: "b",
    diff: "medium",
    topic: "Email Security",
    expl: "Email encryption ensures sensitive customer or operational data cannot be read if the email is intercepted.",
  },
  {
    q: "What is 'baiting' in social engineering?",
    a: "Bait fishing near bank premises",
    b: "Luring victims by offering something enticing such as a free USB drive containing malware",
    c: "An email phishing technique",
    d: "A type of brute force attack",
    ans: "b",
    diff: "medium",
    topic: "Social Engineering",
    expl: "Baiting uses human curiosity or greed. Malware-loaded USB drives left in public areas is a classic banking threat.",
  },
  {
    q: "What is a keylogger?",
    a: "A tool that logs physical keys used in bank branches",
    b: "Malware that secretly records keystrokes to steal passwords and banking credentials",
    c: "Software that tracks keyboard productivity",
    d: "A banking audit tool",
    ans: "b",
    diff: "medium",
    topic: "Malware",
    expl: "Keyloggers capture banking credentials silently. Anti-malware and MFA are critical defences.",
  },
  {
    q: "What is endpoint security in banking?",
    a: "Security at the customer-facing counter",
    b: "Protection of devices like computers, laptops, and mobiles that connect to banking networks",
    c: "Security at network endpoints like routers",
    d: "ATM security measures",
    ans: "b",
    diff: "medium",
    topic: "Device Security",
    expl: "Endpoint security protects all devices from malware and unauthorised access, forming a critical banking security layer.",
  },
  {
    q: "What is the significance of an SSL/TLS certificate for a banking website?",
    a: "It makes the website load faster",
    b: "It authenticates the website's identity and encrypts data between the server and the user's browser",
    c: "It provides antivirus protection",
    d: "It is required for online advertising",
    ans: "b",
    diff: "medium",
    topic: "Secure Banking Systems",
    expl: "A valid SSL/TLS certificate ensures customers are on the genuine bank website and their data is encrypted in transit.",
  },
  {
    q: "What is 'pharming' in online banking fraud?",
    a: "Agricultural banking schemes",
    b: "Redirecting users to a fraudulent website even when they type the correct banking URL",
    c: "SMS-based banking fraud",
    d: "Phishing via email links",
    ans: "b",
    diff: "medium",
    topic: "Digital Fraud Prevention",
    expl: "Pharming manipulates DNS or hosts files to silently redirect customers to fake banking sites to steal credentials.",
  },
  {
    q: "What is a Business Continuity Plan (BCP) in banking?",
    a: "A plan for business expansion",
    b: "A strategy to ensure critical banking operations continue during and after a cyber incident or disaster",
    c: "A marketing plan for customer retention",
    d: "A plan for employee succession",
    ans: "b",
    diff: "medium",
    topic: "Banking IT Systems",
    expl: "RBI requires banks to maintain and regularly test BCPs to ensure resilience against cyber incidents and disasters.",
  },
  {
    q: "What is 'whaling' in cyber security?",
    a: "A phishing attack targeting the general public",
    b: "A targeted phishing attack aimed specifically at senior executives like CEOs or bank directors",
    c: "An attack on financial market websites",
    d: "A massive DDoS attack",
    ans: "b",
    diff: "medium",
    topic: "Phishing",
    expl: "Whaling targets high-value bank individuals. A compromised executive account can lead to significant fraud.",
  },
  {
    q: "What should employees do with sensitive printed documents they no longer need?",
    a: "Throw them in the general waste bin",
    b: "Leave them on the desk for later",
    c: "Shred using the office shredder or secure disposal bins",
    d: "Fold and put them in a drawer",
    ans: "c",
    diff: "medium",
    topic: "Employee Security Practices",
    expl: "Physical data security is critical. Sensitive documents must be shredded to prevent dumpster diving attacks.",
  },
  {
    q: "What is the purpose of an Intrusion Detection System (IDS) in banking?",
    a: "To detect employees entering the building",
    b: "To monitor network traffic for suspicious activity and known attack patterns",
    c: "To detect software bugs",
    d: "To manage employee access cards",
    ans: "b",
    diff: "medium",
    topic: "Banking IT Systems",
    expl: "IDS monitors banking networks for signs of breaches or attacks, enabling rapid response to minimise damage.",
  },
  {
    q: "What is multi-layered security (defence in depth) in banking?",
    a: "Having multiple physical locks on doors",
    b: "Implementing multiple overlapping security controls so that if one fails, others still protect the system",
    c: "Using multiple antivirus programmes",
    d: "Encrypting data multiple times",
    ans: "b",
    diff: "medium",
    topic: "Cyber Security Basics",
    expl: "Defence in depth is a core RBI recommendation. No single control is perfect, so multiple layers are required.",
  },
  {
    q: "What is the risk of shadow IT in a bank?",
    a: "No risk — it improves productivity",
    b: "Using unauthorised software that bypasses official IT security controls, creating unknown vulnerabilities",
    c: "IT working during night shifts",
    d: "Employees using personal email on work systems",
    ans: "b",
    diff: "medium",
    topic: "Banking IT Systems",
    expl: "Shadow IT creates unmonitored attack surfaces. Banks must enforce policies requiring IT approval for all software.",
  },
  {
    q: "What must a bank employee do upon discovering their work laptop is lost or stolen?",
    a: "Wait to see if it turns up",
    b: "Report to IT security and CISO immediately so the device can be remotely wiped and access revoked",
    c: "Buy a replacement",
    d: "Report only if it contained sensitive files",
    ans: "b",
    diff: "medium",
    topic: "Device Security",
    expl: "A lost device with banking access must be reported immediately for remote wipe and credential reset.",
  },
  {
    q: "What is the purpose of encryption at rest in banking?",
    a: "To encrypt data while it is being transmitted",
    b: "To encrypt stored data so it remains protected even if storage media is physically stolen",
    c: "To encrypt employee emails",
    d: "To protect data only during backup",
    ans: "b",
    diff: "medium",
    topic: "Information Security",
    expl: "Encryption at rest protects customer data on banking servers and drives from physical theft or unauthorised access.",
  },
  {
    q: "What is a Trojan horse in cyber security?",
    a: "An ancient computer system",
    b: "Malware disguised as legitimate software that secretly performs harmful actions once installed",
    c: "A strong password technique",
    d: "A banking security protocol",
    ans: "b",
    diff: "medium",
    topic: "Malware",
    expl: "Trojans in banking often masquerade as apps or updates to steal credentials or install additional malware.",
  },
  {
    q: "What is cyber hygiene in banking?",
    a: "Keeping computers physically clean",
    b: "Regularly practising basic security habits — updating software, using strong passwords, staying alert to threats",
    c: "Cleaning virus-infected files",
    d: "Formatting old computers regularly",
    ans: "b",
    diff: "medium",
    topic: "Cyber Hygiene",
    expl: "Cyber hygiene prevents the majority of common banking cyber threats through simple, consistent daily practices.",
  },
  {
    q: "How should a bank employee handle a request to transfer a large amount to a new account received only via email?",
    a: "Process it immediately to avoid delays",
    b: "Verify through a secondary channel (phone call) before processing, following the bank's dual-approval policy",
    c: "Transfer half the amount first as a test",
    d: "Email back asking for more details",
    ans: "b",
    diff: "medium",
    topic: "Digital Fraud Prevention",
    expl: "BEC fraud relies on email alone. Always verify large or unusual transfers through a second confirmed channel.",
  },
  {
    q: "What is 'access log monitoring' and why is it important?",
    a: "Monitoring who enters the bank branch physically",
    b: "Recording and reviewing who accesses banking systems to detect anomalies and investigate incidents",
    c: "Logging customer internet banking usage",
    d: "Monitoring ATM usage patterns",
    ans: "b",
    diff: "medium",
    topic: "Information Security",
    expl: "Access log monitoring is critical for detecting unauthorised access, insider threats, and supporting incident investigations.",
  },
  {
    q: "What is a 'watering hole' attack?",
    a: "An attack targeting water supply systems",
    b: "Compromising a website frequently visited by the target group to infect their devices with malware",
    c: "An attack targeting bank cooling systems",
    d: "A phishing email with water-related content",
    ans: "b",
    diff: "medium",
    topic: "Malware",
    expl: "Attackers compromise industry websites that bank employees visit, delivering malware silently when the page loads.",
  },
  {
    q: "What is smishing and how does it target bank customers?",
    a: "Spam emails to bank customers",
    b: "Fraudulent SMS messages pretending to be from a bank to steal OTPs or credentials",
    c: "Phishing via social media",
    d: "Hacking banking mobile apps",
    ans: "b",
    diff: "medium",
    topic: "Smishing",
    expl: "Smishing often says 'Your account is blocked — click here to verify' to steal OTPs and gain account access.",
  },

  /* ── HARD 25 ── */
  {
    q: "A bank's network analysis reveals encrypted traffic from an internal server to an unusual external IP at 3 AM daily. What does this most likely indicate?",
    a: "Routine software update downloads",
    b: "A potential Advanced Persistent Threat (APT) exfiltrating data via Command and Control communication",
    c: "Normal backup operations",
    d: "Employees accessing cloud services",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "Encrypted C2 communication at unusual hours is a hallmark of APT activity. Immediate forensic investigation and isolation are required.",
  },
  {
    q: "Under the RBI Cyber Security Framework, which category of banks must implement the most stringent security baseline?",
    a: "Urban Cooperative Banks",
    b: "Scheduled Commercial Banks with significant systemic importance (D-SIBs)",
    c: "Regional Rural Banks",
    d: "Payment Banks only",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "Domestic Systemically Important Banks (D-SIBs) face the most rigorous RBI cyber security requirements due to their systemic importance.",
  },
  {
    q: "What is an SQL injection attack?",
    a: "Injecting physical media into computer slots",
    b: "Inserting malicious SQL code into input fields to manipulate the backend database and expose or delete customer data",
    c: "A type of spam email",
    d: "Overloading a database with queries",
    ans: "b",
    diff: "hard",
    topic: "Banking IT Systems",
    expl: "SQL injection is among the most dangerous web attacks. Banks must use parameterised queries and input validation.",
  },
  {
    q: "What is a 'supply chain attack' in banking cyber security?",
    a: "An attack on the bank's physical cash supply",
    b: "Compromising a trusted third-party vendor or software provider to gain access to the bank's systems",
    c: "Disrupting the bank's loan supply chain",
    d: "An attack on the bank's procurement system",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "Supply chain attacks compromise trusted vendors to access many organisations. Banks must vet all third-party vendors.",
  },
  {
    q: "What is the primary function of a Hardware Security Module (HSM) in banking?",
    a: "To store physical cash securely",
    b: "A tamper-resistant device that securely manages cryptographic keys and performs encryption for critical banking systems",
    c: "To monitor employee hardware usage",
    d: "To power ATMs during outages",
    ans: "b",
    diff: "hard",
    topic: "Core Banking Security",
    expl: "HSMs protect cryptographic keys used in payment systems and core banking, preventing key compromise.",
  },
  {
    q: "What is 'lateral movement' in a banking cyber attack?",
    a: "Moving customer funds between accounts",
    b: "An attacker using an initial foothold to progressively access other systems within the bank's network",
    c: "A banking employee moving between departments",
    d: "Transferring data to external storage",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "After initial compromise, attackers move laterally to reach high-value targets like core banking servers or payment systems.",
  },
  {
    q: "What is 'Critical Information Infrastructure' (CII) under the RBI Cyber Security Framework?",
    a: "Information critical for marketing",
    b: "IT systems whose disruption would have a debilitating impact on the bank's core services or the national financial system",
    c: "Information about key banking employees",
    d: "Customer credit information databases",
    ans: "b",
    diff: "hard",
    topic: "Banking IT Systems",
    expl: "CII includes core banking, payment systems, and interbank connectivity. RBI mandates the highest protection for these assets.",
  },
  {
    q: "What is a 'Golden Ticket' attack in banking Active Directory security?",
    a: "A fraudulent banking product offer",
    b: "A Kerberos attack where attackers forge authentication tickets giving them persistent unrestricted access to all domain resources",
    c: "A phishing attack offering prize money",
    d: "A type of privilege escalation through bribery",
    ans: "b",
    diff: "hard",
    topic: "Banking IT Systems",
    expl: "Golden Ticket attacks compromise Active Directory, enabling persistent stealth access to all bank systems until the KRBTGT account is reset.",
  },
  {
    q: "What is a 'homoglyph' or 'IDN homograph attack' targeting banking customers?",
    a: "Phishing using identical email content",
    b: "Using visually similar Unicode characters to create domain names that look identical to legitimate bank websites",
    c: "Phishing using the same graphics as the real bank",
    d: "Sending identical phishing emails to multiple recipients",
    ans: "b",
    diff: "hard",
    topic: "Phishing",
    expl: "Attackers use characters like Cyrillic 'а' instead of Latin 'a' in a bank URL, nearly indistinguishable to the human eye.",
  },
  {
    q: "What is the SWIFT Customer Security Programme (CSP)?",
    a: "A SWIFT staff training programme",
    b: "A mandatory security framework requiring banks to implement specific controls to protect their SWIFT infrastructure and prevent fraudulent transfers",
    c: "A customer service improvement programme",
    d: "A regulatory programme for swift loan processing",
    ans: "b",
    diff: "hard",
    topic: "Banking IT Systems",
    expl: "Following the $81M Bangladesh Bank SWIFT heist, SWIFT CSP was made mandatory. Banks self-attest compliance annually.",
  },
  {
    q: "A bank's SOC detects a spike in failed login attempts across 5000 accounts from 300 different IPs within 10 minutes. What attack is this?",
    a: "A SQL injection attack",
    b: "A distributed credential stuffing attack against the internet banking portal",
    c: "A DDoS attack",
    d: "Employees forgetting passwords simultaneously",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "This pattern is characteristic of a distributed credential stuffing attack using stolen credentials from other data breaches.",
  },
  {
    q: "What is 'steganography' and how is it used in banking cyber attacks?",
    a: "A stenography shorthand system for banking",
    b: "Hiding malicious code inside innocuous-looking files like images to bypass security tools and exfiltrate data",
    c: "A type of network encryption",
    d: "An advanced antivirus technique",
    ans: "b",
    diff: "hard",
    topic: "Malware",
    expl: "Attackers hide malware in images or documents, bypassing signature-based detection tools used in banking security.",
  },
  {
    q: "What is 'memory scraping' malware in ATM security?",
    a: "Malware that deletes ATM memory",
    b: "Malware that reads the volatile memory of ATM systems to extract card data before it is encrypted",
    c: "A tool to clean ATM memory modules",
    d: "Malware targeting ATM display screens",
    ans: "b",
    diff: "hard",
    topic: "ATM Security",
    expl: "Memory scraping reads card data from RAM before encryption. Physical and logical ATM security are both critical defences.",
  },
  {
    q: "What is a 'Pass-the-Hash' attack?",
    a: "An attack where crackers share cracked passwords",
    b: "An attack using a stolen password hash to authenticate and move laterally in the banking network without knowing the plaintext password",
    c: "A brute force attack using common password hashes",
    d: "A technique to hash banking customer passwords",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "Pass-the-Hash allows attackers to bypass password requirements using captured hashes, enabling lateral movement in banking networks.",
  },
  {
    q: "Under RBI guidelines, what is required for third-party service provider risk management?",
    a: "Banks can use any vendor without restrictions",
    b: "Banks must conduct due diligence, assess cyber risks, include security requirements in contracts, and monitor third-party vendors",
    c: "Third-party risk is the vendor's own responsibility",
    d: "RBI approves all bank vendors directly",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "Third-party risk management is a critical RBI requirement. Vendors with system access must meet the same standards as the bank.",
  },
  {
    q: "What is 'fileless malware' and why is it dangerous for banking?",
    a: "Malware without a file extension",
    b: "Malware that operates entirely in memory without writing files to disk, making it extremely hard for traditional antivirus to detect",
    c: "Malware that deletes all files it infects",
    d: "A banking document management vulnerability",
    ans: "b",
    diff: "hard",
    topic: "Malware",
    expl: "Fileless malware is one of the fastest-growing threats to banks. Behavioural analysis and EDR solutions are required.",
  },
  {
    q: "What is 'SIM swap fraud' and how does it bypass bank security?",
    a: "Customers swapping SIM cards between phones",
    b: "Fraudsters convincing a telecom operator to transfer a victim's number to their SIM, intercepting OTPs to take over banking accounts",
    c: "A SIM card software update vulnerability",
    d: "Fraudsters using multiple SIM cards",
    ans: "b",
    diff: "hard",
    topic: "Digital Fraud Prevention",
    expl: "SIM swap is a major banking threat. Banks should implement device binding and app-based authentication as alternatives to SMS OTPs.",
  },
  {
    q: "What is 'Adversarial Machine Learning' risk for AI-powered banking fraud detection?",
    a: "Employees using AI adversarially",
    b: "Attackers crafting transactions designed to fool ML-based fraud detection models into classifying fraudulent activity as legitimate",
    c: "ML models that refuse to learn from banking data",
    d: "Competing banks using the same ML models",
    ans: "b",
    diff: "hard",
    topic: "Digital Fraud Prevention",
    expl: "As banks adopt AI fraud detection, attackers probe these systems and craft transactions to evade detection.",
  },
  {
    q: "What does a 'cyber range' exercise in banking involve?",
    a: "A physical shooting range for bank security guards",
    b: "A simulated cyber attack exercise where bank teams practise detecting, responding to, and recovering from cyber incidents",
    c: "The geographic range of the bank's cyber security coverage",
    d: "A range of cyber security software products",
    ans: "b",
    diff: "hard",
    topic: "Incident Reporting",
    expl: "Cyber range exercises build institutional muscle memory for incident response. RBI encourages banks to conduct regular simulations.",
  },
  {
    q: "What is the 'quantum computing' threat to banking cryptography?",
    a: "Computers designed for banking calculations",
    b: "Future quantum computers could break current public-key cryptography (RSA/ECC) used to protect banking communications",
    c: "Quantum computers that process transactions faster",
    d: "A type of cryptocurrency threat",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "Quantum computing poses a long-term threat to banking encryption. Banks must plan for post-quantum cryptography migration.",
  },
  {
    q: "What is 'DMARC' and why is it critical for bank email security?",
    a: "A banking compliance framework",
    b: "An email authentication protocol that prevents fraudsters from sending emails appearing to come from the bank's official domain",
    c: "A database management and recovery control",
    d: "A digital marketing and revenue control tool",
    ans: "b",
    diff: "hard",
    topic: "Email Security",
    expl: "DMARC (with DKIM and SPF) prevents email spoofing of bank domains, stopping phishing emails that impersonate the bank.",
  },
  {
    q: "What is the role of 'threat intelligence' in a bank's cyber security strategy?",
    a: "Intelligence about competitor banks",
    b: "Actionable information about current cyber threats and attacker tactics that enables proactive defence of banking systems",
    c: "Internal reports about employee threats",
    d: "Information only from regulatory authorities",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "Threat intelligence sharing via RBI/IDRBT platforms allows banks to defend against known attack campaigns proactively.",
  },
  {
    q: "What is 'non-repudiation' in banking digital transactions?",
    a: "The ability to repudiate banking charges",
    b: "A property ensuring a party cannot deny having authorised a transaction, enforced using digital signatures",
    c: "A customer's right to dispute transactions",
    d: "A banking regulatory term for loan defaults",
    ans: "b",
    diff: "hard",
    topic: "Information Security",
    expl: "Non-repudiation through digital signatures ensures no party can deny authorising a banking transaction — critical for dispute resolution.",
  },
  {
    q: "Under RBI's cyber security framework, what must banks maintain for regulatory review?",
    a: "Only major incidents need to be documented",
    b: "A detailed cyber security incident register logging all incidents including near-misses, responses, and lessons learned",
    c: "Incidents reported only to the board annually",
    d: "Only incidents affecting customers need documentation",
    ans: "b",
    diff: "hard",
    topic: "Incident Reporting",
    expl: "RBI requires a comprehensive incident register enabling pattern analysis, regulatory review, and continuous security improvement.",
  },
  {
    q: "What is a 'watering hole attack' specifically targeting banking employees?",
    a: "An attack targeting water utility companies near banks",
    b: "Compromising financial news websites or regulatory portals that bank employees regularly visit to infect their devices",
    c: "An attack at ATMs near water bodies",
    d: "Phishing emails about water bill payments",
    ans: "b",
    diff: "hard",
    topic: "Malware",
    expl: "Attackers study bank employee browsing habits and compromise those specific sites to deliver malware to banking workstations.",
  },
  {
    q: "What is RBI's mandate regarding cyber security audits for banks?",
    a: "Cyber security audits are optional",
    b: "Banks must conduct periodic IS audits and vulnerability assessments, with findings reported to the Board IT Strategy Committee",
    c: "Only RBI conducts cyber audits for banks",
    d: "Audits are required only after a breach",
    ans: "b",
    diff: "hard",
    topic: "Cyber Security Basics",
    expl: "RBI mandates periodic IS audits. Findings must be reported to the Board IT Strategy Committee for oversight and remediation.",
  },
];

/* ══════════════════════════════════════
   TOPICS
══════════════════════════════════════ */
const TOPICS_DATA = [
  { i: "🔒", n: "Cyber Security Basics" },
  { i: "🎣", n: "Phishing" },
  { i: "📞", n: "Vishing" },
  { i: "📱", n: "Smishing" },
  { i: "🦠", n: "Malware" },
  { i: "💰", n: "Ransomware" },
  { i: "🧠", n: "Social Engineering" },
  { i: "🔐", n: "Data Privacy" },
  { i: "🔑", n: "Password Security" },
  { i: "🛡️", n: "MFA" },
  { i: "🏦", n: "Secure Banking Systems" },
  { i: "👔", n: "Employee Security Practices" },
  { i: "🚨", n: "Incident Reporting" },
  { i: "🧹", n: "Cyber Hygiene" },
  { i: "💳", n: "Digital Fraud Prevention" },
  { i: "👥", n: "Customer Awareness" },
  { i: "❌", n: "Unauthorized Transactions" },
  { i: "🖥️", n: "Banking IT Systems" },
  { i: "🌐", n: "Network Security" },
  { i: "📧", n: "Email Security" },
  { i: "💻", n: "Device Security" },
  { i: "⚠️", n: "Insider Threats" },
  { i: "ℹ️", n: "Information Security" },
  { i: "💸", n: "Payment Security" },
  { i: "📲", n: "UPI Security" },
  { i: "🏧", n: "ATM Security" },
  { i: "⚡", n: "Core Banking Security" },
];

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let examMode = "strict";
let questions = []; // prepared question objects
let answers = []; // null | index into opts[]
let curQ = 0;
let timerID = null;
let timeLeft = 90 * 60;
let examDone = false;
let startTime = 0;

/* ══════════════════════════════════════
   HELPERS
══════════════════════════════════════ */
function gotoScreen(id) {
  document.querySelectorAll(".scr").forEach((s) => s.classList.remove("on"));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("on");
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ══════════════════════════════════════
   BUILD TOPICS LIST
══════════════════════════════════════ */
function buildTopics() {
  document.getElementById("topics-grid").innerHTML = TOPICS_DATA.map(
    (t) =>
      `<div class="tpill"><span class="tpill-ic">${t.i}</span><span class="tpill-name">${t.n}</span></div>`,
  ).join("");
}

/* ══════════════════════════════════════
   MODE SWITCH
══════════════════════════════════════ */
function setMode(m) {
  examMode = m;
  document.getElementById("btn-strict").classList.toggle("on", m === "strict");
  document
    .getElementById("btn-practice")
    .classList.toggle("on", m === "practice");
  document.getElementById("mode-desc").innerHTML =
    m === "strict"
      ? "<strong>Strict Exam Mode:</strong> 90-minute timer runs. No answer feedback during the exam. Results and review shown only after submission. Mirrors the real RBI assessment experience."
      : "<strong>Practice Mode:</strong> No time limit. After selecting an answer, the correct option highlights immediately with a blinking animation to help you learn. Ideal for self-study and topic revision.";
}

/* ══════════════════════════════════════
   PREPARE QUESTIONS
══════════════════════════════════════ */
function prepareQuestions() {
  const pool = shuffle(QB).slice(0, 100);
  return pool.map((q) => {
    // Build original options array in order A B C D
    const opts = [
      { orig: "a", text: q.a },
      { orig: "b", text: q.b },
      { orig: "c", text: q.c },
      { orig: "d", text: q.d },
    ];
    const shuffled = shuffle(opts);
    const correctIdx = shuffled.findIndex((o) => o.orig === q.ans);
    return {
      text: q.q,
      opts: shuffled.map((o) => o.text),
      correct: correctIdx,
      diff: q.diff,
      topic: q.topic,
      expl: q.expl || "",
    };
  });
}

/* ══════════════════════════════════════
   START EXAM
══════════════════════════════════════ */
function startExam() {
  questions = prepareQuestions();
  answers = new Array(questions.length).fill(null);
  curQ = 0;
  examDone = false;
  startTime = Date.now();

  buildPalette();
  renderQuestion();
  gotoScreen("screen-exam");

  clearInterval(timerID);
  if (examMode === "strict") {
    timeLeft = 90 * 60;
    updateTimerDisplay();
    timerID = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerID);
        doSubmit(true);
      }
    }, 1000);
  } else {
    const el = document.getElementById("exam-timer");
    el.textContent = "∞";
    el.className = "ebar-timer";
  }
}

/* ══════════════════════════════════════
   TIMER DISPLAY
══════════════════════════════════════ */
function updateTimerDisplay() {
  const el = document.getElementById("exam-timer");
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  el.textContent =
    String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  el.className = "ebar-timer";
  if (timeLeft <= 300) el.classList.add("td");
  else if (timeLeft <= 600) el.classList.add("tw");
}

/* ══════════════════════════════════════
   RENDER QUESTION  ← CORE FIX
══════════════════════════════════════ */
function renderQuestion() {
  if (!questions.length) return;
  const q = questions[curQ];
  const chosen = answers[curQ]; // null or index
  const isPractice = examMode === "practice";
  const revealed = isPractice && chosen !== null;

  const LETTERS = ["A", "B", "C", "D"];

  // Build option items
  let optsHTML = "";
  q.opts.forEach((optText, idx) => {
    const inputId = `opt_q${curQ}_i${idx}`;
    const isChecked = chosen === idx ? "checked" : "";
    const isDisabled = revealed ? "disabled" : "";

    // Label classes for practice mode
    let labelClass = "optlabel";
    if (revealed) {
      if (idx === q.correct) labelClass += " correct";
      else if (idx === chosen) labelClass += " wrong";
    }

    optsHTML += `
      <li class="opt">
        <input type="radio"
               id="${inputId}"
               name="exam_q${curQ}"
               value="${idx}"
               ${isChecked}
               ${isDisabled}
               onchange="selectAnswer(${idx})">
        <label class="${labelClass}" for="${inputId}">
          <span class="optkey">${LETTERS[idx]}</span>
          <span>${optText}</span>
        </label>
      </li>`;
  });

  // Explanation (practice mode only)
  const explHTML =
    revealed && q.expl
      ? `<div class="explbox"><strong>💡 Explanation:</strong> ${q.expl}</div>`
      : "";

  // Inject into DOM
  document.getElementById("question-card").innerHTML = `
    <div class="qmeta">
      <span class="qnum">Question ${curQ + 1} / ${questions.length}</span>
      <span class="qbadge ${q.diff}">${q.diff}</span>
      <span class="qtag" title="${q.topic}">${q.topic}</span>
    </div>
    <p class="qtext">${q.text}</p>
    <ul class="opts">${optsHTML}</ul>
    ${explHTML}
  `;

  // Update bar info
  document.getElementById("cur-qnum").textContent = curQ + 1;
  document.getElementById("nav-label").textContent =
    `Question ${curQ + 1} of ${questions.length}`;
  updateProgress();
  updatePalette();
}

/* ══════════════════════════════════════
   ANSWER SELECTION
══════════════════════════════════════ */
function selectAnswer(idx) {
  if (examDone) return;
  answers[curQ] = idx;
  renderQuestion(); // re-render to show practice feedback or selection state
}

function prevQuestion() {
  if (curQ > 0) {
    curQ--;
    renderQuestion();
  }
}
function nextQuestion() {
  if (curQ < questions.length - 1) {
    curQ++;
    renderQuestion();
  }
}
function jumpToQ(i) {
  curQ = i;
  renderQuestion();
}

/* ══════════════════════════════════════
   PROGRESS BAR
══════════════════════════════════════ */
function updateProgress() {
  const answered = answers.filter((a) => a !== null).length;
  const pct = (answered / questions.length) * 100;
  document.getElementById("prog-fill").style.width = pct + "%";
  document.getElementById("ans-count").textContent = answered;
}

/* ══════════════════════════════════════
   PALETTE
══════════════════════════════════════ */
function buildPalette() {
  document.getElementById("pal-grid").innerHTML = questions
    .map(
      (_, i) =>
        `<button class="palbtn" id="palb${i}" onclick="jumpToQ(${i})">${i + 1}</button>`,
    )
    .join("");
}
function updatePalette() {
  questions.forEach((_, i) => {
    const btn = document.getElementById("palb" + i);
    if (!btn) return;
    btn.className = "palbtn";
    if (i === curQ) btn.classList.add("pb-cur");
    else if (answers[i] !== null) btn.classList.add("pb-ans");
  });
}

/* ══════════════════════════════════════
   SUBMIT
══════════════════════════════════════ */
function confirmSubmit() {
  const answered = answers.filter((a) => a !== null).length;
  const unanswered = answers.filter((a) => a === null).length;

  // Update statistics
  document.getElementById("answered-count").textContent = answered;
  document.getElementById("unanswered-count").textContent = unanswered;

  // Show/hide warning
  const warning = document.getElementById("dialog-warning");
  if (unanswered > 0) {
    warning.classList.add("show");
    warning.textContent = `You have ${unanswered} unanswered question(s). Submitting now will mark them as incorrect.`;
  } else {
    warning.classList.remove("show");
  }

  document.getElementById("confirm-dialog").classList.add("show");
}

function cancelSubmit() {
  document.getElementById("confirm-dialog").classList.remove("show");
}

function doSubmit(autoSubmit) {
  clearInterval(timerID);
  examDone = true;
  // Hide the dialog
  document.getElementById("confirm-dialog").classList.remove("show");
  const elapsed =
    examMode === "strict"
      ? 90 * 60 - timeLeft
      : Math.floor((Date.now() - startTime) / 1000);
  showResults(elapsed);
}

/* ══════════════════════════════════════
   RESULTS
══════════════════════════════════════ */
function showResults(elapsed) {
  let correct = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.correct) correct++;
  });
  const total = questions.length;
  const wrong = total - correct;
  const pct = Math.round((correct / total) * 100);
  const pass = pct >= 70;

  // Score ring animation — circumference = 2π × 76 ≈ 477.52
  const circ = 2 * Math.PI * 76;
  const ring = document.getElementById("score-ring");
  ring.style.stroke = pass ? "#166534" : "#991b1b";
  ring.style.strokeDasharray = circ;
  ring.style.strokeDashoffset = circ;
  requestAnimationFrame(() => {
    setTimeout(() => {
      ring.style.strokeDashoffset = circ - (pct / 100) * circ;
    }, 80);
  });

  const pctEl = document.getElementById("res-pct");
  pctEl.textContent = pct + "%";
  pctEl.style.color = pass ? "#166534" : "#991b1b";

  document.getElementById("res-verdict").textContent =
    pct >= 90
      ? "🏆 Excellent Performance!"
      : pct >= 70
        ? "✅ Good Performance"
        : "📚 Needs Improvement";

  const badge = document.getElementById("res-badge");
  badge.textContent = pass ? "PASSED" : "FAILED";
  badge.className = "status-badge " + (pass ? "pass" : "fail");

  document.getElementById("res-correct").textContent = correct;
  document.getElementById("res-wrong").textContent = wrong;

  if (examMode === "strict") {
    const m = Math.floor(elapsed / 60);
    const s = elapsed % 60;
    document.getElementById("res-time").textContent =
      m + "m " + String(s).padStart(2, "0") + "s";
  } else {
    document.getElementById("res-time").textContent = "Practice";
  }

  const msgs = {
    excellent:
      "Outstanding! You have demonstrated a high level of cyber security awareness and are well prepared for the RBI exam. Maintain this awareness in your daily banking operations.",
    good: "Good work! You cleared the passing score. Review the questions you missed — especially on RBI framework topics, incident reporting, and fraud prevention — to strengthen your knowledge.",
    fail: "More preparation is needed. Focus on RBI guidelines, phishing recognition, incident response procedures, and secure banking practices. Use Practice Mode to review each topic systematically before the exam.",
  };
  document.getElementById("res-msg").textContent =
    pct >= 90 ? msgs.excellent : pass ? msgs.good : msgs.fail;

  gotoScreen("screen-results");
}

/* ══════════════════════════════════════
   REVIEW
══════════════════════════════════════ */
function openReview() {
  buildReviewList("all");
  gotoScreen("screen-review");
}

function buildReviewList(filter) {
  const LETTERS = ["A", "B", "C", "D"];
  let html = "";

  questions.forEach((q, i) => {
    const chosen = answers[i];
    const isCorr = chosen === q.correct;
    if (filter === "correct" && !isCorr) return;
    if (filter === "wrong" && isCorr) return;

    const yourText = chosen !== null ? q.opts[chosen] : "(Not answered)";
    const correctText = q.opts[q.correct];
    const yourLetter = chosen !== null ? LETTERS[chosen] : "—";

    html += `
      <div class="rev-card">
        <div class="qmeta" style="margin-bottom:12px;">
          <span class="qnum">Q${i + 1}</span>
          <span class="qbadge ${q.diff}">${q.diff}</span>
          <span class="qtag" title="${q.topic}">${q.topic}</span>
          <span style="margin-left:auto;font-size:13px;font-weight:700;color:${isCorr ? "var(--ok)" : "var(--er)"};">
            ${isCorr ? "✔ Correct" : "✘ Wrong"}
          </span>
        </div>
        <p class="qtext" style="font-size:15px;margin-bottom:14px;">${q.text}</p>
        ${!isCorr ? `<div class="rev-row wrong">Your answer: <strong>${yourLetter}. ${yourText}</strong></div>` : ""}
        <div class="rev-row corr">Correct answer: <strong>${LETTERS[q.correct]}. ${correctText}</strong></div>
        ${q.expl ? `<div class="explbox" style="margin-top:12px;"><strong>💡 Explanation:</strong> ${q.expl}</div>` : ""}
      </div>`;
  });

  document.getElementById("review-list").innerHTML =
    html ||
    '<div style="padding:24px;text-align:center;color:var(--g5);">No questions match this filter.</div>';
}

function filterReview(f, btn) {
  document
    .querySelectorAll(".filtbtn")
    .forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  buildReviewList(f);
}

/* ══════════════════════════════════════
   RETRY
══════════════════════════════════════ */
function retryExam() {
  clearInterval(timerID);
  examDone = false;
  gotoScreen("screen-start");
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
buildTopics();
setMode("strict");

gotoScreen("screen-start");

document.body.classList.remove("hidden");

document.getElementById("loading").remove();

document.getElementById("loading-overlay").remove();
