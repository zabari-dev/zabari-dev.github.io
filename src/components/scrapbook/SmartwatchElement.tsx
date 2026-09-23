import React, { useState } from 'react';
import { Smartphone, X, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { profileData } from '../../data/profileData';

export const SmartwatchElement: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Physical Smartwatch / Metallic Device Element */}
      <div
        className="smartwatch-frame rotate-2"
        onClick={() => setOpenModal(true)}
        title="Click to interact with watch/mobile view"
        style={{ zIndex: 30, margin: '-2.5rem 0 0 2rem' }}
      >
        <div style={{ backgroundColor: '#0B0F19', borderRadius: '32px', overflow: 'hidden', color: '#F0F6FC', border: '1px solid #30363D' }}>
          
          {/* Watch Status Header */}
          <div style={{ padding: '0.4rem 0.8rem', backgroundColor: '#161B22', borderBottom: '1px solid #21262D', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#3FB950', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3FB950' }}></span>
              about me
            </span>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#8B949E' }}>12:15</span>
          </div>

          {/* Watch Display Content */}
          <div style={{ padding: '0.85rem', fontSize: '0.78rem', lineHeight: 1.45 }}>
            <p style={{ color: '#C9D1D9', marginBottom: '0.6rem' }}>
              I am a <strong style={{ color: '#58A6FF' }}>Senior .NET Backend Developer</strong> with 3+ years of experience designing, developing, and optimizing enterprise applications across <strong>Healthcare</strong> and <strong>FMCG</strong> domains.
            </p>
            <p style={{ color: '#8B949E', fontSize: '0.72rem' }}>
              Specialized in C#, ASP.NET Core, REST APIs, SQL Server, T-SQL Tuning, and Microservices.
            </p>

            <div style={{ marginTop: '0.6rem', textAlign: 'center', paddingTop: '0.4rem', borderTop: '1px solid #21262D', color: '#58A6FF', fontSize: '0.7rem', fontWeight: 600 }}>
              Tap Watch to Expand →
            </div>
          </div>

        </div>
      </div>

      {/* Expanded Modal Screen */}
      {openModal && (
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
          onClick={() => setOpenModal(false)}
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
                <Smartphone size={16} color="#58A6FF" /> Developer Profile Details
              </span>
              <button
                onClick={() => setOpenModal(false)}
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
                  Professional Summary
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#F0F6FC', lineHeight: 1.5 }}>
                  Senior .NET Backend Developer with 3+ years experience engineering enterprise systems, building RESTful APIs, optimizing SQL query performance, and refactoring monoliths to microservices.
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
                  <GithubIcon size={16} /> GitHub Profile <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
