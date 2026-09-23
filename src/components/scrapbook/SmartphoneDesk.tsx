import React, { useState } from 'react';
import { Smartphone, X, Mail, FileText, ExternalLink, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { profileData } from '../../data/profileData';

export const SmartphoneDesk: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Physical Smartphone Element on Desk */}
      <div
        className="smartphone-body"
        onClick={() => setModalOpen(true)}
        title="Click to interact with mobile view"
      >
        <div className="smartphone-screen">
          {/* Notch */}
          <div className="smartphone-notch"></div>

          {/* Screen Header */}
          <div style={{ padding: '0.6rem 0.8rem', backgroundColor: '#161B22', borderBottom: '1px solid #30363D', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#8B949E' }}>9:41 AM</span>
            <span style={{ fontSize: '0.65rem', color: '#3FB950', fontWeight: 600 }}>● ONLINE</span>
          </div>

          {/* Screen Content */}
          <div style={{ padding: '0.9rem', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#21262D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#58A6FF' }}>
                <User size={14} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#F0F6FC' }}>SABARINATHAN S</h4>
                <p style={{ fontSize: '0.68rem', color: '#58A6FF' }}>.NET Backend Engineer</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#161B22', padding: '0.6rem', borderRadius: '6px', border: '1px solid #30363D' }}>
              <p style={{ fontSize: '0.7rem', color: '#8B949E', lineHeight: 1.4 }}>
                3+ Years Exp building Healthcare & FMCG Enterprise Platforms.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              {['C#', '.NET', 'SQL Server', 'REST APIs', 'Microservices'].map((t) => (
                <span key={t} className="badge badge-primary" style={{ fontSize: '0.62rem', padding: '0.1rem 0.3rem' }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '0.5rem', borderTop: '1px solid #21262D', color: '#58A6FF', fontSize: '0.72rem', fontWeight: 600 }}>
              Tap to Expand Mobile View →
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Smartphone Drawer / Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              backgroundColor: '#161B22',
              border: '1px solid #30363D',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
              color: '#F0F6FC'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '1rem', borderBottom: '1px solid #30363D', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0D1117' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Smartphone size={16} color="#58A6FF" /> Mobile Profile Preview
              </span>
              <button
                onClick={() => setModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#8B949E', cursor: 'pointer', padding: '0.2rem' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{profileData.name}</h3>
                <p style={{ color: '#58A6FF', fontWeight: 600 }}>{profileData.title}</p>
                <p style={{ color: '#8B949E', fontSize: '0.88rem', marginTop: '0.4rem' }}>{profileData.location}</p>
              </div>

              <div style={{ backgroundColor: '#0D1117', padding: '1rem', borderRadius: '8px', border: '1px solid #21262D' }}>
                <h4 style={{ fontSize: '0.82rem', color: '#8B949E', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  Core Competencies
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#F0F6FC', lineHeight: 1.5 }}>
                  C#, .NET Core, ASP.NET Web API, RESTful APIs, SQL Server, T-SQL Tuning, Dapper, EF Core, Microservices architecture.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a href={`mailto:${profileData.email}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Mail size={16} /> Email Me
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  <LinkedinIcon size={16} /> LinkedIn Profile <ExternalLink size={14} />
                </a>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  <GithubIcon size={16} /> GitHub Repositories <ExternalLink size={14} />
                </a>
                <a href={profileData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  <FileText size={16} /> Download Resume PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
