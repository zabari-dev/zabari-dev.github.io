import React from 'react';
import { experienceData } from '../data/experience';
import { skillGroups, educationData } from '../data/skills';
import { StarDecoration } from './Decorations';

export const ExperienceEducationSkills: React.FC = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Balanced 3-Column Desktop Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'stretch' }} className="three-col-grid">
          
          {/* Column 1: Experience (Subtle Lime Organic Blob) */}
          <div
            className="blob-lime"
            style={{
              padding: '2rem 1.75rem',
              position: 'relative',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2 className="editorial-title" style={{ fontSize: '2rem', color: 'inherit', marginBottom: '1.25rem' }}>
              Experience
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experienceData.map((exp, idx) => (
                <div key={idx} style={{ position: 'relative', paddingLeft: '1rem', borderLeft: '2px solid var(--display-blue)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--display-blue)', display: 'block', marginBottom: '0.15rem' }}>
                    {exp.period}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'inherit', lineHeight: 1.25 }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.9, marginTop: '0.1rem' }}>
                    {exp.company}
                  </p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.75, marginTop: '0.15rem' }}>
                    {exp.domain}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education (Subtle Lavender Organic Blob) */}
          <div
            className="blob-lavender"
            style={{
              padding: '2rem 1.75rem',
              position: 'relative',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h2 className="editorial-title" style={{ fontSize: '2rem', color: 'inherit', marginBottom: '1.25rem' }}>
                Education
              </h2>

              <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #F06458' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#F06458', display: 'block', marginBottom: '0.15rem' }}>
                  BACHELOR OF ENGINEERING
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'inherit', lineHeight: 1.25, marginBottom: '0.25rem' }}>
                  {educationData.field}
                </h3>
                <p style={{ fontSize: '0.88rem', opacity: 0.9, fontWeight: 700 }}>
                  {educationData.institution}
                </p>
                <p style={{ fontSize: '0.8rem', opacity: 0.75, marginTop: '0.15rem' }}>
                  {educationData.location}
                </p>
              </div>
            </div>

            <StarDecoration size={20} color="#F5C518" style={{ marginTop: '1.5rem' }} />
          </div>

          {/* Column 3: Skills (Subtle Yellow Organic Blob) */}
          <div id="skills"
            className="blob-yellow"
            style={{
              padding: '2rem 1.75rem',
              position: 'relative',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h2 className="editorial-title" style={{ fontSize: '2rem', color: 'inherit', marginBottom: '1.25rem' }}>
              Skills
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {/* Primary Backend Skills - Emphasized */}
              {skillGroups[0].skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    color: 'var(--display-blue)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '16px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}
                >
                  {skill}
                </span>
              ))}

              {/* Database & Tools Skills */}
              {skillGroups[1].skills.concat(skillGroups[3].skills).slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: 'var(--tag-bg)',
                    color: 'var(--tag-text)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '16px'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .three-col-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};
