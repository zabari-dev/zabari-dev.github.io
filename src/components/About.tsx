import React from 'react';
import { ScribbleUnderline, StarDecoration } from './Decorations';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '3rem', alignItems: 'center' }} className="about-grid">
          
          {/* Left Column: Heading */}
          <div style={{ position: 'relative' }}>
            <h2 className="editorial-title" style={{ color: '#1749D1', lineHeight: 0.95 }}>
              ABOUT <br />
              ME!
            </h2>
            <ScribbleUnderline color="#F06458" />
            <StarDecoration size={20} color="#F5C518" style={{ position: 'absolute', top: '-12px', right: '35%' }} />
          </div>

          {/* Right Column: Paragraphs + Quote Blob */}
          <div>
            <div style={{ color: 'var(--text-dark)', fontSize: '1.05rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {profileData.aboutText.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Lavender Quote Badge */}
            <div
              className="blob-lavender"
              style={{
                padding: '1.25rem 1.75rem',
                display: 'inline-block',
                borderRadius: '20px',
                transform: 'rotate(-1.5deg)',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--display-blue)', display: 'block', lineHeight: 1.1, fontStyle: 'italic' }}>
                Build. Debug. Optimize.
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginTop: '0.2rem', display: 'block', letterSpacing: '0.04em' }}>
                [ 3+ YEARS ENTERPRISE SOFTWARE ENGINEERING ]
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};
