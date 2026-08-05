export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  year: string;
  duration: string;
  plays: string;
  category: 'QA' | 'AI & ML' | 'Fullstack Web' | 'Desktop & Game';
  techStack: string[];
  description: string;
  keyHighlights: string[];
  githubUrl?: string;
  spreadsheetUrl?: string;
  certificateUrl?: string;
  liveUrl?: string;
  publicationUrl?: string;
  audioPreviewNote?: string;
}

export interface OrganizationItem {
  id: string;
  name: string;
  role: string;
  period: string;
  category: string;
  description: string[];
  skillsGained: string[];
  coverGradient: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: 'Award' | 'Course' | 'Leadership' | 'Event';
  iconName: string;
  certificateUrl?: string;
  fileType?: 'pdf' | 'image' | 'link';
}

export const PERSONAL_INFO = {
  name: "Nesya Salma Ramadhani",
  tagline: "Quality Assurance (QA) Specialist | Web Developer",
  birthInfo: "Jakarta, October 05, 2005",
  location: "Bandung & Jakarta, Indonesia",
  address: "Perumahan Blok 8, No 96. Bandung City, Sarijadi, 40151",
  email: "nsysalma@gmail.com",
  phone: "085694749240",
  github: "https://github.com/nesyasal",
  linkedin: "https://linkedin.com/in/nesyasalmaramadhani",
  university: "Universitas Logistik dan Bisnis Internasional (ULBI) - Bandung",
  major: "D4 Informatics Engineering",
  yearRange: "2023 – Present",
  monthlyListeners: "14,820 Monthly Code Reviewers",
  bio: `I am an Informatics Engineering student with a strong interest in Quality Assurance (QA) and Web development. I have hands-on experience in both manual and automation testing, including creating test scenarios, executing User Acceptance Testing (UAT), performing bug verification, and analyzing test results to ensure application quality.
Throughout my academic journey, I have been involved in various technical projects, ranging from web-based applications and desktop systems to AI-driven solutions. One of my key achievements includes contributing to a research project on mental health sentiment analysis, which led to a publication in an international Q2 journal. This experience strengthened my skills in machine learning, data analysis, and system integration.`
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Financial Management App Testing Project",
    role: "Quality Assurance (QA Tester)",
    year: "2026",
    duration: "3:45",
    plays: "42,390",
    category: "QA",
    techStack: ["Manual Testing", "Automation Testing", "Katalon Studio", "UAT", "Bug Verification"],
    description: "End-to-end testing of a financial management application including test case design, Katalon Studio automation suite execution, and comprehensive Test Summary Report generation.",
    keyHighlights: [
      "Drafted 20+ detailed test scenarios and test cases based on system requirements",
      "Executed User Acceptance Testing (UAT) and Katalon Studio automated regression test suites",
      "Collaborated directly with the development team on bug verification and fix validation",
      "Analyzed test execution results and published official Test Summary Reports for release evaluation"
    ],
    spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1A4F3Q-Vo8ujaEEpvrzCzUuk8fma6bkm9Gy9nFISaoAI/edit?gid=906987199#gid=906987199",
    liveUrl: "https://mymoneyapp-frontend-deploy.vercel.app/",
    audioPreviewNote: "Track #1: Automated QA Suite Execution & Katalon Test Logs"
  },
  {
    id: "proj-2",
    title: "Mental Health Sentiment Classification System (Published Q2 Journal)",
    role: "AI Developer & Machine Learning Researcher",
    year: "2025",
    duration: "4:12",
    plays: "38,910",
    category: "AI & ML",
    techStack: ["Python", "Random Forest", "Particle Swarm Optimization (PSO)", "Machine Learning", "Q2 Journal, Research Publication, Web Dashboard", "front-end integration"],
    description: "Web-based AI sentiment classification system for mental health combining Random Forest with Particle Swarm Optimization (PSO) hyperparameter tuning. Successfully published in a Q2 international journal.",
    keyHighlights: [
      "Developed a Random Forest model optimized with Particle Swarm Optimization (PSO)",
      "Integrated ML model into an interactive web dashboard with real-time performance evaluation",
      "Contributed to writing scientific research indexed in the EMITTER International Journal of Engineering Technology (Scopus Q2)"
    ],
    githubUrl: "https://github.com/nesyasal/fe-e-learning",
    publicationUrl: "https://emitter.eunis.org/journal",
    audioPreviewNote: "Track #2: PSO Hyperparameter Tuning & Sentiment Model Stream"
  },
  {
    id: "proj-3",
    title: "Real-Time Emotion Detection (Chat Text & Facial Expressions)",
    role: "Full Stack Developer",
    year: "2025",
    duration: "3:18",
    plays: "29,450",
    category: "Fullstack Web",
    techStack: ["JavaScript", "Node.js", "Webcam Vision API", "Real-time Chat", "WebSocket"],
    description: "Interactive learning collaboration application identifying user emotional expressions via webcam stream and text chat in real-time.",
    keyHighlights: [
      "Architected full-stack application using JavaScript and Node.js",
      "Implemented real-time facial expression recognition via webcam stream and NLP text chat sentiment analysis",
      "Optimized live collaboration performance for interactive online learning platforms"
    ],
    githubUrl: "https://github.com/nesyasal/deteksi_emosi",
    audioPreviewNote: "Track #3: Real-Time Webcam Emotion Feature Sync"
  },
  {
    id: "proj-4",
    title: "Desktop Patient Health Monitoring System",
    role: "Desktop Application Developer",
    year: "2025",
    duration: "2:55",
    plays: "19,800",
    category: "Desktop & Game",
    techStack: ["C#", ".NET Windows Forms", "MongoDB", "NoSQL Data Architecture"],
    description: "Intuitive Windows Desktop application for patient health data management and monitoring with MongoDB database integration.",
    keyHighlights: [
      "Designed user-friendly Windows Forms UI tailored for medical staff usability",
      "Connected C# desktop application with MongoDB NoSQL database for rapid medical record processing",
      "Built patient health history tracking features and medical statistics visualization"
    ],
    githubUrl: "https://github.com/MonitoringHealth",
    audioPreviewNote: "Track #4: C# Windows Forms UI & MongoDB Stream"
  },
  {
    id: "proj-5",
    title: "Web-Based Health Consultation Information System",
    role: "Web Developer",
    year: "2024–2025",
    duration: "3:30",
    plays: "24,110",
    category: "Fullstack Web",
    techStack: ["PHP Laravel", "MySQL", "Bootstrap", "REST API", "CRUD Management"],
    description: "Integrated web health consultation platform with user authentication, doctor scheduling, consultation messaging, and relational MySQL database.",
    keyHighlights: [
      "Developed full-stack Laravel frontend and backend modules with role-based authentication",
      "Designed relational MySQL database schemas and query optimizations",
      "Executed comprehensive functional testing and debugging to ensure data transaction stability"
    ],
    githubUrl: "https://github.com/nesyasal/proyek-1",
    audioPreviewNote: "Track #5: Laravel Auth & MySQL Health Portal"
  },
  {
    id: "proj-6",
    title: "Hop Hop Bunny – 2D Java Game",
    role: "Game Developer & Asset Designer",
    year: "2023",
    duration: "2:20",
    plays: "15,620",
    category: "Desktop & Game",
    techStack: ["Java", "Greenfoot Engine", "Canva Asset Design", "Collision Detection"],
    description: "Interactive 2D arcade game built with Java and Greenfoot engine featuring scoring system, character movement animations, and custom visual assets.",
    keyHighlights: [
      "Independently designed all visual game assets using Canva",
      "Implemented Java OOP logic: physics movement, collision detection, and scoring system",
      "Initial Object-Oriented Programming (OOP) milestone project in 2D game format"
    ],
    githubUrl: "https://github.com/nesyasal/hop_hop_bunny",
    audioPreviewNote: "Track #6: 8-Bit Arcade Hop Hop Bunny Theme"
  }
];

