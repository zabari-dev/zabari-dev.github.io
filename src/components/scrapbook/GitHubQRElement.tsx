import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { profileData } from '../../data/profileData';

export const GitHubQRElement: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const sampleReadmeSnippet = `# Hi, I'm Sabarinathan 👋
### Senior Software Developer | .NET Backend Engineer
C# • .NET • ASP.NET Core • SQL Server • REST APIs • Microservices`;

  const copyReadme = () => {
    navigator.clipboard.writeText(sampleReadmeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pure SVG QR code rendering github.com/zabari-dev
  const svgQRCode = (
    <svg width="120" height="120" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: '#FFFFFF', padding: '6px', borderRadius: '4px' }}>
      <path d="M0 0h7v7H0zM22 0h7v7h-7zM0 22h7v7H0z" fill="#0F172A"/>
      <path d="M1 1h5v5H1zM23 1h5v5h-5zM1 23h5v5H1z" fill="#FFFFFF"/>
      <path d="M2 2h3v3H2zM24 2h3v3h-3zM2 24h3v3H2z" fill="#0F172A"/>
      <path d="M8 3h2v1H8zm3 0h1v2h-1zm3 0h3v1h-3zm4 0h1v1h-1zm1 2h2v1h-2zm-9 2h1v1h-1zm3 0h2v1h-2zm4 0h1v1h-1zm-6 2h1v2h-1zm3 0h2v1h-2zm-9 2h2v1H8zm4 0h1v1h-1zm4 0h2v1h-2zm-6 2h1v2h-1zm3 0h1v1h-1zm2 0h2v1h-2zm-7 2h2v1H9zm4 0h1v2h-1zm2 0h3v1h-3zm-5 2h2v1h-2zm4 0h1v1h-1zm-9 2h1v1H8zm3 0h2v1h-2zm4 0h3v1h-3z" fill="#0F172A"/>
    </svg>
  );

  return (
    <div className="flatlay-object paper-yellow-bg rotate-4" style={{ padding: '1.25rem', borderRadius: '4px', zIndex: 12 }}>
      
      {/* Scotch Tape Top Center */}
      <div className="scotch-tape tape-center"></div>

      <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
        <h2 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '2rem', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>
          my github
        </h2>
        <span style={{ fontSize: '0.75rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
          github.com/zabari-dev
        </span>
      </div>

      {/* QR Code Container with Handwritten Red Arrow */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ border: '2px solid #CBD5E1', padding: '4px', backgroundColor: '#FFFFFF', borderRadius: '6px', boxShadow: '0 4px 10px rgba(0,0,0,0.06)' }}>
          {svgQRCode}
        </div>

        <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.3rem', color: '#DC2626', fontWeight: 700 }}>
          scan me ↗
        </span>

        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
        >
          <GithubIcon size={14} /> Open GitHub
        </a>
      </div>

      {/* Copy Special README Snippet CTA */}
      <div style={{ marginTop: '0.75rem', paddingTop: '0.6rem', borderTop: '1px dashed #CBD5E1' }}>
        <button
          onClick={copyReadme}
          className="btn btn-secondary"
          style={{ width: '100%', justifyContent: 'center', padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
        >
          {copied ? <Check size={12} color="#10B981" /> : <Copy size={12} />}
          {copied ? 'Copied Profile README!' : 'Copy zabari-dev README'}
        </button>
      </div>

    </div>
  );
};
