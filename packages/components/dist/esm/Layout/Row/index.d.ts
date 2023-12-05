import React, { ReactNode, HTMLProps } from 'react';
interface RowProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}
declare const Row: React.FC<RowProps>;
export default Row;