export const ORGANIZATIONS: OrganizationItem[] = [
  {
    id: "org-1",
    name: "Inetnational Logistic & Business Baccalaurate English Center (ILBBEC)",
    role: "Head of Public Relations",
    period: "2023–2025",
    category: "Leadership & PR",
    description: [
      "Responsible for building and maintaining a positive organizational image",
      "Managed official external communications, social media channels, and public publications",
      "Actively led public speaking sessions and English skill development programs"
    ],
    skillsGained: ["Public Speaking", "Public Relations", "Social Media Management", "English Communication"],
    coverGradient: "from-pink-600 to-rose-500"
  },
  {
    id: "org-2",
    name: "CILT Seminar: Career Advancement in Logistics & Transport",
    role: "Event Division Member",
    period: "2024",
    category: "Event Management",
    description: [
      "Supervised stage operations and provided real-time technical support during the seminar",
      "Ensured smooth coordination between attendees, speakers, committee members, and technical staff"
    ],
    skillsGained: ["Stage Management", "Event Operations", "Technical Coordination"],
    coverGradient: "from-pink-500 to-rose-600"
  },
  {
    id: "org-3",
    name: "Informatics Engineering Student Association (HIMATIF)",
    role: "Human Resource - Minat & Bakat Division Member",
    period: "2024–2025",
    category: "Human Capital",
    description: [
      "Played key role in empowering members and fostering active board engagement",
      "Organized work programs focused on member appreciation and supportive organizational climate",
      "Drafted event rundowns and technical execution plans for association work programs"
    ],
    skillsGained: ["Human Resource Development", "Team Engagement", "Rundown Planning"],
    coverGradient: "from-rose-500 to-pink-600"
  },
  {
    id: "org-4",
    name: "Pathway to The World (UKM x ORMAWA Collaboration)",
    role: "Head of Curriculum Division",
    period: "2025",
    category: "Academic & Curriculum",
    description: [
      "Led Curriculum Division in planning and executing campus TOEFL simulation events",
      "Coordinated with the Language Center to ensure availability and validation of TOEFL test materials",
      "Reviewed, validated, and verified TOEFL simulation answer sheets and scoring accuracy"
    ],
    skillsGained: ["Curriculum Planning", "TOEFL Validation", "Academic Assessment", "Leadership"],
    coverGradient: "from-pink-600 to-purple-600"
  },
  {
    id: "org-5",
    name: "TemanKita – Bandung Chapter",
    role: "Team Building PIC | Active Member",
    period: "2025–2026",
    category: "Community & Learning",
    description: [
      "Led, designed, and executed Team Building projects to strengthen togetherness and board appreciation",
      "Actively engaged in community events execution and social media content creation"
    ],
    skillsGained: ["Team Bonding Design", "Community Building", "Content Creation"],
    coverGradient: "from-rose-600 to-pink-500"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Java Programming Award of Completion",
    issuer: "Oracle Academy",
    year: "2024",
    type: "Award",
    iconName: "Code2",
    certificateUrl: "/certificates/CertificateOracleSems2.pdf",
    fileType: "pdf"
  },
  {
    id: "cert-2",
    title: "Database Design Award of Completion",
    issuer: "Oracle Academy",
    year: "2025",
    type: "Award",
    iconName: "Database",
    certificateUrl: "/certificates/oracle-database-design-2025.pdf",
    fileType: "pdf"
  },
  {
    id: "cert-3",
    title: "Database Programming with SQL Award",
    issuer: "Oracle Academy",
    year: "2025",
    type: "Award",
    iconName: "FileCode",
    certificateUrl: "/certificates/oracle-sql-programming-2025.pdf",
    fileType: "pdf"
  },
  {
    id: "cert-4",
    title: "Certificate of Accomplishment SAP (System Application & Product)",
    issuer: "edugate",
    year: "2025",
    type: "Course",
    iconName: "Cpu",
    certificateUrl: "/certificates/sap-edugate-2025.pdf",
    fileType: "pdf"
  },
  {
    id: "cert-5",
    title: "ACAD CSIRT SUMMIT 2025 Participant",
    issuer: "CSIRT Summit Committee",
    year: "2025",
    type: "Event",
    iconName: "ShieldCheck",
    certificateUrl: "/certificates/Sertifikat_-_ACAD_CSIRT_SUMMIT_2025.pdf",
    fileType: "pdf"
  },
  {
    id: "cert-6",
    title: "Kuliah Umum 2025 & Dies Natalis Teknik Informatika 2025 - Event Coordinator & MC",
    issuer: "HIMATIF",
    year: "2025",
    type: "Event",
    iconName: "Mic",
    certificateUrl: "/certificates/Sertifikat kulum 2025.png",
    fileType: "image"
  },
  {
    id: "cert-8",
    title: "Morris 2025 Mentor Group",
    issuer: "HIMATIF",
    year: "2025",
    type: "Event",
    iconName: "Award",
    certificateUrl: "/certificates/Sertif Panitia Morris'25.pdf",
    fileType: "pdf"
  },
  {
    id: "cert-7",
    title: "Yudisium Event Coordinator & MC",
    issuer: "HIMATIF",
    year: "2025",
    type: "Event",
    iconName: "Mic",
    certificateUrl: "/certificates/005-yudisium-2025.pdf",
    fileType: "pdf"
  }
];

