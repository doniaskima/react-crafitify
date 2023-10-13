 
import { forwardRef, Ref } from 'react';
import { AvatarGroupComponent, AvatarGroupProps } from './AvatarGroup.types';
import { useComponentTheme } from '../../themes/theme.context';
import { usePropId } from '../../utils/usePropId';

const AvatarGroup: AvatarGroupComponent = forwardRef(
  (props: AvatarGroupProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Avatar');
    const {
      children,
      className = '',
      ...additionalProps
    } = {
      ...props,
    };
    const id = usePropId(props.id);

    return (
      <div id={id} ref={ref} className={theme.group({ className })} {...additionalProps}>
        {children}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
