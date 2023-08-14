export interface LoaderProps {
  color?: string;
  size?: number;
  type?: TLoader;
  borderSize?: number;
}

export type TLoader = 'ring' | 'rotate' | 'dots';
