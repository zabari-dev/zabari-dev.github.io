import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { profileData } from '../../data/profileData';

export const ContactPaperNote: React.FC = () => {
  return (
    <div id="contact-note" className="paper-card paper-yellow" style={{ position: 'relative', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
      
      {/* Masking Tape */}
      <div className="masking-tape" style={{ left: 'calc(50% - 55px)' }}></div>

      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        
        <h2 className="handwritten-title" style={{ fontSize: '2.8rem', color: '#B71C1C', marginBottom: '0.5rem' }}>
          let's build something
        </h2>

        <p style={{ color: '#37474F', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Have a backend architecture problem, REST API challenge, SQL performance bottleneck, or enterprise software engineering role? Feel free to connect directly.
        </p>

        {/* Physical Label-Style Contact Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          
          <a
            href={`mailto:${profileData.email}`}
            className="btn btn-primary"
            style={{
              backgroundColor: '#C62828',
              borderColor: '#B71C1C',
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '6px',
              boxShadow: '0 4px 10px rgba(198, 40, 40, 0.3)'
            }}
          >
            <Mail size={18} /> EMAIL ME ({profileData.email})
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0D47A1',
              borderColor: '#90CAF9',
              padding: '0.8rem 1.4rem',
              fontSize: '1rem',
              borderRadius: '6px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <LinkedinIcon size={18} /> LINKEDIN <ExternalLink size={14} />
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              backgroundColor: '#21262D',
              color: '#F0F6FC',
              borderColor: '#30363D',
              padding: '0.8rem 1.4rem',
              fontSize: '1rem',
              borderRadius: '6px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            <GithubIcon size={18} /> GITHUB <ExternalLink size={14} />
          </a>

        </div>

        {/* Location & Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: '#546E7A', fontSize: '0.9rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={16} color="#C62828" /> {profileData.location}
          </span>
          <span>
            © {new Date().getFullYear()} Sabarinathan S. All rights reserved.
          </span>
        </div>

      </div>

    </div>
  );
};
