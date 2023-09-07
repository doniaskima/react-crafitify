import React, { useState } from 'react';
import './ModernAlert.scss';
import { FaTimes, FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaTimesCircle, FaThumbsUp } from 'react-icons/fa';

export type AlertType = 'success' | 'info' | 'warning' | 'danger' | 'primary';

export interface ModernAlertProps {
  type: AlertType;
  message: string;
}

const ModernAlert: React.FC<ModernAlertProps> = ({ type, message }) => {
  const alertClass = `alert alert-simple alert-${type}`;

  const getIcon = (type: AlertType) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="icon" />;
      case 'info':
        return <FaInfoCircle className="icon" />;
      case 'warning':
        return <FaExclamationTriangle className="icon" />;
      case 'danger':
        return <FaTimesCircle className="icon" />;
      case 'primary':
        return <FaThumbsUp className="icon" />;
      default:
        return null;
    }
  };

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className={alertClass} role="alert">
      <div className="content">
        {getIcon(type)}
        <strong className="font__weight-semibold">{getAlertTitle(type)}</strong> {message}
      </div>
    </div>
  );
};

const getAlertTitle = (type: AlertType) => {
  switch (type) {
    case 'success':
      return 'Well done!';
    case 'info':
      return 'Heads up!';
    case 'warning':
      return 'Warning!';
    case 'danger':
      return 'Oh snap!';
    case 'primary':
      return 'Well done!';
    default:
      return '';
  }
};

export default ModernAlert;
