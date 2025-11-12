import { useState } from 'react';

const ServerInfo = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    const ip = 'play.withernetworks.fun';
    navigator.clipboard.writeText(ip).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = ip;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="floating-ip-button" onClick={copyIP}>
      <div className="ip-content">
        <i className="fas fa-server"></i>
        <span className="ip-text">play.withernetworks.fun</span>
        {copied ? (
          <span className="copy-status copied">✓ Copied!</span>
        ) : (
          <span className="copy-status">Click to copy</span>
        )}
      </div>
    </div>
  );
};

export default ServerInfo;
