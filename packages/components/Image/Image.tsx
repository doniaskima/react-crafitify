import { forwardRef, Ref, useMemo } from 'react';
import { ImageComponent, ImageProps } from './Image.types';
import { useComponentTheme } from '../themes/theme.context';
import { usePropId } from '../utils/usePropId';
import styles from './Image.module.scss';
import React from 'react';

const defaultProps: Partial<ImageProps> = {
  fit: 'contain',
  height: 'auto',
  loading: 'lazy',
  mode: 'dark',
  radius: 'none',
  width: '100%',
};

const Image: ImageComponent = forwardRef<HTMLDivElement, ImageProps>(
  (props: ImageProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Image');
    const {
      alt = '',
      caption,
      children,
      wrapperClassName = '',
      className = '',
      fit,
      radius,
      src,
      width,
      height,
      imageRef,
      loading,
      mode,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);

    const classes = useMemo(() => {
      const baseClasses = ['rounded-md']; // Add other base classes as needed
      const wrapperClasses = ['relative']; // Add other wrapper classes as needed
      const captionDarkClasses = ['bg-gray-800-50', 'text-gray-50']; // Add other caption dark mode classes as needed
    
      return `${baseClasses.join(' ')} ${wrapperClasses.join(' ')} ${captionDarkClasses.join(' ')}`;
    }, []);
    
    
      
    return (
      <div
        id={id}
        ref={ref}
        className={`${styles.wrapper} ${wrapperClassName}`} 
        {...additionalProps}
      >
        <img
          className={classes}
          src={src}
          alt={alt}
          height={height}
          width={width}
          loading={loading}
          ref={imageRef}
        />

        {caption && <figcaption className={styles.captionMode}>{caption}</figcaption>}
      </div>
    );
  }
);

Image.displayName = 'Image';

export default Image;
