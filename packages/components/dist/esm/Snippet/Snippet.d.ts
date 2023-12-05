import * as React from 'react';
export interface SnippetProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * The content for the Snippet
   */
  children: string;
  /**
   * If the Popup has an indicator
   *
   * @default false
   */
  hasIndicator?: boolean;
}
/**
 * @public
 *
 * @description
 *
 * The Snippet is a piece of text that the user can copy.
 */
export declare const Snippet: React.FC<SnippetProps>;
