// components/MessageType.tsx
import React from "react";
import styles from "./MessageType.module.scss";

export interface MessageTypeProps {
  type: "error" | "warning" | "success";
  children: React.ReactNode;
}

const MessageType: React.FC<MessageTypeProps> = ({ type, children }) => {
  return (
    <div className={`${styles.message} ${styles[`message--${type}`]}`}>
      <p>{children}</p>
    </div>
  );
};

export default MessageType;
