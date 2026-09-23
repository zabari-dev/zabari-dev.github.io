import React from 'react';
import { StickyNavTabs } from './StickyNavTabs';
import { ProfileCardNote } from './ProfileCardNote';
import { AboutTornNote } from './AboutTornNote';
import { ExperienceDocument } from './ExperienceDocument';
import { SmartphoneDesk } from './SmartphoneDesk';
import { SkillsStickyNote } from './SkillsStickyNote';
import { ProjectsTornPaper } from './ProjectsTornPaper';
import { EngineeringNotebook } from './EngineeringNotebook';
import { GitHubQRCodeNote } from './GitHubQRCodeNote';
import { ResumeDocument } from './ResumeDocument';
import { ContactPaperNote } from './ContactPaperNote';

export const DeskWorkspace: React.FC = () => {
  return (
    <div className="desk-surface">
      {/* Sticky Top Header Nav */}
      <StickyNavTabs />

      {/* Main Workspace Container */}
      <div className="container" style={{ paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Top Hero Layout: Profile Card + Interactive Smartphone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2.5rem', alignItems: 'center' }} className="hero-desk-grid">
          <ProfileCardNote />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SmartphoneDesk />
          </div>
        </div>

        {/* About Me Torn Note */}
        <AboutTornNote />

        {/* Experience Document */}
        <ExperienceDocument />

        {/* Technical Skills Paper */}
        <SkillsStickyNote />

        {/* Selected Work Projects Paper */}
        <ProjectsTornPaper />

        {/* Engineering Notebook with Drawn Diagrams */}
        <EngineeringNotebook />

        {/* GitHub & QR Code Note */}
        <GitHubQRCodeNote />

        {/* Resume PDF Document */}
        <ResumeDocument />

        {/* Contact Bottom Note */}
        <ContactPaperNote />

      </div>

      <style>{`
        @media (max-width: 990px) {
          .hero-desk-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
