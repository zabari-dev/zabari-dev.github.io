export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  primaryTitle: string;
  secondaryTitle: string;
  specialization: string;
  experienceYears: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  photoUrl: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutHeadline: string;
  aboutText: string[];
}

export const profileData: Profile = {
  name: "Sabarinathan S",
  firstName: "Sabarinathan",
  lastName: "S",
  primaryTitle: "SENIOR SOFTWARE DEVELOPER",
  secondaryTitle: ".NET BACKEND DEVELOPER",
  specialization: "C# · .NET · ASP.NET CORE · SQL SERVER · REST APIs · MICROSERVICES",
  experienceYears: "3+ YEARS",
  location: "Tamil Nadu, India",
  email: "sabaricontactmail@gmail.com",
  linkedin: "https://linkedin.com/in/sabaridev",
  github: "https://github.com/zabari-dev",
  resumeUrl: "./Sabarinathan_S_Resume.pdf",
  photoUrl: "./profile/sabari.jpg",
  heroHeadline: "I build reliable backend systems that are scalable, maintainable and thoughtfully engineered.",
  heroSupportingText: "Senior Software Developer with 3+ years of experience building, modernizing and optimizing enterprise applications across Healthcare and FMCG domains.",
  aboutHeadline: "ABOUT ME!",
  aboutText: [
    "I am a Senior .NET Backend Developer with 3+ years of experience designing, developing and optimizing enterprise-grade applications.",
    "My experience spans Healthcare and FMCG domains, with a strong focus on backend development, REST APIs, SQL Server, query optimization, database performance, production support and legacy application modernization.",
    "I enjoy solving the engineering problems behind the interface — from API design and database performance to debugging complex production issues."
  ]
};
