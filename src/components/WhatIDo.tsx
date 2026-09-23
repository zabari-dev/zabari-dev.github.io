import React from 'react';
import { Code, Database, Building2, RefreshCw, Wrench, ArrowUpRight } from 'lucide-react';

export const WhatIDo: React.FC = () => {
  const cards = [
    {
      title: "BACKEND DEVELOPMENT",
      description: "Building maintainable backend services and REST APIs using C#, .NET and ASP.NET Core.",
      icon: <Code size={20} color="#1749D1" />,
      circleBg: "#DCE7FF"
    },
    {
      title: "DATABASE ENGINEERING",
      description: "SQL Server, T-SQL, stored procedures, query optimization and database performance tuning.",
      icon: <Database size={20} color="#059669" />,
      circleBg: "#D1FAE5"
    },
    {
      title: "ENTERPRISE SYSTEMS",
      description: "Developing business-critical applications across Healthcare and FMCG domains.",
      icon: <Building2 size={20} color="#D97706" />,
      circleBg: "#FEF3C7"
    },
    {
      title: "APPLICATION MODERNIZATION",
      description: "Modernizing legacy application modules toward modular & microservices architectures.",
      icon: <RefreshCw size={20} color="#7C3AED" />,
      circleBg: "#EDE9FE"
    },
    {
      title: "PRODUCTION ENGINEERING",
      description: "Root-cause analysis, production support, debugging and performance investigation.",
      icon: <Wrench size={20} color="#DC2626" />,
      circleBg: "#FEE2E2"
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="editorial-title" style={{ color: '#1749D1' }}>
            What I Do
          </h2>
        </div>

        {/* 5-Column Desktop Grid in ONE ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }} className="what-i-do-grid">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="card-white"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '240px',
                maxHeight: '280px',
                padding: '1.25rem'
              }}
            >
              <div>
                <div className="icon-circle" style={{ backgroundColor: card.circleBg, width: '40px', height: '40px', marginBottom: '0.85rem' }}>
                  {card.icon}
                </div>

                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.5rem', letterSpacing: '0.02em', lineHeight: 1.25 }}>
                  {card.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.45 }}>
                  {card.description}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto', paddingTop: '0.5rem' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--tag-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dark)' }}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1100px) {
          .what-i-do-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .what-i-do-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
