declare const modalStyles: {
  base: (
    props?:
      | ({
          mode?: 'dialog' | 'fullscreen' | null | undefined;
          color?: 'gray' | 'white' | 'slate' | 'zinc' | null | undefined;
          radius?: 'base' | 'none' | 'sm' | 'md' | 'lg' | null | undefined;
          shadow?:
            | 'base'
            | 'none'
            | 'sm'
            | 'md'
            | 'lg'
            | 'xl'
            | null
            | undefined;
          size?:
            | 'auto'
            | 'screen'
            | 'sm'
            | 'md'
            | 'lg'
            | 'xl'
            | null
            | undefined;
          position?: 'center' | 'top' | 'bottom' | null | undefined;
        } & import('class-variance-authority/dist/types').ClassProp)
      | undefined,
  ) => string;
};
export { modalStyles };
