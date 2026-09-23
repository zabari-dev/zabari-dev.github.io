export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  headline: string;
  supportingText: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  statusText: string;
  aboutText: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  domain: string;
  responsibilities: string[];
  techStack: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
  category: string;
}

export interface EngineeringWorkflow {
  title: string;
  category: string;
  description: string;
  steps: string[];
}

export interface RecommendedProject {
  title: string;
  description: string;
  keyDemonstration: string[];
  stack: string[];
}

export const profileData: Profile = {
  name: "Sabarinathan S",
  title: "Senior Software Developer",
  subtitle: ".NET Backend Developer",
  headline: "Building reliable enterprise backend systems with C#, .NET and SQL Server.",
  supportingText: "3+ years of experience building, modernizing and optimizing enterprise applications across Healthcare and FMCG domains.",
  location: "Vedaranyam, Tamil Nadu, India",
  email: "sabaricontactmail@gmail.com",
  linkedin: "https://linkedin.com/in/sabaridev",
  github: "https://github.com/zabari-dev",
  resumeUrl: "./resume.pdf",
  statusText: "Open to backend software engineering opportunities",
  aboutText: [
    "I am a Senior .NET Backend Developer with 3+ years of experience designing, developing, and optimizing enterprise-grade applications using C#, .NET Framework, ASP.NET Core, ASP.NET Web Forms, ASP.NET Web API, RESTful APIs, SQL Server, Entity Framework Core, Dapper, LINQ, and Microservices architecture.",
    "My experience spans Healthcare and FMCG domains, with a strong focus on backend development, API integration, SQL query optimization, database performance tuning, production support, root-cause analysis, and legacy application modernization.",
    "I work with engineering practices including Object-Oriented Programming, SOLID Principles, Repository Pattern, Dependency Injection, Agile/Scrum, Git, Azure DevOps, and full SDLC ownership."
  ]
};

