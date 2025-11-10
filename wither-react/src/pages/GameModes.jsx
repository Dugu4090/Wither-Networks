const GameModes = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h2>Game Modes</h2>
          <p>Explore our unique and exciting game modes designed for every type of player</p>
        </div>
      </section>

      <section className="game-modes">
        <div className="modes-container">
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-mountain"></i>
              </div>
              <h3>Survival</h3>
            </div>
            <div className="mode-status released">RELEASED</div>
            <p>Experience Minecraft survival like never before with our enhanced custom features, unique terrain generation, and thriving player economy.</p>
            <ul className="mode-features">
              <li>Custom terrain generation</li>
              <li>Unique economy system</li>
              <li>Regular events and competitions</li>
              <li>Player shops and trading</li>
              <li>Custom enchantments</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-bed"></i>
              </div>
              <h3>Bedwars</h3>
            </div>
            <div className="mode-status coming-soon">COMING SOON</div>
            <p>Competitive team-based bed breaking with custom maps, upgrades, and tournaments.</p>
            <ul className="mode-features">
              <li>Custom map rotations</li>
              <li>Team upgrade system</li>
              <li>Seasonal tournaments</li>
              <li>Ranked matchmaking</li>
              <li>Cosmetic rewards</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Lifesteal</h3>
            </div>
            <div className="mode-status coming-soon">COMING SOON</div>
            <p>Intense PvP survival where you steal health from opponents in combat.</p>
            <ul className="mode-features">
              <li>Unique combat mechanics</li>
              <li>Progression system</li>
              <li>Leaderboard rankings</li>
              <li>Custom items</li>
              <li>Bounty system</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Skyblock</h3>
            </div>
            <div className="mode-status coming-soon">COMING SOON</div>
            <p>Start on a floating island and expand your empire in the sky.</p>
            <ul className="mode-features">
              <li>Island customization</li>
              <li>Trading system</li>
              <li>Co-op gameplay</li>
              <li>Island levels</li>
              <li>Custom challenges</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-flag"></i>
              </div>
              <h3>Factions</h3>
            </div>
            <div className="mode-status coming-soon">COMING SOON</div>
            <p>Build your faction, raid enemies, and dominate the server.</p>
            <ul className="mode-features">
              <li>Faction wars</li>
              <li>Base raiding</li>
              <li>Territory control</li>
              <li>Alliance system</li>
              <li>Economy trading</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameModes;
