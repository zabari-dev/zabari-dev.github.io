import React from 'react';
import { GraduationCap, ShieldCheck } from 'lucide-react';
import { educationData } from '../data/profileData';

export const Education: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="edu-grid">
          
          {/* Left Column: Education */}
          <div className="card" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                padding: '0.5rem',
                borderRadius: '6px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-blue)'
              }}>
                <GraduationCap size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Education</h3>
            </div>

            <div style={{ paddingLeft: '0.5rem', borderLeft: '2px solid var(--border-color)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {educationData.degree}
              </h4>
              <p style={{ color: 'var(--accent-blue)', fontSize: '0.95rem', fontWeight: 500, margin: '0.2rem 0' }}>
                {educationData.field}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {educationData.institution} • {educationData.location}
              </p>
            </div>
          </div>

          {/* Right Column: Domain & Strengths Summary */}
          <div className="card" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                padding: '0.5rem',
                borderRadius: '6px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-green)'
              }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Domain Knowledge & Focus</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem' }}>
                  Industry Domains:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {educationData.domains.map((domain) => (
                    <span key={domain} className="badge badge-primary" style={{ fontSize: '0.8rem' }}>
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem' }}>
                  Core Strengths:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {educationData.strengths.map((str) => (
                    <span key={str} className="badge" style={{ fontSize: '0.8rem' }}>
                      {str}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
