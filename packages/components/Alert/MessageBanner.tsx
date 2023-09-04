// components/MessageBanner.tsx
import React from "react";
import styles from "./MessageBanner.module.scss";

export interface MessageBannerProps {
  children: React.ReactNode;
}

const MessageBanner: React.FC<MessageBannerProps> = ({ children }) => {
  return (
    <div id="InfoBanner" className={styles.banner}>
      <span className={`${styles.reversed} ${styles.reversedRight}`}>
        <span>&#9888;</span>
      </span>
      <span className={`${styles.reversed} ${styles.reversedLeft}`}>
        {children}
      </span>
    </div>
  );
};

export default MessageBanner;
