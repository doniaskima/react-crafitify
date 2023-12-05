declare const avatarStyles: {
  base: (
    props?:
      | ({
          tone?: 'light' | 'solid' | 'glossy' | 'outline' | null | undefined;
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
          size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs' | null | undefined;
          radius?:
            | 'base'
            | 'none'
            | 'sm'
            | 'md'
            | 'lg'
            | 'full'
            | null
            | undefined;
          shadow?:
            | 'base'
            | 'none'
            | 'sm'
            | 'md'
            | 'lg'
            | 'xl'
            | null
            | undefined;
          shadowColor?:
            | 'none'
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
          outlined?: boolean | null | undefined;
        } & import('class-variance-authority/dist/types').ClassProp)
      | undefined,
  ) => string;
  status: (
    props?:
      | ({
          position?:
            | 'top-right'
            | 'top-left'
            | 'bottom-right'
            | 'bottom-left'
            | null
            | undefined;
          size?: 'sm' | 'md' | 'lg' | 'xl' | 'xs' | null | undefined;
          radius?:
            | 'base'
            | 'none'
            | 'sm'
            | 'md'
            | 'lg'
            | 'full'
            | null
            | undefined;
          status?: 'online' | 'offline' | 'busy' | 'away' | null | undefined;
        } & import('class-variance-authority/dist/types').ClassProp)
      | undefined,
  ) => string;
  image: (
    props?:
      | ({
          radius?:
            | 'base'
            | 'none'
            | 'sm'
            | 'md'
            | 'lg'
            | 'full'
            | null
            | undefined;
        } & import('class-variance-authority/dist/types').ClassProp)
      | undefined,
  ) => string;
  group: (
    props?: import('class-variance-authority/dist/types').ClassProp | undefined,
  ) => string;
};
export { avatarStyles };
