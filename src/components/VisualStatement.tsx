import React from 'react';
import { ScribbleUnderline, StarDecoration } from './Decorations';

export const VisualStatement: React.FC = () => {
  return (
    <section style={{ padding: '90px 20px', position: 'relative', textAlign: 'center', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)', transition: 'background-color 0.3s ease' }}>
      
      <StarDecoration size={24} color="#F5C518" style={{ margin: '0 auto 1.25rem auto' }} />

      <div className="container" style={{ maxWidth: '850px' }}>
        <h2 className="editorial-title" style={{ fontSize: 'clamp(44px, 6vw, 84px)', color: 'var(--display-blue)', lineHeight: 0.95, marginBottom: '0.85rem' }}>
          BUILD.<br />
          DEBUG.<br />
          OPTIMIZE.
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <ScribbleUnderline color="#F06458" />
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.55 }}>
          Engineering business-critical software solutions with a focus on code quality, execution performance, and long-term system stability.
        </p>
      </div>
    </section>
  );
};