export const SKILLS_DATA = {
  qaTesting: [
    { name: "Manual & Exploratory Testing", level: 90 },
    { name: "Test Case & Scenario Design", level: 92 },
    { name: "Katalon Studio Automation", level: 88 },
    { name: "User Acceptance Testing (UAT)", level: 88 },
    { name: "Bug Verification & Tracking", level: 92 },
    { name: "Test Summary Reporting", level: 90 }
  ],
  hardSkills: [
    { name: "Python", level: 88 },
    { name: "JavaScript & Node.js", level: 86 },
    { name: "PHP Laravel", level: 82 },
    { name: "C# & .NET", level: 80 },
    { name: "MySQL & MongoDB", level: 85 },
    { name: "RESTful API Integration", level: 88 },
    { name: "UI/UX Design (Figma)", level: 84 },
    { name: "Go & Java", level: 75 }
  ],
  softSkills: [
    "Leadership & Division Management",
    "Public Speaking & Master of Ceremony (MC)",
    "Effective Problem Solving & High Attention to Detail",
    "Time Management & Task Organization",
    "Cross-functional Team Collaboration",
    "High Discipline & Accountability"
  ],
  languages: [
    { name: "Indonesian", detail: "Native / Active", proficiency: 100 },
    { name: "English", detail: "Intermediate (80%)", proficiency: 80 }
  ]
};
