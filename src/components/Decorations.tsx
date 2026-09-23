import React from 'react';

export const StarDecoration: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 24,
  color = '#F5C518',
  style
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0, ...style }}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export const ScribbleUnderline: React.FC<{ color?: string }> = ({ color = '#F06458' }) => (
  <svg width="140" height="12" viewBox="0 0 140 12" fill="none" style={{ display: 'block', marginTop: '2px' }}>
    <path d="M2 8 C 30 2, 70 12, 138 6" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const HandDrawnArrow: React.FC<{ color?: string; style?: React.CSSProperties }> = ({
  color = '#1749D1',
  style
}) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={style}>
    <path d="M8 32 C 16 28, 24 16, 32 8" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M20 8 H 32 V 20" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CurvedArrowDown: React.FC<{ color?: string; style?: React.CSSProperties }> = ({
  color = '#1749D1',
  style
}) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={style}>
    <path d="M10 8 Q 30 4 36 24 T 20 40" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M12 32 L 20 40 L 28 34" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
