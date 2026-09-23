import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { experienceData } from '../../data/profileData';

export const ExperienceSheetElement: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default open SANeForce

  const toggleItem = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="flatlay-object paper-aged-bg rotate-1" style={{ padding: '2rem 1.75rem', borderRadius: '4px', zIndex: 15, position: 'relative' }}>
      
      {/* Metallic Staple at Top Left */}
      <div style={{ position: 'absolute', top: '12px', left: '24px', width: '24px', height: '6px', backgroundColor: '#94A3B8', border: '1px solid #475569', borderRadius: '2px', transform: 'rotate(-4deg)' }}></div>

      {/* Coffee Stain Ring Watermark */}
      <svg style={{ position: 'absolute', top: '20px', right: '30px', width: '120px', height: '120px', opacity: 0.12, pointerEvents: 'none' }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" stroke="#78350F" strokeWidth="8" fill="none" strokeDasharray="14 6" />
      </svg>

      {/* Header matching reference image: "the experience shop" */}
      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span style={{ fontSize: '0.9rem', color: '#64748B', fontFamily: 'var(--font-mono)', textTransform: 'lowercase' }}>
          the
        </span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', lineHeight: 0.95, textTransform: 'lowercase', letterSpacing: '-0.03em' }}>
          experience <br />
          <span style={{ fontSize: '1.6rem', fontWeight: 600, color: '#475569' }}>shop</span>
        </h2>
      </div>

      {/* Role Items with Dot Leaders */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experienceData.map((exp, idx) => {
          const isOpen = expandedIndex === idx;

          return (
            <div
              key={idx}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '1.2rem',
                boxShadow: isOpen ? '0 6px 16px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => toggleItem(idx)}
            >
              {/* Dot Leader Row */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                    {exp.role}
                  </h3>
                  {/* Circled in red ink highlight for senior role */}
                  {idx === 0 && (
                    <span style={{ border: '2px solid #DC2626', borderRadius: '20px', padding: '0.1rem 0.4rem', fontSize: '0.7rem', color: '#DC2626', fontWeight: 700, fontFamily: 'var(--font-handwritten)' }}>
                      Senior
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: '#1D4ED8' }}>
                    {exp.period}
                  </span>
                  {isOpen ? <ChevronUp size={18} color="#64748B" /> : <ChevronDown size={18} color="#64748B" />}
                </div>
              </div>

              <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '0.2rem', fontWeight: 600 }}>
                {exp.company} • {exp.domain}
              </div>

              {/* Unfolded Detailed Content */}
              {isOpen && (
                <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px dashed #CBD5E1' }}>
                  <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                    Key Engineering Responsibilities:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.9rem', color: '#334155', lineHeight: 1.5 }}>
                        <ChevronRight size={14} color="#1D4ED8" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="badge" style={{ backgroundColor: '#F1F5F9', color: '#1E293B', fontSize: '0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
