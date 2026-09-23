import React from 'react';

export const PhysicalDeskDecorations: React.FC = () => {
  return (
    <>
      {/* Top Left Headphone Wire SVG Accent */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '320px', height: '180px', pointerEvents: 'none', opacity: 0.65, zIndex: 5 }}
        viewBox="0 0 320 180"
        fill="none"
      >
        <path d="M-20 10 C 60 40, 140 10, 180 80 C 210 130, 260 90, 340 120" stroke="#E2E8F0" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M-20 25 C 55 50, 135 20, 175 90 C 205 140, 255 100, 335 130" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Top Right Palm Leaf Shadow SVG Accent */}
      <svg
        style={{ position: 'absolute', top: 0, right: 0, width: '280px', height: '320px', pointerEvents: 'none', opacity: 0.35, zIndex: 5 }}
        viewBox="0 0 280 320"
        fill="none"
      >
        <path d="M280 0 Q 140 120 40 320" stroke="#047857" strokeWidth="6" opacity="0.6" />
        <path d="M220 40 Q 160 70 80 120" stroke="#047857" strokeWidth="4" opacity="0.5" />
        <path d="M240 90 Q 170 140 100 200" stroke="#047857" strokeWidth="4" opacity="0.5" />
        <path d="M260 160 Q 190 200 120 260" stroke="#047857" strokeWidth="4" opacity="0.5" />
      </svg>

      {/* Red Thread Line Accent along Left Edge */}
      <div className="thread-accent"></div>
    </>
  );
};
