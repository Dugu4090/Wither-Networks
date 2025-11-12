import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faStar, faCrown, faTrophy, faChessKing, faBolt, faDragon, faInfinity, faCheck } from '@fortawesome/free-solid-svg-icons';

const Ranks = () => {
  const ranks = [
    {
      icon: faGem,
      name: 'VIP',
      priceUsd: '$1.99',
      perks: [
        'VIP prefix & chat color',
        'Flight in survival',
        '2 private vaults',
        'Join full server'
      ]
    },
    {
      icon: faStar,
      name: 'PRO',
      priceUsd: '$4.99',
      perks: [
        'All VIP benefits',
        'PRO prefix & colors',
        '5 private vaults',
        'Custom chat formatting'
      ]
    },
    {
      icon: faCrown,
      name: 'SUPREME',
      priceUsd: '$6.99',
      perks: [
        'All PRO benefits',
        'SUPREME prefix',
        '8 private vaults',
        'Particle effects'
      ]
    },
    {
      icon: faTrophy,
      name: 'LEGEND',
      priceUsd: '$9.99',
      perks: [
        'All SUPREME benefits',
        'LEGEND prefix',
        '12 private vaults',
        'Custom join messages'
      ]
    },
    {
      icon: faChessKing,
      name: 'WITHER',
      priceUsd: '$12.99',
      perks: [
        'All LEGEND benefits',
        'WITHER prefix',
        '16 private vaults',
        'Exclusive cosmetics pack'
      ]
    },
    {
      icon: faBolt,
      name: 'ZEUS',
      priceUsd: '$16.99',
      perks: [
        'All WITHER benefits',
        'ZEUS prefix',
        '20 private vaults',
        'Lightning strike effects'
      ]
    },
    {
      icon: faDragon,
      name: 'MYTHIC',
      priceUsd: '$19.99',
      perks: [
        'All ZEUS benefits',
        'MYTHIC prefix',
        '25 private vaults',
        'Dragon companion pet'
      ]
    },
    {
      icon: faInfinity,
      name: 'ELITE',
      priceUsd: '$24.99',
      perks: [
        'All MYTHIC benefits',
        'ELITE prefix',
        'Unlimited vaults',
        'All future premium features'
      ]
    }
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1>Premium Membership</h1>
        <p>Support server development and unlock exclusive features</p>
      </div>

      <section className="ranks-section">
        <div className="ranks-grid">
          {ranks.map((rank, index) => (
            <div className="rank-card" key={index}>
              <div className="rank-icon">
                <FontAwesomeIcon icon={rank.icon} />
              </div>
              <h3 className="rank-name">{rank.name}</h3>
              <div className="rank-price">{rank.priceUsd}</div>
              <ul className="rank-perks">
                {rank.perks.map((perk, i) => (
                  <li key={i}>
                    <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn primary">Purchase Rank</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ranks;