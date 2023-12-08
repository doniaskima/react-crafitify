import { createIndependentContext } from '../../hooks/use-independent-context.hook';
import { ModalGroupContext } from './ModalGroup.types';

export const [ModalGroupContextProvider, useModalGroupContext] =
  createIndependentContext<ModalGroupContext>();
