import React from 'react';
import { Server, Database, Building2, Zap, GitBranch, Wrench, Layers } from 'lucide-react';
import { focusAreas } from '../data/profileData';

export const EngineeringFocus: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'backend': return <Server size={22} color="var(--accent-blue)" />;
      case 'database': return <Database size={22} color="var(--accent-green)" />;
      case 'enterprise': return <Building2 size={22} color="var(--accent-purple)" />;
      case 'performance': return <Zap size={22} color="#E3B341" />;
      case 'modernization': return <GitBranch size={22} color="#F78166" />;
      case 'production': return <Wrench size={22} color="#58A6FF" />;
      default: return <Layers size={22} color="var(--accent-blue)" />;
    }
  };

  return (
    <section id="focus" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} /> Core Competencies
          </span>
          <h2 className="section-title">What I Work On</h2>
          <p className="section-subtitle">
            Core technical domains and enterprise engineering responsibilities I own across the software lifecycle.
          </p>
        </div>

        <div className="grid-3">
          {focusAreas.map((area) => (
            <div key={area.id} className="card" style={{ backgroundColor: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {getIcon(area.id)}
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', fontWeight: 600 }}>
                  {area.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {area.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                {area.tech.map((t) => (
                  <span key={t} className="badge" style={{ fontSize: '0.75rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
