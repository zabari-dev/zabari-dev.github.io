import React from 'react';
import { Server, Database, RefreshCw, AlertTriangle } from 'lucide-react';
import { profileData } from '../../data/profileData';

export const AboutTornNote: React.FC = () => {
  return (
    <div id="about-note" className="paper-card paper-yellow torn-edge" style={{ position: 'relative' }}>
      
      {/* Tape Graphic */}
      <div className="masking-tape"></div>

      <div style={{ marginBottom: '1.25rem' }}>
        <h2 className="handwritten-title" style={{ color: '#B71C1C' }}>
          about me
        </h2>
        <div style={{ width: '80px', height: '3px', backgroundColor: '#E53935', marginTop: '0.2rem', opacity: 0.7 }}></div>
      </div>

      <div style={{ color: '#263238', fontSize: '1rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {profileData.aboutText.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Engineering Focus Badges */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.9rem', marginTop: '1.75rem' }}>
        
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '0.8rem', borderRadius: '4px', border: '1px dashed #B0BEC5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0D47A1', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
            <Server size={18} /> Backend First
          </div>
          <p style={{ fontSize: '0.82rem', color: '#455A64' }}>
            C#, ASP.NET Core & Microservices architecture.
          </p>
        </div>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '0.8rem', borderRadius: '4px', border: '1px dashed #B0BEC5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B5E20', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
            <Database size={18} /> Database Tuning
          </div>
          <p style={{ fontSize: '0.82rem', color: '#455A64' }}>
            T-SQL procedures, indexing & query plan optimization.
          </p>
        </div>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '0.8rem', borderRadius: '4px', border: '1px dashed #B0BEC5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4A148C', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
            <RefreshCw size={18} /> Modernization
          </div>
          <p style={{ fontSize: '0.82rem', color: '#455A64' }}>
            Monolith to clean modular microservice transition.
          </p>
        </div>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '0.8rem', borderRadius: '4px', border: '1px dashed #B0BEC5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E65100', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
            <AlertTriangle size={18} /> Production RCA
          </div>
          <p style={{ fontSize: '0.82rem', color: '#455A64' }}>
            Root cause analysis & enterprise system stability.
          </p>
        </div>

      </div>

    </div>
  );
};
