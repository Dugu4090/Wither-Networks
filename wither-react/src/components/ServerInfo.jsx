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
    <div className="server-info">
      <div className="server-ip" onClick={copyIP} style={{ cursor: 'pointer' }}>
        <div className="ip-label">SERVER IP</div>
        <div className="ip-address">play.withernetworks.fun</div>
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copyIP}>
          <i className="fas fa-copy"></i>
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <div className="player-count">
        <i className="fas fa-users"></i>
        <span>248 Online</span>
      </div>
    </div>
  );
};

export default ServerInfo;
