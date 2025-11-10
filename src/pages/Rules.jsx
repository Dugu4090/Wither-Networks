const Rules = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h2>Server Rules</h2>
          <p>Please read and follow these rules to ensure a fun and fair experience for everyone</p>
        </div>
      </section>

      <section className="features">
        <h2>General Rules</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-comments"></i></div>
            <h3>1. Respect All Players</h3>
            <p>Treat everyone with respect. Harassment, bullying, racism, sexism, or discrimination of any kind will not be tolerated. Keep chat friendly and appropriate for all ages.</p>
            <p style={{ color: '#FF6B6B', marginTop: '10px' }}><strong>Punishment:</strong> Mute → Temporary Ban → Permanent Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-ban"></i></div>
            <h3>2. No Cheating/Hacking</h3>
            <p>Use of hacked clients, cheat mods, or any unfair advantage is strictly prohibited. This includes x-ray, fly hacks, kill aura, auto-clickers, and similar tools.</p>
            <p style={{ color: '#FF6B6B', marginTop: '10px' }}><strong>Punishment:</strong> Permanent Ban (No Appeals)</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <h3>3. No Spam/Advertising</h3>
            <p>Spamming chat, advertising other servers, or posting links without permission is not allowed. This includes excessive use of caps, symbols, or repeated messages.</p>
            <p style={{ color: '#FF6B6B', marginTop: '10px' }}><strong>Punishment:</strong> Mute → Temporary Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-bug"></i></div>
            <h3>4. No Exploiting</h3>
            <p>Exploiting bugs, glitches, or server mechanics for personal gain is forbidden. Report any bugs you find to staff instead of using them.</p>
            <p style={{ color: '#FF6B6B', marginTop: '10px' }}><strong>Punishment:</strong> Temporary Ban → Permanent Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-hands-helping"></i></div>
            <h3>5. No Scamming</h3>
            <p>Scamming other players in trades, sales, or agreements is not allowed. Always honor your deals and trades.</p>
            <p style={{ color: '#FF6B6B', marginTop: '10px' }}><strong>Punishment:</strong> Warning → Temporary Ban → Permanent Ban</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-user-shield"></i></div>
            <h3>6. Respect Staff</h3>
            <p>Follow staff instructions at all times. Staff members are here to help and enforce rules. Arguing with or disrespecting staff will result in punishment.</p>
            <p style={{ color: '#FF6B6B', marginTop: '10px' }}><strong>Punishment:</strong> Mute → Temporary Ban</p>
          </div>
        </div>
      </section>

      <section className="features" style={{ paddingBottom: '80px' }}>
        <h2>Additional Guidelines</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-home"></i></div>
            <h3>Building & Griefing</h3>
            <p>• Build respectfully and away from other players unless given permission<br/>
            • No griefing other players' builds or bases<br/>
            • Keep builds appropriate and family-friendly<br/>
            • No lag machines or structures that harm server performance</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-gamepad"></i></div>
            <h3>PvP Rules</h3>
            <p>• Respect PvP zones and safe areas<br/>
            • No combat logging (logging out during combat)<br/>
            • No teaming in solo game modes<br/>
            • Report suspicious combat activity to staff</p>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-user-alt"></i></div>
            <h3>Account Security</h3>
            <p>• Keep your account secure with a strong password<br/>
            • Never share your account with others<br/>
            • You are responsible for all actions on your account<br/>
            • Report compromised accounts immediately</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
