import React from 'react';
import { Mail, ArrowUpRight, MapPin, Send, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { profileData } from '../data/profileData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <span className="section-tag">
            <Send size={14} /> Contact & Collaboration
          </span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Let's Connect
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem auto' }}>
            Interested in discussing backend software engineering roles, enterprise system architecture, or database optimization opportunities? Feel free to reach out directly.
          </p>

          {/* Contact Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            
            {/* Email Card */}
            <a
              href={`mailto:${profileData.email}`}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.75rem',
                textDecoration: 'none'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(88, 166, 255, 0.12)',
                border: '1px solid rgba(88, 166, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
                marginBottom: '1rem'
              }}>
                <Mail size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>Email</h3>
              <p style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', wordBreak: 'break-all' }}>
                {profileData.email}
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                Send message <ArrowUpRight size={12} />
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.75rem',
                textDecoration: 'none'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(88, 166, 255, 0.12)',
                border: '1px solid rgba(88, 166, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
                marginBottom: '1rem'
              }}>
                <LinkedinIcon size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>LinkedIn</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                linkedin.com/in/sabaridev
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                Connect on LinkedIn <ArrowUpRight size={12} />
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.75rem',
                textDecoration: 'none'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(240, 246, 252, 0.1)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                <GithubIcon size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>GitHub</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                github.com/zabari-dev
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                View Repositories <ArrowUpRight size={12} />
              </span>
            </a>

          </div>

          {/* Location & Resume download */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              <MapPin size={16} color="var(--accent-blue)" /> {profileData.location}
            </span>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FileText size={16} /> Download Full Resume (PDF)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
