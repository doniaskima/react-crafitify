import React, { ReactNode, HTMLProps } from 'react';
import './Container.scss';
export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  full?: boolean;
  children: ReactNode;
}
declare const Container: React.FC<ContainerProps>;
export default Container;
