import React from 'react';
import { educationData } from '../../data/profileData';

export const EducationGraphElement: React.FC = () => {
  return (
    <div className="flatlay-object graph-paper rotate-neg-2" style={{ padding: '1.5rem', borderRadius: '4px', zIndex: 11, border: '1px solid #CBD5E1' }}>
      
      {/* Masking Tape Top */}
      <div className="scotch-tape tape-top-left"></div>

      {/* Torn Header Slip: "education" */}
      <div style={{ backgroundColor: '#E2E8F0', padding: '0.4rem 0.8rem', display: 'inline-block', borderRadius: '2px', marginBottom: '1rem', border: '1px solid #94A3B8', transform: 'rotate(-1.5deg)' }}>
        <h3 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>
          education & domain focus
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        {/* Degree */}
        <div style={{ borderLeft: '3px solid #2563EB', paddingLeft: '0.75rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>
            {educationData.degree}
          </h4>
          <p style={{ fontSize: '0.85rem', color: '#2563EB', fontWeight: 600 }}>
            {educationData.field}
          </p>
          <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
            {educationData.institution} • {educationData.location}
          </p>
        </div>

        {/* Industry Domains */}
        <div>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
            Enterprise Domains:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {educationData.domains.map((d) => (
              <span key={d} className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                {d}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
