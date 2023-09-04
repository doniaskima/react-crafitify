// components/ModernAlert.tsx
import React from "react";
import styles from "./ModernAlert.module.scss";
import classNames from "classnames";

export interface ModernAlertProps {
  children: React.ReactNode;
  variant: "simple" | "success" | "danger" | "warning";
  backgroundColor?: string; // Add backgroundColor prop
}

const ModernAlert: React.FC<ModernAlertProps> = ({
  children,
  variant,
  backgroundColor, // Include backgroundColor prop
}) => {
  return (
    <div
      className={classNames(styles.alert, styles[`${variant}-alert`])}
      style={{ backgroundColor }} // Apply backgroundColor to the style
    >
      <h3>{children}</h3>
      <a className="close">&times;</a>
    </div>
  );
};

export default ModernAlert;
