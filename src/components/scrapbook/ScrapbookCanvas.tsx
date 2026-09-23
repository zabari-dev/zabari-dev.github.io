import React from 'react';
import { PhysicalDeskDecorations } from './PhysicalDeskDecorations';
import { ProfileCardElement } from './ProfileCardElement';
import { SmartwatchElement } from './SmartwatchElement';
import { GitHubQRElement } from './GitHubQRElement';
import { ExperienceSheetElement } from './ExperienceSheetElement';
import { EducationGraphElement } from './EducationGraphElement';
import { TechFabricElement } from './TechFabricElement';
import { SkillsFilmElement } from './SkillsFilmElement';
import { EngineeringNotebookElement } from './EngineeringNotebookElement';
import { ProjectsFolderElement } from './ProjectsFolderElement';
import { ResumeDocumentElement } from './ResumeDocumentElement';
import { ContactNoteElement } from './ContactNoteElement';
import { StickyNavTabs } from './StickyNavTabs';

export const ScrapbookCanvas: React.FC = () => {
  return (
    <div className="flatlay-container">
      {/* Background Desk Accents */}
      <PhysicalDeskDecorations />

      {/* Sticky Tab Header attached to desk top */}
      <StickyNavTabs />

      {/* Main Continuous 12-Column Canvas Layout */}
      <div className="flatlay-canvas" style={{ paddingTop: '2rem' }}>
        
        {/* Top-Left: Profile Resume Card + Overlapping Smartwatch */}
        <div style={{ gridColumn: 'span 7' }}>
          <ProfileCardElement />
          <SmartwatchElement />
        </div>

        {/* Top-Right: GitHub QR Paper Note */}
        <div style={{ gridColumn: 'span 5' }}>
          <GitHubQRElement />
        </div>

        {/* Middle-Left: Education Graph Paper */}
        <div style={{ gridColumn: 'span 5' }}>
          <EducationGraphElement />
          <div style={{ height: '1.5rem' }}></div>
          <TechFabricElement />
        </div>

        {/* Right Side: Aged Experience Document ("the experience shop") */}
        <div style={{ gridColumn: 'span 7' }}>
          <ExperienceSheetElement />
        </div>

        {/* Middle-Bottom: Skills Film & Label Strips */}
        <div style={{ gridColumn: 'span 12' }}>
          <SkillsFilmElement />
        </div>

        {/* Center: Engineering Spiral Notebook */}
        <div style={{ gridColumn: 'span 12' }}>
          <EngineeringNotebookElement />
        </div>

        {/* Selected Work Projects Paper */}
        <div style={{ gridColumn: 'span 12' }}>
          <ProjectsFolderElement />
        </div>

        {/* Resume PDF Document */}
        <div style={{ gridColumn: 'span 12' }}>
          <ResumeDocumentElement />
        </div>

        {/* Contact Bottom Note */}
        <div style={{ gridColumn: 'span 12' }}>
          <ContactNoteElement />
        </div>

      </div>

    </div>
  );
};
