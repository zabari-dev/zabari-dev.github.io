import React from 'react';
import { Terminal, Database, Wrench, Layout } from 'lucide-react';
import { skillCategories } from '../../data/profileData';

export const SkillsStickyNote: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Backend')) return <Terminal size={18} color="#0D47A1" />;
    if (category.includes('Database')) return <Database size={18} color="#1B5E20" />;
    if (category.includes('DevOps')) return <Wrench size={18} color="#E65100" />;
    return <Layout size={18} color="#4A148C" />;
  };

  return (
    <div id="skills-note" className="paper-card paper-blue" style={{ position: 'relative' }}>
      
      {/* Masking Tape */}
      <div className="masking-tape"></div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 className="handwritten-title" style={{ color: '#01579B' }}>
          technical skills
        </h2>
        <div style={{ width: '110px', height: '3px', backgroundColor: '#0288D1', marginTop: '0.2rem', opacity: 0.7 }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid #B3E5FC',
              borderRadius: '6px',
              padding: '1.25rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              {getCategoryIcon(cat.category)}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#01579B' }}>
                {cat.category}
              </h3>
            </div>

            <p style={{ fontSize: '0.82rem', color: '#546E7A', marginBottom: '1rem' }}>
              {cat.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '0.35rem 0.65rem',
                    borderRadius: '4px',
                    backgroundColor: '#E1F5FE',
                    border: '1px solid #81D4FA',
                    color: '#0277BD',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0288D1' }}></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
