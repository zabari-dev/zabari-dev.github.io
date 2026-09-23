export interface InsightItem {
  id: string;
  title: string;
  subtitle: string;
  steps: string[];
}

export const insightsData: InsightItem[] = [
  {
    id: "sql-performance",
    title: "SQL PERFORMANCE",
    subtitle: "How I approach slow database queries",
    steps: [
      "Identify Slow Query",
      "Analyze Execution Plan",
      "Review Joins / Filters",
      "Evaluate Indexes",
      "Optimize Procedure",
      "Validate Speed"
    ]
  },
  {
    id: "production-rca",
    title: "PRODUCTION RCA",
    subtitle: "From issue to root cause resolution",
    steps: [
      "Reproduce Defect",
      "Trace Data Flow",
      "Identify Root Cause",
      "Implement Fix",
      "Validate End-to-End",
      "Deploy & Monitor"
    ]
  },
  {
    id: "legacy-modernization",
    title: "LEGACY MODERNIZATION",
    subtitle: "From monolith to modular architecture",
    steps: [
      "Audit Legacy Code",
      "Module Boundaries",
      "Introduce API Layer",
      "Service Separation",
      "Microservices"
    ]
  }
];
