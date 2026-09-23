import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { projectData } from '../../data/profileData';

export const ProjectsFolderElement: React.FC = () => {
  const [openProject, setOpenProject] = useState<number | null>(0); // Open MedTech by default

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <div className="flatlay-object paper-cream-bg rotate-2" style={{ padding: '1.75rem', borderRadius: '4px', zIndex: 17 }}>
      
      {/* Scotch Tape Top Right */}
      <div className="scotch-tape tape-top-right"></div>

      <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '2.4rem', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>
            selected work
          </h2>
          <div style={{ width: '110px', height: '3px', backgroundColor: '#2563EB', marginTop: '0.2rem', opacity: 0.8 }}></div>
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#64748B' }}>
          [ Click project paper to unfold ]
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {projectData.map((project, index) => {
          const isOpen = openProject === index;

          return (
            <div
              key={index}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '1.2rem',
                boxShadow: isOpen ? '0 8px 24px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => toggleProject(index)}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <div>
                  <span className="badge badge-primary" style={{ fontSize: '0.72rem', marginBottom: '0.3rem', display: 'inline-block' }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A' }}>
                    {project.title}
                  </h3>
                </div>

                {isOpen ? <ChevronUp size={18} color="#2563EB" /> : <ChevronDown size={18} color="#64748B" />}
              </div>

              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                {project.description}
              </p>

              {/* Stack Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {project.tech.map((t) => (
                  <span key={t} className="badge" style={{ backgroundColor: '#F1F5F9', color: '#1E293B', fontSize: '0.72rem' }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Unfolded Details */}
              {isOpen && (
                <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px dashed #CBD5E1' }}>
                  <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                    Backend Highlights:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.85rem', color: '#334155', lineHeight: 1.45 }}>
                        <CheckCircle2 size={14} color="#10B981" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
