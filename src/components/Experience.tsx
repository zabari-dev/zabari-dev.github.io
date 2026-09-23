import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/profileData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} /> Career Path
          </span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Track record of backend software development across FMCG Enterprise & Healthcare application platforms.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experienceData.map((exp, index) => (
            <div key={index} className="card" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
              
              {/* Card Header: Role & Company */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <span className="badge badge-primary">{exp.company}</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.88rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} color="var(--accent-blue)" /> {exp.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Briefcase size={14} color="var(--accent-green)" /> {exp.domain}
                    </span>
                  </div>
                </div>

                <div className="badge" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', backgroundColor: 'var(--bg-card)', color: 'var(--accent-blue)', borderColor: 'rgba(88, 166, 255, 0.3)' }}>
                  <Calendar size={14} style={{ marginRight: '0.4rem' }} />
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities list */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  Key Engineering Responsibilities
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <ChevronRight size={16} color="var(--accent-blue)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                  Technologies Applied:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="badge" style={{ fontSize: '0.78rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
