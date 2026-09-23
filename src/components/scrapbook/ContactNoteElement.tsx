import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { profileData } from '../../data/profileData';

export const ContactNoteElement: React.FC = () => {
  return (
    <div id="contact-note" className="flatlay-object paper-yellow-bg rotate-1" style={{ padding: '2.5rem 1.75rem', borderRadius: '4px', textAlign: 'center', zIndex: 19 }}>
      
      {/* Scotch Tape Top Center */}
      <div className="scotch-tape tape-center"></div>

      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        
        <h2 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '3rem', fontWeight: 700, color: '#B71C1C', marginBottom: '0.4rem', lineHeight: 1 }}>
          let's build something
        </h2>

        <p style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
          Have a backend engineering problem, REST API challenge, SQL performance bottleneck, or senior .NET software role? Reach out directly via email or LinkedIn.
        </p>

        {/* Physical Label-Style Contact Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '1.75rem' }}>
          
          <a
            href={`mailto:${profileData.email}`}
            className="btn btn-primary"
            style={{
              backgroundColor: '#DC2626',
              borderColor: '#B91C1C',
              padding: '0.75rem 1.4rem',
              fontSize: '0.95rem',
              borderRadius: '6px',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
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
              color: '#1D4ED8',
              borderColor: '#93C5FD',
              padding: '0.75rem 1.3rem',
              fontSize: '0.95rem',
              borderRadius: '6px'
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
              backgroundColor: '#0F172A',
              color: '#F8FAFC',
              borderColor: '#334155',
              padding: '0.75rem 1.3rem',
              fontSize: '0.95rem',
              borderRadius: '6px'
            }}
          >
            <GithubIcon size={18} /> GITHUB <ExternalLink size={14} />
          </a>

        </div>

        {/* Location & Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: '#475569', fontSize: '0.88rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <MapPin size={16} color="#DC2626" /> {profileData.location}
          </span>
          <span>
            © {new Date().getFullYear()} Sabarinathan S. Built with React & TypeScript on GitHub Pages.
          </span>
        </div>

      </div>

    </div>
  );
};
