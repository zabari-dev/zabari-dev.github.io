import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { profileData } from '../data/profile';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  // Light / Dark mode state persistent in localStorage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'var(--navbar-bg)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--card-border)', height: '72px', display: 'flex', alignItems: 'center', transition: 'background-color 0.3s ease' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Name */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.02em' }}>
          <span>{profileData.name}</span>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#F06458', display: 'inline-block' }}></span>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveSection(link.id)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-dark)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              className={activeSection === link.id ? 'nav-active-underline' : ''}
            >
              {link.name}
            </a>
          ))}

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '0.5rem', borderLeft: '1px solid var(--border-subtle)' }}>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center' }} aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center' }} aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
            <a href={`mailto:${profileData.email}`} style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center' }} aria-label="Email">
              <Mail size={16} />
            </a>
          </div>

          <a href="#contact" className="btn-editorial-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem' }}>
            LET'S CONNECT <ArrowUpRight size={14} />
          </a>

          {/* Reference Segmented Sun / Moon Theme Switcher on FAR RIGHT */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'var(--tag-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '3px',
              gap: '2px',
              marginLeft: '0.2rem'
            }}
          >
            <button
              type="button"
              onClick={() => setTheme('light')}
              style={{
                background: theme === 'light' ? 'var(--card-bg)' : 'transparent',
                boxShadow: theme === 'light' ? '0 2px 6px rgba(0, 0, 0, 0.12)' : 'none',
                border: 'none',
                borderRadius: '8px',
                padding: '5px 7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: theme === 'light' ? 'var(--text-dark)' : 'var(--text-muted)',
                transition: 'all 0.2s ease'
              }}
              title="Light Mode"
              aria-label="Light Mode"
            >
              <Sun size={17} />
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              style={{
                background: theme === 'dark' ? 'var(--card-bg)' : 'transparent',
                boxShadow: theme === 'dark' ? '0 2px 6px rgba(0, 0, 0, 0.3)' : 'none',
                border: 'none',
                borderRadius: '8px',
                padding: '5px 7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: theme === 'dark' ? 'var(--text-dark)' : 'var(--text-muted)',
                transition: 'all 0.2s ease'
              }}
              title="Dark Mode"
              aria-label="Dark Mode"
            >
              <Moon size={17} />
            </button>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="mobile-controls">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'var(--tag-bg)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '3px',
              gap: '2px'
            }}
          >
            <button
              type="button"
              onClick={() => setTheme('light')}
              style={{
                background: theme === 'light' ? 'var(--card-bg)' : 'transparent',
                boxShadow: theme === 'light' ? '0 2px 6px rgba(0, 0, 0, 0.12)' : 'none',
                border: 'none',
                borderRadius: '8px',
                padding: '5px 7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: theme === 'light' ? 'var(--text-dark)' : 'var(--text-muted)'
              }}
              aria-label="Light Mode"
            >
              <Sun size={16} />
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              style={{
                background: theme === 'dark' ? 'var(--card-bg)' : 'transparent',
                boxShadow: theme === 'dark' ? '0 2px 6px rgba(0, 0, 0, 0.3)' : 'none',
                border: 'none',
                borderRadius: '8px',
                padding: '5px 7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: theme === 'dark' ? 'var(--text-dark)' : 'var(--text-muted)'
              }}
              aria-label="Dark Mode"
            >
              <Moon size={16} />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-dark)', cursor: 'pointer', padding: '0.4rem' }}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', boxShadow: 'var(--shadow-card)' }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
              }}
              style={{ textDecoration: 'none', color: 'var(--text-dark)', fontSize: '1rem', fontWeight: 700 }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-editorial-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
            LET'S CONNECT <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

