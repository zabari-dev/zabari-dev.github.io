export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "PRIMARY BACKEND",
    skills: ["C#", ".NET Core", "ASP.NET Core", "ASP.NET Web API", "RESTful APIs", "SQL Server", "T-SQL", "Microservices"]
  },
  {
    category: "DATABASE & ORM",
    skills: ["EF Core", "Dapper", "LINQ", "Stored Procedures", "Views", "Functions", "Query Optimization"]
  },
  {
    category: "ENGINEERING PRACTICES",
    skills: ["OOP", "SOLID Principles", "Repository Pattern", "Dependency Injection", "RCA", "Production Support"]
  },
  {
    category: "TOOLS & DEVOPS",
    skills: ["Git", "Azure DevOps", "Visual Studio", "Postman", "IIS", "SSMS", "CI/CD Workflows"]
  },
  {
    category: "SUPPORTING FRONTEND",
    skills: ["Angular", "HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
  }
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Electronics and Communication Engineering",
  institution: "Nehru Institute of Technology",
  location: "Coimbatore, Tamil Nadu"
};
