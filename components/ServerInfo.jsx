import { useState } from 'react';

const ServerInfo = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = (e) => {
    e.stopPropagation();
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
    <div className="server-info-bar">
      <div className="server-info-content">
        <div className="server-ip" onClick={copyIP} style={{ cursor: 'pointer' }}>
          <i className="fas fa-server"></i>
          <span className="ip-text">play.withernetworks.fun</span>
          {copied && <span style={{ color: 'var(--green)', fontSize: '12px', marginLeft: '8px' }}>✓ Copied!</span>}
        </div>
        <div className="server-status">
          <div className="status-item">
            <div className="status-dot"></div>
            <span>Online</span>
          </div>
          <div className="status-item">
            <i className="fas fa-users"></i>
            <span>248 Players</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
