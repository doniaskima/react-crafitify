import React, { useState } from "react";
import styles from "./Alert.module.scss";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiAlarmExclamation } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiAlertTriangle, FiX } from "react-icons/fi";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography/Typography";

export type AlertVariant = "error" | "info" | "success" | "warning";

export interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  children: string;
  closeable?: boolean;
  variant?: AlertVariant;
  iconColor?: string;  
  backgroundColor?: string;  
}

export const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    children,
    closeable = false,
    variant = "error",
    iconColor, 
    backgroundColor, 
    ...rest
  } = props;

  const alertIcon = (
    <>
      {variant === "error" && <BiAlarmExclamation color={iconColor || "red"} />}
      {variant === "info" && <AiOutlineInfoCircle color={iconColor || "blue"} />}
      {variant === "success" && <FaRegCheckCircle color={iconColor || "green"} />}
      {variant === "warning" && <FiAlertTriangle color={iconColor || "orange"} />}
    </>
  );

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <CSSTransition
      classNames={{ exitActive: styles.exitActive }}
      in={isOpen}
      timeout={400}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={classNames(
          className,
          styles.alertContainer,
          variant === "error" && styles.error,
          variant === "info" && styles.info,
          variant === "success" && styles.success,
          variant === "warning" && styles.warning,
          backgroundColor && { backgroundColor }  
        )}
        style={{ borderColor: backgroundColor }}  
        {...rest}
      >
        <div>
          <div className={styles.alertTitleContainer}>
            <div className={styles.alertIcon}>{alertIcon}</div>
            <Typography
              className={classNames(
                styles.alertTitle,
                variant === "error" && styles.error,
                variant === "info" && styles.info,
                variant === "success" && styles.success,
                variant === "warning" && styles.warning
              )}
              type="h2"
              weight="bold"
            >
              {variant?.toUpperCase()}
            </Typography>
          </div>
          <Typography type="h3" variant="secondary">
            {children}
          </Typography>
        </div>
        {closeable && (
          <IconButton
            className={classNames(
              styles.closeButton,
              variant === "error" && styles.errorButton,
              variant === "info" && styles.infoButton,
              variant === "success" && styles.successButton,
              variant === "warning" && styles.warningButton
            )}
            content={<FiX />}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        )}
      </div>
    </CSSTransition>
  );
};

Alert.displayName = "Alert";
