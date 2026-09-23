import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { engineeringWorkflows } from '../../data/profileData';

export const EngineeringNotebookElement: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);

  const annotations = ['"Optimize"', '"Validate"', '"Scale"', '"Monitor"', '"Debug"'];

  return (
    <div className="flatlay-object notebook-page rotate-neg-1" style={{ padding: '1.75rem', borderRadius: '4px', zIndex: 16 }}>
      
      {/* Tape Top Left */}
      <div className="scotch-tape tape-top-left"></div>

      {/* Notebook Header */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '2.4rem', fontWeight: 700, color: '#1E293B', lineHeight: 1 }}>
            engineering notes
          </h2>
          <div style={{ width: '130px', height: '3px', backgroundColor: '#3B82F6', marginTop: '0.2rem', opacity: 0.8 }}></div>
        </div>

        {/* Handwritten Annotations */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {annotations.map((note, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '1.1rem',
                color: idx % 2 === 0 ? '#DC2626' : '#2563EB',
                fontWeight: 700,
                transform: `rotate(${(idx % 3 - 1) * 3}deg)`
              }}
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Workflow Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {engineeringWorkflows.map((flow, index) => (
          <button
            key={index}
            onClick={() => setActiveWorkflow(index)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              padding: '0.4rem 0.8rem',
              borderRadius: '4px',
              border: '1px solid #CBD5E1',
              backgroundColor: activeWorkflow === index ? '#1E293B' : '#F1F5F9',
              color: activeWorkflow === index ? '#FFFFFF' : '#1E293B',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {flow.title}
          </button>
        ))}
      </div>

      {/* Drawn Architecture Box */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '2px dashed #94A3B8',
          borderRadius: '6px',
          padding: '1.25rem',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A' }}>
            {engineeringWorkflows[activeWorkflow].title}
          </h3>
          <span className="badge" style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', fontWeight: 600 }}>
            {engineeringWorkflows[activeWorkflow].category}
          </span>
        </div>

        <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {engineeringWorkflows[activeWorkflow].description}
        </p>

        {/* Drawn Steps Sequence */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
          {engineeringWorkflows[activeWorkflow].steps.map((step, sIdx) => (
            <React.Fragment key={sIdx}>
              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '4px',
                  padding: '0.6rem 0.85rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
                }}
              >
                <span
                  style={{
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.72rem',
                    fontWeight: 700
                  }}
                >
                  {sIdx + 1}
                </span>
                <span>{step}</span>
              </div>

              {sIdx < engineeringWorkflows[activeWorkflow].steps.length - 1 && (
                <ArrowRight size={16} color="#94A3B8" style={{ flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
};
