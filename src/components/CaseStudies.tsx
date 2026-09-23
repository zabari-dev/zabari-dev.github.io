import React from 'react';
import { Workflow, ArrowRight, Database, AlertCircle, RefreshCw } from 'lucide-react';
import { engineeringWorkflows } from '../data/profileData';

export const CaseStudies: React.FC = () => {
  const getWorkflowIcon = (title: string) => {
    if (title.includes('SQL')) return <Database size={20} color="var(--accent-green)" />;
    if (title.includes('Production')) return <AlertCircle size={20} color="#E3B341" />;
    return <RefreshCw size={20} color="var(--accent-blue)" />;
  };

  return (
    <section id="workflows" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Workflow size={14} /> Engineering Methodology
          </span>
          <h2 className="section-title">Engineering Challenges & Workflows</h2>
          <p className="section-subtitle">
            Systematic engineering processes applied to solve database performance bottlenecks, production issues, and legacy architecture refactoring.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {engineeringWorkflows.map((flow, idx) => (
            <div key={idx} className="card" style={{ backgroundColor: 'var(--bg-primary)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getWorkflowIcon(flow.title)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{flow.title}</h3>
                  </div>
                </div>

                <span className="badge badge-primary">{flow.category}</span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {flow.description}
              </p>

              {/* Step Flow Diagram */}
              <div>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                  Step-by-Step Engineering Execution Flow:
                </h4>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
                  {flow.steps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.6rem 0.9rem',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{
                          color: 'var(--accent-blue)',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          backgroundColor: 'rgba(88, 166, 255, 0.15)',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {sIdx + 1}
                        </span>
                        {step}
                      </div>

                      {sIdx < flow.steps.length - 1 && (
                        <ArrowRight size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
