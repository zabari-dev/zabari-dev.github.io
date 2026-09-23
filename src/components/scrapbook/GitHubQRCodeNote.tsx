import React, { useState } from 'react';
import { BookOpen, Check, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { profileData, recommendedProjects } from '../../data/profileData';

export const GitHubQRCodeNote: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const sampleReadmeSnippet = `# Hi, I'm Sabarinathan 👋
### Senior Software Developer | .NET Backend Engineer
C# • .NET • ASP.NET Core • SQL Server • REST APIs • Microservices

Senior .NET Backend Developer with 3+ years of experience designing, developing, and optimizing enterprise applications across Healthcare and FMCG domains.`;

  const copyReadme = () => {
    navigator.clipboard.writeText(sampleReadmeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pure SVG QR code placeholder encoding github.com/zabari-dev
  const svgQRCode = (
    <svg width="110" height="110" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '4px', backgroundColor: '#FFFFFF', padding: '6px' }}>
      {/* Outer Finder Patterns */}
      <path d="M0 0h7v7H0zM22 0h7v7h-7zM0 22h7v7H0z" fill="#0F172A"/>
      <path d="M1 1h5v5H1zM23 1h5v5h-5zM1 23h5v5H1z" fill="#FFFFFF"/>
      <path d="M2 2h3v3H2zM24 2h3v3h-3zM2 24h3v3H2z" fill="#0F172A"/>
      {/* Timing lines & Data Module Pattern */}
      <path d="M8 3h2v1H8zm3 0h1v2h-1zm3 0h3v1h-3zm4 0h1v1h-1zm1 2h2v1h-2zm-9 2h1v1h-1zm3 0h2v1h-2zm4 0h1v1h-1zm-6 2h1v2h-1zm3 0h2v1h-2zm-9 2h2v1H8zm4 0h1v1h-1zm4 0h2v1h-2zm-6 2h1v2h-1zm3 0h1v1h-1zm2 0h2v1h-2zm-7 2h2v1H9zm4 0h1v2h-1zm2 0h3v1h-3zm-5 2h2v1h-2zm4 0h1v1h-1zm-9 2h1v1H8zm3 0h2v1h-2zm4 0h3v1h-3z" fill="#0F172A"/>
    </svg>
  );

  return (
    <div id="github-qr" className="paper-card paper-yellow" style={{ position: 'relative' }}>
      
      {/* Masking Tape */}
      <div className="masking-tape"></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem' }} className="github-header-grid">
        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
            <GithubIcon size={24} color="#1E293B" />
            <h2 className="handwritten-title" style={{ color: '#0F172A' }}>
              my github
            </h2>
          </div>
          <p style={{ color: '#475569', fontSize: '0.92rem' }}>
            Explore open-source backend repositories & Special Profile README: <code style={{ color: '#2563EB', fontWeight: 600 }}>github.com/zabari-dev</code>
          </p>
        </div>

        {/* QR Code & Handwritten Arrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#FFFFFF', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', boxShadow: '0 4px 10px rgba(0,0,0,0.06)' }}>
          {svgQRCode}
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: '#D97706', fontWeight: 700, display: 'block', lineHeight: 1 }}>
              scan me ↗
            </span>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem', marginTop: '0.4rem' }}
            >
              Open GitHub <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>

      {/* Special Profile README Copy Box */}
      <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={16} color="#2563EB" /> Profile README snippet (zabari-dev/zabari-dev)
          </span>
          <button
            onClick={copyReadme}
            className="btn btn-secondary"
            style={{ padding: '0.35rem 0.7rem', fontSize: '0.78rem' }}
          >
            {copied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
            {copied ? 'Copied!' : 'Copy README'}
          </button>
        </div>

        <pre style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '4px', border: '1px solid #E2E8F0', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#334155', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
          {sampleReadmeSnippet}
        </pre>
      </div>

      {/* Recommended Repositories Showcase */}
      <div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>
          Recommended Portfolio Repositories To Explore
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {recommendedProjects.map((repo, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '6px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#2563EB', marginBottom: '0.4rem' }}>
                  {repo.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '0.8rem', lineHeight: 1.4 }}>
                  {repo.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', paddingTop: '0.6rem', borderTop: '1px dashed #E2E8F0' }}>
                {repo.stack.map((s) => (
                  <span key={s} className="badge" style={{ backgroundColor: '#F1F5F9', color: '#334155', fontSize: '0.72rem' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
