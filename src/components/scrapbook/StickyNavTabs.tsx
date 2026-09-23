import React from 'react';
import { Terminal, FileText } from 'lucide-react';
import { profileData } from '../../data/profileData';

export const StickyNavTabs: React.FC = () => {
  const tabs = [
    { name: 'about me', href: '#about-note', colorClass: 'desk-tab-yellow' },
    { name: 'experience', href: '#experience-doc', colorClass: 'desk-tab-blue' },
    { name: 'skills', href: '#skills-note', colorClass: 'desk-tab-green' },
    { name: 'selected work', href: '#projects-doc', colorClass: 'desk-tab-pink' },
    { name: 'engineering notes', href: '#workflows-notebook', colorClass: 'desk-tab-cream' },
    { name: 'my github', href: '#github-qr', colorClass: 'desk-tab-yellow' },
    { name: 'contact', href: '#contact-note', colorClass: 'desk-tab-blue' },
  ];

  return (
    <header className="sticky-desk-nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
        
        {/* Brand Label */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F0F6FC', fontWeight: 700, textDecoration: 'none' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '4px',
            backgroundColor: '#21262D',
            border: '1px solid #30363D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#58A6FF'
          }}>
            <Terminal size={16} />
          </div>
          <span style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>SABARINATHAN S</span>
          <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>.NET BACKEND</span>
        </a>

        {/* Sticky Note Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={`desk-tab-link ${tab.colorClass}`}
            >
              {tab.name}
            </a>
          ))}
          
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem', marginLeft: '0.4rem' }}
          >
            <FileText size={14} /> Resume PDF
          </a>
        </nav>

      </div>
    </header>
  );
};
