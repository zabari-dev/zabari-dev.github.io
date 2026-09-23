import React from 'react';
import { Terminal, Database, Layout, Wrench, CheckCircle2, Code } from 'lucide-react';
import { skillCategories } from '../data/profileData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Backend')) return <Terminal size={20} color="var(--accent-blue)" />;
    if (category.includes('Database')) return <Database size={20} color="var(--accent-green)" />;
    if (category.includes('Frontend')) return <Layout size={20} color="var(--accent-purple)" />;
    if (category.includes('DevOps')) return <Wrench size={20} color="#E3B341" />;
    return <CheckCircle2 size={20} color="#F78166" />;
  };

  return (
    <section id="skills" className="section-padding" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Code size={14} /> Technology Stack
          </span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Categorized technical proficiencies, frameworks, database systems, and software engineering practices.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{
                  padding: '0.5rem',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{cat.category}</h3>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
                {cat.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-blue)', display: 'inline-block' }}></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
