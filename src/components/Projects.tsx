import React from 'react';
import { Lock, Database, Server, Cpu } from 'lucide-react';
import { projectData } from '../data/projects';

export const Projects: React.FC = () => {
  const getTechnicalVisual = (type: string) => {
    switch (type) {
      case 'healthcare':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Server size={38} color="#059669" />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-calibri)', fontWeight: 700, color: '#047857' }}>
              REST API & Practice Management Architecture
            </span>
          </div>
        );
      case 'portal':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Cpu size={38} color="#BE185D" />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-calibri)', fontWeight: 700, color: '#9D174D' }}>
              Patient Portal & UTC Appointment Services
            </span>
          </div>
        );
      default:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Database size={38} color="#1D4ED8" />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-calibri)', fontWeight: 700, color: '#1E40AF' }}>
              Warehouse, Inventory & Sales T-SQL Data Engine
            </span>
          </div>
        );
    }
  };

  return (
    <section id="work" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="editorial-title" style={{ color: 'var(--display-blue)', lineHeight: 0.95 }}>
              SELECTED <br />
              WORK
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '400px' }}>
            A selection of enterprise and backend engineering work built across Healthcare and FMCG domains.
          </p>
        </div>

        {/* 3-Column Equal Height Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="projects-grid">
          {projectData.map((project, idx) => (
            <div key={idx} className="card-white" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
              
              {/* Soft Visual Background Header Block */}
              <div style={{ backgroundColor: project.visualBgColor, height: '190px', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {getTechnicalVisual(project.architectureDiagramType)}
                
                <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#FFFFFF', color: '#111111', fontWeight: 700, fontSize: '0.72rem', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.5rem', letterSpacing: '0.01em' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA Bar */}
                <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Lock size={12} color="#F06458" /> ENTERPRISE PROJECT
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
