import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profileData';

export const ResumeDocument: React.FC = () => {
  return (
    <div className="paper-card paper-cream" style={{ position: 'relative' }}>
      
      {/* Paperclip */}
      <svg className="paper-clip-visual" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8V34C16 38.4183 12.4183 42 8 42C3.58172 42 0 38.4183 0 34V12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12V32" stroke="#546E7A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 className="handwritten-title" style={{ color: '#263238' }}>
            resume.pdf
          </h2>
          <p style={{ color: '#546E7A', fontSize: '0.9rem', marginTop: '0.2rem' }}>
            Official resume document for Sabarinathan S (Senior .NET Backend Developer)
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.9rem' }}
          >
            <FileText size={16} /> View Resume PDF <ExternalLink size={14} />
          </a>
          <a
            href={profileData.resumeUrl}
            download="Sabarinathan_S_Senior_Dotnet_Developer_Resume.pdf"
            className="btn btn-secondary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.9rem' }}
          >
            <Download size={16} /> Download Copy
          </a>
        </div>
      </div>

    </div>
  );
};
