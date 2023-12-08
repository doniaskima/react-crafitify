import React, { ReactNode } from 'react';
interface LovebtnProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}
declare const Lovebtn: React.FC<LovebtnProps>;
export default Lovebtn;
