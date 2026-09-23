import React from 'react';
import { Layers } from 'lucide-react';

export const SkillsFilmElement: React.FC = () => {
  const labelStrips = [
    { title: 'query optimization', color: '#1D4ED8', bg: '#DBEAFE' },
    { title: 'clean architecture', color: '#047857', bg: '#D1FAE5' },
    { title: 'production rca', color: '#B45309', bg: '#FEF3C7' },
    { title: 'agile & azure devops', color: '#6D28D9', bg: '#EDE9FE' },
    { title: 'dapper & ef core', color: '#BE185D', bg: '#FCE7F3' },
  ];

  return (
    <div className="flatlay-object rotate-neg-4" style={{ backgroundColor: 'rgba(241, 245, 249, 0.9)', backdropFilter: 'blur(4px)', border: '1px solid #CBD5E1', padding: '1.25rem', borderRadius: '6px', zIndex: 13 }}>
      
      {/* Film Header Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#0F172A', color: '#38BDF8', padding: '0.3rem 0.6rem', borderRadius: '4px', marginBottom: '0.9rem' }}>
        <Layers size={14} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700 }}>
          skills & competencies
        </span>
      </div>

      {/* Stacked Paper Label Strips */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {labelStrips.map((strip, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: strip.bg,
              color: strip.color,
              padding: '0.4rem 0.75rem',
              borderRadius: '3px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 700,
              boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)',
              transform: `rotate(${((idx % 2 === 0 ? 1 : -1) * 1.2)}deg)`
            }}
          >
            ● {strip.title}
          </div>
        ))}
      </div>

    </div>
  );
};
