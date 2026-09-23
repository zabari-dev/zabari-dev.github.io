import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { profileData } from '../../data/profileData';

export const ProfileCardElement: React.FC = () => {
  return (
    <div className="flatlay-object paper-cream-bg rotate-neg-3" style={{ padding: '1.5rem', borderRadius: '4px', zIndex: 10 }}>
      
      {/* Brass Paperclip Hanging Off Top Left */}
      <svg className="brass-paperclip" viewBox="0 0 24 48" fill="none">
        <path d="M16 8V34C16 38.4183 12.4183 42 8 42C3.58172 42 0 38.4183 0 34V12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12V32" stroke="#D97706" strokeWidth="2.8" strokeLinecap="round" />
      </svg>

      {/* Masking Tape Top Right */}
      <div className="scotch-tape tape-top-right"></div>

      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
        
        {/* Printed Photo Frame Placeholder */}
        <div
          style={{
            width: '120px',
            height: '135px',
            backgroundColor: '#0F172A',
            border: '3px solid #334155',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#60A5FA',
            boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.5)',
            flexShrink: 0
          }}
        >
          <User size={52} strokeWidth={1.5} />
          <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94A3B8', marginTop: '0.4rem' }}>
            [ .NET ENGINEER ]
          </span>
        </div>

        {/* Profile Identity */}
        <div>
          <span className="badge badge-success" style={{ fontSize: '0.72rem', marginBottom: '0.3rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', marginRight: '0.3rem' }}></span>
            {profileData.statusText}
          </span>

          <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {profileData.name}
          </h1>

          <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1D4ED8', marginTop: '0.2rem', marginBottom: '0.5rem' }}>
            {profileData.title} <span style={{ color: '#64748B', fontWeight: 400 }}>|</span> {profileData.subtitle}
          </p>

          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#475569', marginBottom: '0.8rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <span>LOC: {profileData.location}</span>
            <span>EXP: 3+ YEARS</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
            {['C#', '.NET Core', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'Microservices'].map((tech) => (
              <span key={tech} className="badge" style={{ backgroundColor: '#E2E8F0', color: '#1E293B', fontWeight: 600, fontSize: '0.72rem' }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Direct Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <a href="#contact-note" className="btn btn-primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
              Contact Me <ArrowRight size={14} />
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.45rem 0.8rem', fontSize: '0.82rem' }}>
              <GithubIcon size={14} /> GitHub
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.45rem 0.8rem', fontSize: '0.82rem' }}>
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
