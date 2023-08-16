import * as React from "react";
import classNames from "classnames";
import styles from "./Snippet.module.scss";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import { MdContentCopy } from "react-icons/md";
import { Popup } from "../Popup/Popup";

export interface SnippetProps
  extends React.ComponentPropsWithoutRef<"div"> {
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
export const Snippet: React.FC<SnippetProps> = (props) => {
  const {
    children,
    className,
    hasIndicator = false,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [popupText, setPopupText] = React.useState<string>("Copy");

  return (
    <div
      className={classNames(styles.container, className)}
      {...rest}
    >
      <Typography
        className={styles.snippetColor}
        style={{ userSelect: "none" }}
        type="h1"
        variant="primary"
      >
        $
      </Typography>
      <Typography type="h2" variant="primary">
        {children}
      </Typography>
      <Popup
        hasIndicator={hasIndicator}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        text={popupText}
      >
        <IconButton
          className={styles.snippetColor}
          content={<MdContentCopy />}
          onClick={() => {
            navigator.clipboard.writeText(children);
            setPopupText("Copied!");
          }}
          variant="primary"
        />
      </Popup>
    </div>
  );
};

Snippet.displayName = "Snippet";
