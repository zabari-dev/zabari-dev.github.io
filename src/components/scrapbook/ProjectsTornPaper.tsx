import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { projectData } from '../../data/profileData';

export const ProjectsTornPaper: React.FC = () => {
  const [openProject, setOpenProject] = useState<number | null>(0); // Default open first project

  const toggleProject = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <div id="projects-doc" className="paper-card paper-pink torn-edge" style={{ position: 'relative' }}>
      
      {/* Tape Graphic */}
      <div className="masking-tape masking-tape-right"></div>

      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="handwritten-title" style={{ color: '#880E4F' }}>
            selected work
          </h2>
          <div style={{ width: '120px', height: '3px', backgroundColor: '#C2185B', marginTop: '0.2rem', opacity: 0.7 }}></div>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#880E4F' }}>
          [ Click project card to unfold details ]
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {projectData.map((project, index) => {
          const isOpen = openProject === index;

          return (
            <div
              key={index}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                border: '1px solid #F8BBD0',
                borderRadius: '6px',
                padding: '1.25rem',
                boxShadow: isOpen ? '0 8px 24px rgba(136, 14, 79, 0.15)' : '0 2px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => toggleProject(index)}
            >
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <div>
                  <span className="badge" style={{ backgroundColor: '#FCE4EC', color: '#880E4F', fontWeight: 600, fontSize: '0.75rem', marginBottom: '0.3rem', display: 'inline-block' }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A202C' }}>
                    {project.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {isOpen ? <ChevronUp size={20} color="#880E4F" /> : <ChevronDown size={20} color="#880E4F" />}
                </div>
              </div>

              <p style={{ color: '#4A5568', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                {project.description}
              </p>

              {/* Stack Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: isOpen ? '1.25rem' : '0' }}>
                {project.tech.map((t) => (
                  <span key={t} className="badge" style={{ backgroundColor: '#F7FAFC', color: '#2D3748', fontSize: '0.75rem' }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Unfolded Details */}
              {isOpen && (
                <div style={{ paddingTop: '1rem', borderTop: '1px dashed #F48FB1' }}>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#880E4F', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
                    Engineering Role & Approach:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#2D3748', lineHeight: 1.5 }}>
                        <CheckCircle2 size={15} color="#C2185B" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FDF2F8', padding: '0.6rem 0.9rem', borderRadius: '4px', border: '1px solid #FBCFE8' }}>
                    <span style={{ fontSize: '0.82rem', color: '#9D174D', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <GithubIcon size={16} /> Repository Status:
                    </span>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#BE185D' }}>
                      Enterprise / Private Code
                    </span>
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
