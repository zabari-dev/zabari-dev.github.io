import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { engineeringWorkflows } from '../../data/profileData';

export const EngineeringNotebook: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);

  const annotations = ['"Optimize"', '"Validate"', '"Scale"', '"Monitor"', '"Debug"'];

  return (
    <div id="workflows-notebook" className="paper-card notebook-page" style={{ position: 'relative' }}>
      
      {/* Notebook Header */}
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 className="handwritten-title" style={{ color: '#1A237E' }}>
            engineering notes
          </h2>
          <div style={{ width: '140px', height: '3px', backgroundColor: '#3F51B5', marginTop: '0.2rem', opacity: 0.7 }}></div>
        </div>

        {/* Handwritten Margin Annotations */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {annotations.map((note, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '1.1rem',
                color: idx % 2 === 0 ? '#C62828' : '#1565C0',
                fontWeight: 700,
                transform: `rotate(${(idx % 3 - 1) * 3}deg)`,
                display: 'inline-block'
              }}
            >
              {note}
            </span>
          ))}
        </div>
      </div>

      {/* Workflow Tabs */}
      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {engineeringWorkflows.map((flow, index) => (
          <button
            key={index}
            onClick={() => setActiveWorkflow(index)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 600,
              padding: '0.45rem 0.9rem',
              borderRadius: '4px',
              border: '1px solid #C5CAE9',
              backgroundColor: activeWorkflow === index ? '#3F51B5' : '#E8EAF6',
              color: activeWorkflow === index ? '#FFFFFF' : '#1A237E',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {flow.title}
          </button>
        ))}
      </div>

      {/* Diagram Canvas Box */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '2px dashed #9FA8DA',
          borderRadius: '6px',
          padding: '1.5rem',
          boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1A237E' }}>
            {engineeringWorkflows[activeWorkflow].title}
          </h3>
          <span className="badge" style={{ backgroundColor: '#E8EAF6', color: '#283593', fontWeight: 600 }}>
            {engineeringWorkflows[activeWorkflow].category}
          </span>
        </div>

        <p style={{ color: '#37474F', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          {engineeringWorkflows[activeWorkflow].description}
        </p>

        {/* Drawn Architecture Sequence */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          {engineeringWorkflows[activeWorkflow].steps.map((step, sIdx) => (
            <React.Fragment key={sIdx}>
              <div
                style={{
                  backgroundColor: '#E8EAF6',
                  border: '1px solid #C5CAE9',
                  borderRadius: '6px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#1A237E',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <span
                  style={{
                    backgroundColor: '#3F51B5',
                    color: '#FFFFFF',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  {sIdx + 1}
                </span>
                <span>{step}</span>
              </div>

              {sIdx < engineeringWorkflows[activeWorkflow].steps.length - 1 && (
                <ArrowRight size={18} color="#7986CB" style={{ flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
};