export const focusAreas: FocusArea[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Designing scalable services, RESTful APIs, and business logic layers with robust architecture.",
    tech: ["C#", ".NET Framework", "ASP.NET Core", "Web API", "RESTful APIs"]
  },
  {
    id: "database",
    title: "Database Engineering",
    description: "Crafting efficient database schemas, T-SQL procedures, complex views, and high-throughput data layers.",
    tech: ["SQL Server", "T-SQL", "Stored Procedures", "Views", "Functions", "Query Optimization"]
  },
  {
    id: "enterprise",
    title: "Enterprise Applications",
    description: "Engineering business-critical, high-availability platforms in Healthcare and FMCG domains.",
    tech: ["Warehouse", "Inventory", "Batch Management", "Sales & Distribution", "Practice Management"]
  },
  {
    id: "performance",
    title: "Performance Engineering",
    description: "SQL execution plan analysis, index tuning, query optimization, and enterprise report acceleration.",
    tech: ["Execution Plans", "SQL Indexing", "Dapper", "EF Core", "Query Tuning"]
  },
  {
    id: "modernization",
    title: "Application Modernization",
    description: "Refactoring legacy monolithic architectures into maintainable, modular microservices.",
    tech: ["Microservices", "Service Boundaries", "Repository Pattern", "Dependency Injection"]
  },
  {
    id: "production",
    title: "Production Engineering",
    description: "Rigorous root-cause analysis, production support, data flow tracing, and system stability maintenance.",
    tech: ["Root Cause Analysis", "Production Debugging", "IIS", "System Health Monitoring"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend Development",
    description: "Core server-side engineering and API architecture",
    skills: ["C#", ".NET Framework", ".NET Core", "ASP.NET Core", "ASP.NET Web Forms", "ASP.NET Web API", "RESTful APIs", "Dapper", "LINQ", "Microservices"]
  },
  {
    category: "Database & Data Layer",
    description: "Database design, query tuning, and ORMs",
    skills: ["SQL Server", "T-SQL", "Entity Framework Core", "Stored Procedures", "Views", "Functions", "Query Optimization", "Database Performance Tuning"]
  },
  {
    category: "Frontend Knowledge (Supporting)",
    description: "Supporting web interface technologies",
    skills: ["Angular", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
  },
  {
    category: "DevOps & Tools",
    description: "Development, debugging, and deployment environment",
    skills: ["Azure DevOps", "Git", "Visual Studio", "Postman", "IIS", "SQL Server Management Studio (SSMS)", "CI/CD Workflows"]
  },
  {
    category: "Engineering Practices",
    description: "Software design principles and delivery workflows",
    skills: ["OOP", "SOLID Principles", "Repository Pattern", "Dependency Injection", "Agile/Scrum", "Full SDLC", "Production Support", "Root Cause Analysis"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "SANeForce Pvt. Ltd.",
    role: "Senior Software Developer",
    location: "Chennai, Tamil Nadu",
    period: "Apr 2026 – Present",
    domain: "FMCG Enterprise Platform – Sales Force Automation",
    responsibilities: [
      "Develop and maintain enterprise FMCG applications using C#, ASP.NET Web Forms, .NET Framework, and SQL Server.",
      "Work across core enterprise business modules including Warehouse, Inventory, Batch Management, Sales, and Distribution.",
      "Develop and optimize SQL Server stored procedures, views, functions, and complex T-SQL queries.",
      "Engineered enterprise reporting solutions handling complex data aggregations and business metrics.",
      "Investigate production issues, perform root-cause analysis (RCA), and deliver robust stability fixes.",
      "Improve application and report query performance through execution plan analysis and index tuning.",
      "Collaborate with business stakeholders to translate domain requirements into scalable backend solutions within Agile delivery cycles."
    ],
    techStack: ["C#", ".NET Framework", "ASP.NET Web Forms", "SQL Server", "T-SQL", "REST APIs", "JavaScript", "jQuery", "Git", "Azure DevOps", "IIS"]
  },
  {
    company: "Inlogic Technologies Pvt. Ltd.",
    role: "Software Developer",
    location: "Chennai, Tamil Nadu",
    period: "Dec 2022 – Mar 2026",
    domain: "Enterprise Healthcare Applications",
    responsibilities: [
      "Developed scalable backend applications using C#, .NET Framework, ASP.NET Core, SQL Server, EF Core, Dapper, and LINQ.",
      "Modernized legacy monolithic healthcare applications by re-architecting core modules into microservices.",
      "Applied clean architecture principles including Repository Pattern, Dependency Injection, and SOLID design rules.",
      "Collaborated with frontend developers implementing Angular interfaces to integrate with backend REST APIs.",
      "Owned full SDLC activities from requirements gathering through deployment and post-release production support.",
      "Utilized Azure DevOps for sprint planning and CI/CD pipelines, Git for version control, and Postman for API testing."
    ],
    techStack: ["C#", ".NET Core", "ASP.NET Core", "SQL Server", "EF Core", "Dapper", "REST APIs", "Microservices", "Angular", "Azure DevOps", "Git"]
  }
];

export const projectData: ProjectItem[] = [
  {
    title: "MedTech Evolution",
    description: "Enterprise healthcare practice management system designed for medical practice operational workflows.",
    role: "Backend / .NET Developer",
    category: "Healthcare Domain",
    tech: ["C#", "ASP.NET Core", "SQL Server", "REST APIs", "Dapper"],
    highlights: [
      "Built modular backend services and RESTful APIs powering clinical workflow integration.",
      "Designed and optimized SQL Server stored procedures for fast data access.",
      "Implemented Repository Pattern and Dependency Injection to ensure clean separation of concerns."
    ]
  },
  {
    title: "Manage My Health",
    description: "Patient portal platform facilitating patient-provider communication and appointment scheduling.",
    role: "Backend Developer",
    category: "Healthcare Domain",
    tech: ["ASP.NET Core", "C#", "SQL Server", "REST APIs"],
    highlights: [
      "Engineered secure RESTful API services handling patient data exchange.",
      "Designed appointment scheduling business logic with UTC-based multi-timezone handling.",
      "Optimized backend query execution for fast portal response times."
    ]
  },
  {
    title: "FMCG Sales Force Automation Platform",
    description: "Enterprise platform managing sales force workflows, distribution networks, and inventory logistics.",
    role: "Senior Software Developer",
    category: "FMCG Domain",
    tech: ["C#", ".NET Framework", "SQL Server", "T-SQL", "Stored Procedures"],
    highlights: [
      "Delivered backend architecture across Warehouse, Inventory, Batch Management, and Distribution modules.",
      "Created enterprise reporting solutions with complex T-SQL queries and procedures.",
      "Performed continuous performance tuning and production issue root-cause analysis."
    ]
  }
];

export const engineeringWorkflows: EngineeringWorkflow[] = [
  {
    title: "SQL Query & Database Optimization",
    category: "Database Performance",
    description: "Methodical engineering process for identifying and accelerating slow database queries.",
    steps: [
      "Identify Slow Query / Procedure via Profiler or Execution Stats",
      "Analyze SQL Execution Plan for Table Scans and High Cost Operators",
      "Review Joins, Filter Predicates, and Parameter Sniffing Scenarios",
      "Evaluate & Apply Missing Indexes or Re-structure T-SQL Queries",
      "Validate Execution Plan, IO Statistics & Benchmark Query Speed"
    ]
  },
  {
    title: "Production Root Cause Analysis (RCA)",
    category: "Production Support",
    description: "Systematic investigation workflow for resolving high-priority production defects.",
    steps: [
      "Capture Exception Trace & Reproduce Issue in Staging Environment",
      "Trace Data Flow from API Gateway -> Business Service -> Database",
      "Pinpoint Precise Root Cause (State, Null Reference, Query Bottleneck)",
      "Implement Targeted Fix adhering to SOLID Principles & Unit Tests",
      "Validate End-to-End Flow & Deploy with Post-Deployment Monitoring"
    ]
  },
  {
    title: "Legacy Monolith Modernization",
    category: "Architecture Modernization",
    description: "Architectural strategy for transitioning legacy monoliths into scalable microservices.",
    steps: [
      "Audit Legacy Monolith Codebase & Map Module Dependencies",
      "Isolate Core Business Logic & Define Service Boundaries",
      "Decouple Shared Schema & Introduce Versioned REST APIs",
      "Apply Repository Pattern & Dependency Injection Framework",
      "Transition Module to Microservice Architecture with Independent Deployments"
    ]
  }
];

export const recommendedProjects: RecommendedProject[] = [
  {
    title: ".NET Microservices Demo",
    description: "Multi-service backend platform demonstrating API Gateway, auth, product, and order services.",
    keyDemonstration: [
      "API Gateway Pattern & JWT Authentication",
      "Independent Service Databases with Docker SQL Server",
      "RESTful Inter-service Communication"
    ],
    stack: ["ASP.NET Core", "C#", "SQL Server", "Docker", "REST APIs", "JWT"]
  },
  {
    title: "SQL Performance Lab",
    description: "Repository benchmarking SQL query optimization techniques before and after indexing/tuning.",
    keyDemonstration: [
      "Before/After execution plan comparison",
      "Index strategy demonstration (Clustered vs Non-Clustered)",
      "Stored Procedure performance benchmarks"
    ],
    stack: ["SQL Server", "T-SQL", "SSMS", "Dapper", ".NET Benchmarking"]
  },
  {
    title: "Clean Architecture ASP.NET Core API",
    description: "Production-ready API template strictly following Clean Architecture and SOLID principles.",
    keyDemonstration: [
      "Domain-Driven Design (DDD) layout",
      "Repository Pattern & Unit of Work",
      "EF Core integration with SQL Server & Unit Testing"
    ],
    stack: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server", "xUnit", "Moq"]
  },
  {
    title: "Enterprise Expense Tracker API",
    description: "Robust REST API for multi-tenant enterprise expense management and reporting.",
    keyDemonstration: [
      "Role-Based Access Control (RBAC)",
      "Complex SQL Aggregation Reports",
      "Clean separation of business & data access layers"
    ],
    stack: ["ASP.NET Core", "SQL Server", "JWT", "REST APIs", "Swagger"]
  }
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Electronics and Communication Engineering",
  institution: "Nehru Institute of Technology",
  location: "Coimbatore, Tamil Nadu",
  domains: ["Healthcare Applications", "FMCG Sales Force Automation", "Enterprise Systems"],
  strengths: ["Backend Development", "SQL Optimization", "Production Support & RCA", "Legacy Modernization", "REST API Engineering"]
};
