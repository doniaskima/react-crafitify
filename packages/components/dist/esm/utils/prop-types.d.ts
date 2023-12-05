export declare const tuple: <T extends string[]>(...args: T) => T;
export declare const tupleNumber: <T extends number[]>(...args: T) => T;
declare const buttonTypes: [
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'abort',
  'secondary-light',
  'success-light',
  'warning-light',
  'error-light',
];
declare const normalTypes: [
  'default',
  'secondary',
  'success',
  'warning',
  'error',
];
declare const snippetTypes: [
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'dark',
  'lite',
];
declare const cardTypes: [
  'default',
  'secondary',
  'success',
  'warning',
  'error',
  'dark',
  'lite',
  'alert',
  'purple',
  'violet',
  'cyan',
];
declare const copyTypes: ['default', 'silent', 'prevent'];
declare const triggerTypes: ['hover', 'click'];
declare const placement: [
  'top',
  'topStart',
  'topEnd',
  'left',
  'leftStart',
  'leftEnd',
  'bottom',
  'bottomStart',
  'bottomEnd',
  'right',
  'rightStart',
  'rightEnd',
];
declare const dividerAlign: ['start', 'center', 'end', 'left', 'right'];
export type ButtonTypes = (typeof buttonTypes)[number];
export type NormalTypes = (typeof normalTypes)[number];
export type SnippetTypes = (typeof snippetTypes)[number];
export type CardTypes = (typeof cardTypes)[number];
export type CopyTypes = (typeof copyTypes)[number];
export type TriggerTypes = (typeof triggerTypes)[number];
export type Placement = (typeof placement)[number];
export type DividerAlign = (typeof dividerAlign)[number];
export {};
