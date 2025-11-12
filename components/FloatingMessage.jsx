import { useState, useEffect } from 'react';

const FloatingMessage = ({ message, type = 'info', duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const getTypeClass = () => {
    switch (type) {
      case 'success':
        return 'floating-message-success';
      case 'error':
        return 'floating-message-error';
      case 'warning':
        return 'floating-message-warning';
      default:
        return 'floating-message-info';
    }
  };

  return (
    <div className={`floating-message ${getTypeClass()}`}>
      <div className="floating-message-content">
        <span>{message}</span>
        <button 
          className="floating-message-close"
          onClick={() => setVisible(false)}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FloatingMessage;