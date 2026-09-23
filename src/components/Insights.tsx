import React from 'react';
import { ArrowRight, Database, AlertCircle, RefreshCw } from 'lucide-react';
import { insightsData } from '../data/insights';

export const Insights: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'sql-performance': return <Database size={18} color="#1749D1" />;
      case 'production-rca': return <AlertCircle size={18} color="#F06458" />;
      default: return <RefreshCw size={18} color="#059669" />;
    }
  };

  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Compact Section Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="editorial-title" style={{ color: 'var(--display-blue)', lineHeight: 0.95 }}>
            ENGINEERING <br />
            NOTES
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginTop: '0.4rem', maxWidth: '500px' }}>
            Systematic engineering workflows applied to solve database bottlenecks, production defects, and legacy code refactoring.
          </p>
        </div>

        {/* Compact 3-Card Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="insights-grid">
          {insightsData.map((item) => (
            <div key={item.id} className="card-white" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div className="icon-circle" style={{ backgroundColor: 'var(--tag-bg)', width: '36px', height: '36px' }}>
                    {getIcon(item.id)}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
                  "{item.subtitle}"
                </p>

                {/* Workflow Sequence */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
                  {item.steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.45rem', borderRadius: '4px' }}>
                        {step}
                      </span>
                      {idx < item.steps.length - 1 && (
                        <ArrowRight size={11} color="var(--display-blue)" style={{ flexShrink: 0 }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
