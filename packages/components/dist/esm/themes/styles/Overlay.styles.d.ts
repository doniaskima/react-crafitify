declare const overlayStyles: {
  base: (
    props?:
      | ({
          opacity?: '25' | '50' | '75' | null | undefined;
          open?: boolean | null | undefined;
          color?: 'gray' | 'white' | 'dark' | null | undefined;
          blur?: 'base' | 'none' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined;
        } & import('class-variance-authority/dist/types').ClassProp)
      | undefined,
  ) => string;
};
export { overlayStyles };
