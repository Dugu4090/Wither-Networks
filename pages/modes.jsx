import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBed, faHeartBroken, faCloud, faFlag } from '@fortawesome/free-solid-svg-icons';

const Modes = () => {
  const gameModes = [
    {
      icon: faGlobe,
      title: 'Survival',
      status: 'LIVE',
      statusType: 'released',
      description: 'Advanced survival experience with custom world generation, comprehensive economy systems, and competitive events.',
      features: [
        'Procedurally generated custom terrain',
        'Advanced player-driven economy',
        'Competitive weekly tournaments',
        'Protected land claiming system',
        'Custom enchantment mechanics'
      ]
    },
    {
      icon: faBed,
      title: 'Bedwars',
      status: 'Q2 2025',
      statusType: 'coming-soon',
      description: 'Competitive team-based strategy mode with professionally designed maps and ranked matchmaking.',
      features: [
        'Custom competitive map pool',
        'Strategic team upgrade systems',
        'Seasonal ranked tournaments',
        'ELO-based matchmaking',
        'Exclusive cosmetic rewards'
      ]
    },
    {
      icon: faHeartBroken,
      title: 'Lifesteal',
      status: 'Q2 2025',
      statusType: 'coming-soon',
      description: 'High-stakes PvP survival where combat skill directly impacts health pools and progression.',
      features: [
        'Advanced combat mechanics system',
        'Skill-based progression tracking',
        'Global competitive leaderboards',
        'Custom legendary items',
        'Player bounty contracts'
      ]
    },
    {
      icon: faCloud,
      title: 'Skyblock',
      status: 'Q3 2025',
      statusType: 'coming-soon',
      description: 'Resource management and progression in the sky with cooperative multiplayer systems.',
      features: [
        'Advanced island customization',
        'Cooperative multiplayer support',
        'Trading marketplace integration',
        'Progression-based challenges',
        'Island ranking system'
      ]
    },
    {
      icon: faFlag,
      title: 'Factions',
      status: 'Q3 2025',
      statusType: 'coming-soon',
      description: 'Large-scale faction warfare with territory control, raids, and strategic alliances.',
      features: [
        'Faction warfare mechanics',
        'Strategic base raiding',
        'Territory control systems',
        'Alliance and diplomacy tools',
        'Economy and trading'
      ]
    }
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1>Modes</h1>
        <p>Explore our professionally designed game modes built for competitive play</p>
      </div>

      <section className="game-modes">
        <div className="modes-container">
          {gameModes.map((mode, index) => (
            <div className="mode-card" key={index}>
              <div className="mode-header">
                <div className="mode-icon">
                  <FontAwesomeIcon icon={mode.icon} />
                </div>
                <h3>{mode.title}</h3>
              </div>
              <div className={`mode-status ${mode.statusType}`}>{mode.status}</div>
              <p>{mode.description}</p>
              <ul className="mode-features">
                {mode.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Modes;