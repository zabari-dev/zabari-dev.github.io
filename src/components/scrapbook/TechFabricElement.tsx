import React from 'react';

export const TechFabricElement: React.FC = () => {
  return (
    <div className="flatlay-object fabric-patch rotate-3" style={{ padding: '1.25rem', zIndex: 14, position: 'relative' }}>
      
      {/* Scotch Tape Top Center */}
      <div className="scotch-tape tape-center"></div>

      {/* SD Card Element "backend & db skills" */}
      <div
        style={{
          backgroundColor: '#0F172A',
          border: '1px solid #475569',
          borderRadius: '4px',
          padding: '0.5rem 0.75rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#F8FAFC',
          boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
          transform: 'rotate(-2deg)'
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: '#60A5FA' }}>
          SD: BACKEND STACK
        </span>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ width: '3px', height: '10px', backgroundColor: '#F59E0B' }}></div>
          ))}
        </div>
      </div>

      {/* 3D Tech Badges Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', justifyContent: 'center' }}>
        <div className="tech-chip-3d">
          <span style={{ fontSize: '1.2rem', color: '#60A5FA' }}>C#</span>
          <span style={{ fontSize: '0.62rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>.NET 9</span>
        </div>

        <div className="tech-chip-3d">
          <span style={{ fontSize: '1rem', color: '#34D399' }}>SQL</span>
          <span style={{ fontSize: '0.62rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>SERVER</span>
        </div>

        <div className="tech-chip-3d">
          <span style={{ fontSize: '0.9rem', color: '#A78BFA' }}>API</span>
          <span style={{ fontSize: '0.62rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>REST</span>
        </div>

        <div className="tech-chip-3d">
          <span style={{ fontSize: '0.82rem', color: '#FBBF24' }}>MICRO</span>
          <span style={{ fontSize: '0.62rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>SERVICES</span>
        </div>
      </div>

    </div>
  );
};
