import React from 'react';
import './ModernAlert.scss';
export type AlertType = 'success' | 'info' | 'warning' | 'danger' | 'primary';
export interface ModernAlertProps {
  type: AlertType;
  message: string;
}
declare const ModernAlert: React.FC<ModernAlertProps>;
export default ModernAlert;
