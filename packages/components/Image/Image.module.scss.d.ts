declare module '*.module.scss' {
    const styles: {
      [key: string]: string | { [key: string]: string };
    };
    export default styles;
  }
  