import React from 'react';
import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { StarDecoration, CurvedArrowDown } from './Decorations';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section style={{ padding: '2.5rem 0 3.5rem 0', minHeight: '620px', maxHeight: '760px', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Stars */}
      <StarDecoration size={24} color="#F5C518" style={{ position: 'absolute', top: '15px', right: '48%' }} />
      <StarDecoration size={18} color="#F06458" style={{ position: 'absolute', bottom: '30px', left: '2%' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '52% 48%', gap: '2.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Hero Text */}
          <div>
            {/* Pill Label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
              <span style={{ backgroundColor: '#DCE7FF', color: '#1749D1', fontWeight: 700, fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '20px', letterSpacing: '0.06em' }}>
                .NET BACKEND ENGINEER
              </span>
              <span style={{ backgroundColor: '#F06458', color: '#FFFFFF', fontWeight: 700, fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '20px' }}>
                {profileData.experienceYears}
              </span>
            </div>

            {/* Display Name Title */}
            <h1 className="hero-name-title" style={{ marginBottom: '1.25rem' }}>
              Sabarinathan S
            </h1>

            {/* Headline */}
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.85rem', lineHeight: 1.35, maxWidth: '520px' }}>
              {profileData.heroHeadline}
            </h2>

            {/* Supporting Text */}
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.75rem', maxWidth: '480px', lineHeight: 1.55 }}>
              {profileData.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <a href="#contact" className="btn-editorial-primary">
                LET'S WORK TOGETHER <ArrowUpRight size={16} />
              </a>
              <a href={profileData.resumeUrl} download="Sabarinathan_S_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-editorial-outline">
                DOWNLOAD CV <Download size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: User Photo + Organic Blob + Overlaid Info Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            {/* Soft Lavender Background Blob */}
            <div
              className="blob-lavender"
              style={{
                width: '330px',
                height: '380px',
                position: 'absolute',
                top: '-10px',
                zIndex: 1,
                opacity: 0.9
              }}
            ></div>

            {/* User Photograph Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '290px',
                height: '360px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                border: '4px solid var(--card-bg)'
              }}
            >
              <img
                src={profileData.photoUrl}
                alt="Sabarinathan S"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
            </div>

            {/* Overlaid White / Theme Information Card */}
            <div
              className="card-white"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '5px',
                zIndex: 10,
                padding: '1rem 1.25rem',
                maxWidth: '245px',
                borderRadius: '16px'
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.1rem' }}>
                {profileData.name}
              </h3>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--display-blue)', marginBottom: '0.35rem' }}>
                Senior Software Developer
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                <MapPin size={12} color="#F06458" /> {profileData.location}
              </div>

              {/* Stack Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.75rem' }}>
                {['C#', '.NET', 'SQL Server', 'REST APIs'].map((tag) => (
                  <span key={tag} style={{ backgroundColor: 'var(--tag-bg)', color: 'var(--tag-text)', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Icon Links */}
              <div style={{ display: 'flex', gap: '0.7rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border-subtle)' }}>
                <a href={`mailto:${profileData.email}`} style={{ color: 'var(--text-dark)' }} aria-label="Email">
                  <Mail size={15} />
                </a>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dark)' }} aria-label="GitHub">
                  <GithubIcon size={15} />
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dark)' }} aria-label="LinkedIn">
                  <LinkedinIcon size={15} />
                </a>
              </div>
            </div>

            {/* Curved Arrow Annotation */}
            <CurvedArrowDown color="#1749D1" style={{ position: 'absolute', bottom: '-35px', left: '-15px', zIndex: 5 }} />

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 990px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .hero-name-title {
            font-size: 3.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};
