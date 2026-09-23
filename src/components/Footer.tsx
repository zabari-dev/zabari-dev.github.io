import React from 'react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#111111', color: '#FFFFFF', padding: '3rem 0 1.5rem 0', minHeight: '180px' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="footer-grid">
          
          {/* Left Column */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>
              {profileData.name}
            </h3>
            <p style={{ color: '#F06458', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              {profileData.primaryTitle}
            </p>
            <p style={{ color: '#94A3B8', fontSize: '0.84rem', maxWidth: '300px', lineHeight: 1.45 }}>
              Building reliable enterprise backend systems with C#, .NET Core and SQL Server.
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div>
            <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              NAVIGATION
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#about" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}>ABOUT</a>
              <a href="#work" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}>WORK</a>
              <a href="#skills" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}>SKILLS</a>
              <a href="#experience" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}>EXPERIENCE</a>
              <a href="#contact" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}>CONTACT</a>
            </div>
          </div>

          {/* Right Column: Connect */}
          <div>
            <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              CONNECT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                <GithubIcon size={15} /> GitHub
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a href={`mailto:${profileData.email}`} style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                <Mail size={15} /> Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: '#94A3B8', fontSize: '0.82rem' }}>
          <div>
            © {new Date().getFullYear()} Sabarinathan S. All rights reserved.
          </div>
          <div>
            Built with React & TypeScript. Hosted on GitHub Pages.
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
        }
      `}</style>
    </footer>
  );
};
