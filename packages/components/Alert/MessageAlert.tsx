// components/MessageAlert.tsx
import React from "react";
import styles from "./MessageAlert.module.scss";
import classNames from "classnames";

export interface MessageAlertProps {
  variant: "default" | "error" | "warning" | "neutral" | "success" | "uhm";
  children: React.ReactNode;
}

const MessageAlert: React.FC<MessageAlertProps> = ({ variant, children }) => {
  return (
    <section className={classNames(styles.message, styles[variant])}>
      <header></header>
      <i></i>
      <h2>
        <span>{variant.charAt(0).toUpperCase() + variant.slice(1)}</span>
        {children}
      </h2>
    </section>
  );
};

export default MessageAlert;
