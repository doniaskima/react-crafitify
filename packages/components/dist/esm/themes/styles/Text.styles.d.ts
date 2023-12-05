declare const textStyles: {
  base: (
    props?:
      | ({
          color?:
            | 'black'
            | 'blue'
            | 'gray'
            | 'green'
            | 'purple'
            | 'red'
            | 'white'
            | 'yellow'
            | 'dark'
            | null
            | undefined;
          leading?:
            | 'none'
            | '3'
            | '4'
            | '5'
            | '6'
            | '7'
            | '8'
            | 'normal'
            | '9'
            | 'loose'
            | '10'
            | 'tight'
            | 'snug'
            | 'relaxed'
            | null
            | undefined;
          size?:
            | 'base'
            | 'sm'
            | 'lg'
            | 'xl'
            | 'xs'
            | '2xl'
            | '3xl'
            | '4xl'
            | '5xl'
            | '6xl'
            | '7xl'
            | '8xl'
            | '9xl'
            | null
            | undefined;
          tracking?:
            | 'normal'
            | 'tight'
            | 'tighter'
            | 'wide'
            | 'wider'
            | 'widest'
            | null
            | undefined;
          weight?:
            | 'bold'
            | 'black'
            | 'medium'
            | 'light'
            | 'normal'
            | 'thin'
            | 'extraLight'
            | 'semiBold'
            | 'extraBold'
            | null
            | undefined;
        } & import('class-variance-authority/dist/types').ClassProp)
      | undefined,
  ) => string;
};
export { textStyles };
