/// <reference types="react" />
import { ModalProps } from './Modal.types';
declare const Modal: import("react").ForwardRefExoticComponent<ModalProps> & {
    displayName?: string | undefined;
} & {
    Group: import("react").FunctionComponent<Omit<any, "ref">>;
};
export default Modal;
