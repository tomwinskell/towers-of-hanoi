import React from 'react';

interface OverlayProps {
  children: React.ReactNode;
}

export default function Overlay({ children }: OverlayProps): React.ReactNode {
  return <div className=''>{children}</div>;
}
