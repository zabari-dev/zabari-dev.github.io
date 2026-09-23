import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { profileData } from '../data/profile';
import { StarDecoration } from './Decorations';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" style={{ backgroundColor: '#F5C518', padding: '3.5rem 0', position: 'relative', overflow: 'hidden' }}>
      
      <StarDecoration size={26} color="#FFFFFF" style={{ position: 'absolute', top: '24px', right: '8%' }} />

      <div className="container">
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          
          <span style={{ backgroundColor: '#111111', color: '#FFFFFF', fontWeight: 700, fontSize: '0.78rem', padding: '0.35rem 0.9rem', borderRadius: '20px', letterSpacing: '0.06em', marginBottom: '1rem', display: 'inline-block' }}>
            HAVE A BACKEND PROBLEM IN MIND?
          </span>

          <h2 className="editorial-title" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', color: '#111111', lineHeight: 0.95, marginBottom: '1.25rem' }}>
            LET'S BUILD SOMETHING <br />
            USEFUL TOGETHER.
          </h2>

          <p style={{ color: '#222222', fontSize: '1.05rem', lineHeight: 1.55, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', fontWeight: 700 }}>
            Interested in backend engineering, REST API architecture, enterprise applications, or SQL performance optimization? Feel free to reach out.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a
              href={`mailto:${profileData.email}`}
              className="btn-editorial-primary"
              style={{ backgroundColor: '#1749D1', color: '#FFFFFF', padding: '0.8rem 1.6rem', fontSize: '0.9rem' }}
            >
              GET IN TOUCH <ArrowUpRight size={16} />
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline"
              style={{ borderColor: '#111111', color: '#111111', padding: '0.8rem 1.4rem', fontSize: '0.9rem' }}
            >
              <GithubIcon size={16} /> GITHUB →
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline"
              style={{ borderColor: '#111111', color: '#111111', padding: '0.8rem 1.4rem', fontSize: '0.9rem' }}
            >
              <LinkedinIcon size={16} /> LINKEDIN →
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="btn-editorial-outline"
              style={{ borderColor: '#111111', color: '#111111', padding: '0.8rem 1.4rem', fontSize: '0.9rem' }}
            >
              <Mail size={16} /> EMAIL →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
