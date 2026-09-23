import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { experienceData } from '../../data/profileData';

export const ExperienceDocument: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default open first

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience-doc" className="paper-card paper-cream" style={{ position: 'relative' }}>
      
      {/* Paperclip */}
      <svg className="paper-clip-visual" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8V34C16 38.4183 12.4183 42 8 42C3.58172 42 0 38.4183 0 34V12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12V32" stroke="#78909C" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="handwritten-title" style={{ color: '#0D47A1' }}>
            experience
          </h2>
          <div style={{ width: '90px', height: '3px', backgroundColor: '#1976D2', marginTop: '0.2rem', opacity: 0.7 }}></div>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#546E7A' }}>
          [ Click entries to unfold details ]
        </span>
      </div>

      {/* Timeline items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {experienceData.map((exp, index) => {
          const isOpen = expandedIndex === index;

          return (
            <div
              key={index}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                border: '1px solid #CFD8DC',
                borderRadius: '6px',
                padding: '1.25rem',
                boxShadow: isOpen ? '0 6px 16px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => toggleExpand(index)}
            >
              
              {/* Header Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1E293B' }}>
                      {exp.role}
                    </h3>
                    <span className="badge" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF', fontWeight: 600 }}>
                      {exp.company}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#64748B', fontSize: '0.88rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={14} color="#2563EB" /> {exp.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Briefcase size={14} color="#059669" /> {exp.domain}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: '#2563EB', backgroundColor: '#F1F5F9', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>
                    <Calendar size={13} style={{ marginRight: '0.3rem', display: 'inline' }} />
                    {exp.period}
                  </span>
                  {isOpen ? <ChevronUp size={20} color="#64748B" /> : <ChevronDown size={20} color="#64748B" />}
                </div>
              </div>

              {/* Expanded Details Body */}
              {isOpen && (
                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed #E2E8F0' }}>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#475569', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                    Core Engineering Responsibilities:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.92rem', color: '#334155', lineHeight: 1.6 }}>
                        <ChevronRight size={15} color="#2563EB" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                      Tech Stack Used:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="badge" style={{ backgroundColor: '#F1F5F9', color: '#0F172A', fontSize: '0.78rem' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
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
