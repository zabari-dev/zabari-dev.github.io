import React from 'react';
import { ArrowRight, FileText, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { profileData } from '../../data/profileData';

export const ProfileCardNote: React.FC = () => {
  return (
    <div className="paper-card paper-cream" style={{ position: 'relative', overflow: 'visible' }}>
      
      {/* Paperclip Graphic */}
      <svg className="paper-clip-visual" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8V34C16 38.4183 12.4183 42 8 42C3.58172 42 0 38.4183 0 34V12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12V32" stroke="#9E9E9E" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Masking Tape */}
      <div className="masking-tape masking-tape-right"></div>

      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.75rem', alignItems: 'center' }} className="profile-grid">
        
        {/* Tasteful Developer Portrait / Avatar Box */}
        <div
          style={{
            width: '130px',
            height: '140px',
            backgroundColor: '#1E242B',
            borderRadius: '6px',
            border: '2px solid #3A4450',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.75rem',
            textAlign: 'center',
            boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.4)',
            color: '#58A6FF',
            position: 'relative'
          }}
        >
          <User size={54} strokeWidth={1.5} />
          <span style={{ fontSize: '0.7rem', color: '#8B949E', marginTop: '0.4rem', fontFamily: 'var(--font-mono)' }}>
            [ .NET ENGINEER ]
          </span>
        </div>

        {/* Identity & Core Stack */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', display: 'inline-block', marginRight: '0.3rem' }}></span>
              {profileData.statusText}
            </span>
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {profileData.name}
          </h1>

          <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1E40AF', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
            {profileData.title} <span style={{ color: '#64748B', fontWeight: 400 }}>|</span> {profileData.subtitle}
          </p>

          <p style={{ color: '#334155', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: '1.25rem', maxWidth: '580px' }}>
            {profileData.supportingText}
          </p>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
            {['C#', '.NET Core', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'Microservices', 'Dapper'].map((tech) => (
              <span key={tech} className="badge" style={{ backgroundColor: '#E2E8F0', color: '#1E293B', fontWeight: 600, fontSize: '0.78rem' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <a href="#contact-note" className="btn btn-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.9rem' }}>
              Contact Me <ArrowRight size={16} />
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.55rem 1rem', fontSize: '0.9rem' }}>
              <GithubIcon size={16} /> GitHub
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.55rem 1rem', fontSize: '0.9rem' }}>
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a href={profileData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.55rem 1rem', fontSize: '0.9rem' }}>
              <FileText size={16} /> Resume PDF
            </a>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .profile-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
