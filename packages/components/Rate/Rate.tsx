import RcRate from 'rc-rate';
import { forwardRef } from 'react';
import type { RateProps } from 'rc-rate/lib/Rate';
import 'rc-rate/assets/index.css';

const Rate = (props: RateProps, ref: unknown) => {
  return <RcRate ref={ref} {...props} />;
};

export default forwardRef(Rate);
