export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  domain: string;
  responsibilities: string[];
  techStack: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    period: "2026 — PRESENT",
    role: "Senior Software Developer",
    company: "SANeForce Pvt. Ltd.",
    domain: "FMCG Enterprise Platform — Sales Force Automation",
    responsibilities: [
      "Develop and maintain enterprise FMCG applications using C#, ASP.NET Web Forms, .NET Framework, and SQL Server.",
      "Work across core enterprise business modules including Warehouse, Inventory, Batch Management, Sales, and Distribution.",
      "Develop and optimize SQL Server stored procedures, views, functions, and complex T-SQL queries.",
      "Engineered enterprise reporting solutions handling complex data aggregations and business metrics.",
      "Investigate production issues, perform root-cause analysis (RCA), and deliver robust stability fixes."
    ],
    techStack: ["C#", ".NET Framework", "ASP.NET Web Forms", "SQL Server", "T-SQL", "REST APIs", "Git", "Azure DevOps", "IIS"]
  },
  {
    period: "2022 — 2026",
    role: "Software Developer",
    company: "Inlogic Technologies Pvt. Ltd.",
    domain: "Enterprise Healthcare Applications",
    responsibilities: [
      "Developed scalable backend applications using C#, .NET Framework, ASP.NET Core, SQL Server, EF Core, Dapper, and LINQ.",
      "Modernized legacy monolithic healthcare applications by re-architecting core modules into microservices.",
      "Applied clean architecture principles including Repository Pattern, Dependency Injection, and SOLID design rules.",
      "Collaborated with frontend developers implementing Angular interfaces to integrate with backend REST APIs.",
      "Owned full SDLC activities from requirements gathering through deployment and post-release production support."
    ],
    techStack: ["C#", "ASP.NET Core", "SQL Server", "EF Core", "Dapper", "LINQ", "REST APIs", "Microservices", "Angular", "Azure DevOps"]
  }
];
