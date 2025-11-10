const Rules = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Server Rules</h1>
        <p>Compliance with these rules is mandatory for all players</p>
      </div>

      <section className="features">
        <h2>Core Regulations</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-user-shield"></i></div>
            <h3>1. Professional Conduct</h3>
            <p>Maintain respectful communication. Harassment, discrimination, or toxic behavior will result in immediate action.</p>
            <p style={{ color: 'var(--green)', marginTop: '12px', fontSize: '14px' }}><strong>Enforcement:</strong> Mute → Temporary Ban → Permanent Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-ban"></i></div>
            <h3>2. Zero-Tolerance Policy</h3>
            <p>Any form of cheating, hacking, or unfair advantage tools is strictly prohibited. This includes but is not limited to client modifications, macros, and exploits.</p>
            <p style={{ color: 'var(--green)', marginTop: '12px', fontSize: '14px' }}><strong>Enforcement:</strong> Permanent Ban (No Appeals)</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
            <h3>3. No Exploitation</h3>
            <p>Exploiting bugs, glitches, or unintended mechanics is forbidden. Report vulnerabilities to administration immediately.</p>
            <p style={{ color: 'var(--green)', marginTop: '12px', fontSize: '14px' }}><strong>Enforcement:</strong> Temporary Ban → Permanent Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-comments"></i></div>
            <h3>4. Communication Standards</h3>
            <p>No spam, advertising, or excessive messaging. All communications must remain professional and on-topic.</p>
            <p style={{ color: 'var(--green)', marginTop: '12px', fontSize: '14px' }}><strong>Enforcement:</strong> Mute → Temporary Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-handshake"></i></div>
            <h3>5. Fair Trading</h3>
            <p>Scamming or fraudulent trading is prohibited. All transactions must be conducted in good faith.</p>
            <p style={{ color: 'var(--green)', marginTop: '12px', fontSize: '14px' }}><strong>Enforcement:</strong> Warning → Temporary Ban → Permanent Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-gavel"></i></div>
            <h3>6. Staff Authority</h3>
            <p>Comply with all staff directives. Staff decisions are final and must be respected at all times.</p>
            <p style={{ color: 'var(--green)', marginTop: '12px', fontSize: '14px' }}><strong>Enforcement:</strong> Mute → Temporary Ban</p>
          </div>
        </div>
      </section>

      <section className="features" style={{ paddingBottom: '80px' }}>
        <h2>Additional Guidelines</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-building"></i></div>
            <h3>Building Regulations</h3>
            <p>• Maintain appropriate distance from other builds<br/>
            • No griefing or unauthorized modifications<br/>
            • All structures must be appropriate<br/>
            • No performance-impacting constructions</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-swords"></i></div>
            <h3>Combat Guidelines</h3>
            <p>• Respect designated PvP zones<br/>
            • No combat logging during engagement<br/>
            • Follow game mode specific rules<br/>
            • Report suspicious activity immediately</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-lock"></i></div>
            <h3>Account Responsibility</h3>
            <p>• Secure your account with strong credentials<br/>
            • Account sharing is prohibited<br/>
            • All actions on your account are your responsibility<br/>
            • Report compromised accounts immediately</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
