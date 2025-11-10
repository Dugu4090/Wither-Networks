const GameModes = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Game Modes</h1>
        <p>Explore our professionally designed game modes built for competitive play</p>
      </div>

      <section className="game-modes">
        <div className="modes-container">
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Survival</h3>
            </div>
            <div className="mode-status released">LIVE</div>
            <p>Advanced survival experience with custom world generation, comprehensive economy systems, and competitive events.</p>
            <ul className="mode-features">
              <li>Procedurally generated custom terrain</li>
              <li>Advanced player-driven economy</li>
              <li>Competitive weekly tournaments</li>
              <li>Protected land claiming system</li>
              <li>Custom enchantment mechanics</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-bed"></i>
              </div>
              <h3>Bedwars</h3>
            </div>
            <div className="mode-status coming-soon">Q2 2025</div>
            <p>Competitive team-based strategy mode with professionally designed maps and ranked matchmaking.</p>
            <ul className="mode-features">
              <li>Custom competitive map pool</li>
              <li>Strategic team upgrade systems</li>
              <li>Seasonal ranked tournaments</li>
              <li>ELO-based matchmaking</li>
              <li>Exclusive cosmetic rewards</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-heart-broken"></i>
              </div>
              <h3>Lifesteal</h3>
            </div>
            <div className="mode-status coming-soon">Q2 2025</div>
            <p>High-stakes PvP survival where combat skill directly impacts health pools and progression.</p>
            <ul className="mode-features">
              <li>Advanced combat mechanics system</li>
              <li>Skill-based progression tracking</li>
              <li>Global competitive leaderboards</li>
              <li>Custom legendary items</li>
              <li>Player bounty contracts</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Skyblock</h3>
            </div>
            <div className="mode-status coming-soon">Q3 2025</div>
            <p>Resource management and progression in the sky with cooperative multiplayer systems.</p>
            <ul className="mode-features">
              <li>Advanced island customization</li>
              <li>Cooperative multiplayer support</li>
              <li>Trading marketplace integration</li>
              <li>Progression-based challenges</li>
              <li>Island ranking system</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-flag"></i>
              </div>
              <h3>Factions</h3>
            </div>
            <div className="mode-status coming-soon">Q3 2025</div>
            <p>Large-scale faction warfare with territory control, raids, and strategic alliances.</p>
            <ul className="mode-features">
              <li>Faction warfare mechanics</li>
              <li>Strategic base raiding</li>
              <li>Territory control systems</li>
              <li>Alliance and diplomacy tools</li>
              <li>Economy and trading</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameModes;
