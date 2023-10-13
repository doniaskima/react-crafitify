import React from "react";
export interface MessageAlertProps {
    variant: "default" | "error" | "warning" | "neutral" | "success" | "uhm";
    children: React.ReactNode;
}
declare const MessageAlert: React.FC<MessageAlertProps>;
export default MessageAlert;
