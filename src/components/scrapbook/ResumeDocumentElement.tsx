import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profileData';

export const ResumeDocumentElement: React.FC = () => {
  return (
    <div className="flatlay-object paper-aged-bg rotate-neg-2" style={{ padding: '1.5rem', borderRadius: '4px', zIndex: 18 }}>
      
      {/* Paperclip hanging off top */}
      <svg className="brass-paperclip" viewBox="0 0 24 48" fill="none">
        <path d="M16 8V34C16 38.4183 12.4183 42 8 42C3.58172 42 0 38.4183 0 34V12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12V32" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '2.2rem', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>
            resume.pdf
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.88rem', marginTop: '0.2rem' }}>
            Official resume document for Sabarinathan S (Senior .NET Backend Developer)
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
          >
            <FileText size={15} /> View Resume PDF <ExternalLink size={14} />
          </a>
          <a
            href={profileData.resumeUrl}
            download="Sabarinathan_S_Senior_Dotnet_Developer_Resume.pdf"
            className="btn btn-secondary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
          >
            <Download size={15} /> Download PDF
          </a>
        </div>
      </div>

    </div>
  );
};
