import React, { useState } from 'react';
import { BookOpen, Check, Copy } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { recommendedProjects } from '../data/profileData';

export const GitHubStrategy: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const sampleReadmeSnippet = `# Hi, I'm Sabarinathan 👋
### Senior Software Developer | .NET Backend Engineer
C# • .NET • ASP.NET Core • SQL Server • REST APIs • Microservices

Senior .NET Backend Developer with 3+ years of experience designing, developing, and optimizing enterprise applications across Healthcare and FMCG domains.

### 🛠️ Technical Stack
- **Backend:** C#, .NET Framework, .NET Core, ASP.NET Core, RESTful APIs, Dapper, EF Core, Microservices
- **Database:** SQL Server, T-SQL, Stored Procedures, Views, Query Optimization, Database Performance
- **Practices:** SOLID Principles, Repository Pattern, Dependency Injection, Agile, Azure DevOps`;

  const copyReadme = () => {
    navigator.clipboard.writeText(sampleReadmeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="github-strategy" className="section-padding" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <GithubIcon size={14} /> Open Source & Strategy
          </span>
          <h2 className="section-title">GitHub Strategy & Projects</h2>
          <p className="section-subtitle">
            Strategic alignment of GitHub repositories to showcase high-impact backend engineering, SQL optimization, and clean architecture.
          </p>
        </div>

        {/* GitHub Profile README Preview Box */}
        <div className="card" style={{ marginBottom: '2.5rem', backgroundColor: 'var(--bg-secondary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <BookOpen size={18} color="var(--accent-blue)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                Special Repository README Preview (<code style={{ color: 'var(--accent-blue)' }}>zabari-dev/zabari-dev</code>)
              </h3>
            </div>
            <button
              onClick={copyReadme}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.4rem 0.8rem' }}
            >
              {copied ? <Check size={14} color="var(--accent-green)" /> : <Copy size={14} />}
              {copied ? 'Copied Markdown!' : 'Copy README Markdown'}
            </button>
          </div>

          <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
            {sampleReadmeSnippet}
          </div>
        </div>

        {/* Recommended Future Projects */}
        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            Recommended Portfolio Repositories To Build
          </h3>

          <div className="grid-2">
            {recommendedProjects.map((proj, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <GithubIcon size={18} color="var(--accent-blue)" />
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-blue)' }}>
                      {proj.title}
                    </h4>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {proj.description}
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem' }}>
                      Key Engineering Demonstrations:
                    </span>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {proj.keyDemonstration.map((demo, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-green)' }}></span>
                          {demo}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {proj.stack.map((s) => (
                    <span key={s} className="badge" style={{ fontSize: '0.75rem', backgroundColor: 'var(--bg-primary)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
