import React from 'react';
export interface MessageTypeProps {
  type: 'error' | 'warning' | 'success';
  children: React.ReactNode;
}
declare const MessageType: React.FC<MessageTypeProps>;
export default MessageType;
