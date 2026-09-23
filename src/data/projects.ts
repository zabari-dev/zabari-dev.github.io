export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
  focus: string[];
  ctaText: string;
  isPrivate: boolean;
  bgBlockClass: string;
  visualBgColor: string;
  architectureDiagramType: 'healthcare' | 'portal' | 'fmcg';
}

export const projectData: ProjectItem[] = [
  {
    title: "MEDTECH EVOLUTION",
    category: "HEALTHCARE",
    description: "Enterprise healthcare practice management system supporting medical operations and patient workflows.",
    tech: ["C#", "ASP.NET Core", "SQL Server", "REST APIs", "Dapper"],
    focus: ["Backend services", "REST API development", "SQL optimization", "Modular architecture"],
    ctaText: "VIEW CASE STUDY →",
    isPrivate: true,
    bgBlockClass: "bg-lime-50",
    visualBgColor: "#ECFCCB",
    architectureDiagramType: 'healthcare'
  },
  {
    title: "MANAGE MY HEALTH",
    category: "HEALTHCARE",
    description: "Patient portal platform supporting patient-provider communication, medical records, and appointment scheduling.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "REST APIs"],
    focus: ["Backend services", "REST APIs", "Appointment scheduling", "UTC-based timezone handling"],
    ctaText: "VIEW DETAILS →",
    isPrivate: true,
    bgBlockClass: "bg-pink-50",
    visualBgColor: "#FCE7F3",
    architectureDiagramType: 'portal'
  },
  {
    title: "FMCG SALES FORCE AUTOMATION",
    category: "FMCG",
    description: "Enterprise Sales Force Automation platform supporting sales, distribution, inventory logistics, and reporting workflows.",
    tech: ["C#", ".NET Framework", "ASP.NET Web Forms", "SQL Server", "T-SQL"],
    focus: ["Warehouse", "Inventory", "Batch Management", "Sales", "Distribution", "Reporting", "SQL optimization"],
    ctaText: "VIEW DETAILS →",
    isPrivate: true,
    bgBlockClass: "bg-blue-50",
    visualBgColor: "#E0F2FE",
    architectureDiagramType: 'fmcg'
  }
];
