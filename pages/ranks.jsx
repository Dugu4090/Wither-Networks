const Ranks = () => {
  const ranks = [
    {
      icon: 'fa-gem',
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
      icon: 'fa-star',
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
      icon: 'fa-crown',
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
      icon: 'fa-trophy',
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
      icon: 'fa-chess-king',
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
      icon: 'fa-bolt',
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
      icon: 'fa-dragon',
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
      icon: 'fa-infinity',
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
        <div className="ranks-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '60px' }}>
          {ranks.map((rank, index) => (
            <div className="rank-card" key={index} style={{
              background: 'var(--dark-grey)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div className="rank-icon" style={{
                width: '72px',
                height: '72px',
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '32px',
                color: 'var(--green)'
              }}>
                <i className={`fas ${rank.icon}`}></i>
              </div>
              <h3 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '1.5rem',
                color: 'var(--white)',
                marginBottom: '12px',
                fontWeight: 700
              }}>{rank.name}</h3>
              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '1.75rem',
                color: 'var(--green)',
                fontWeight: 700,
                marginBottom: '24px'
              }}>{rank.priceUsd}</div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                textAlign: 'left',
                marginBottom: '24px'
              }}>
                {rank.perks.map((perk, i) => (
                  <li key={i} style={{
                    padding: '10px 0',
                    color: 'var(--light-grey)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px'
                  }}>
                    <i className="fas fa-check" style={{ color: 'var(--green)' }}></i> {perk}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn primary" style={{
                width: '100%',
                justifyContent: 'center',
                textDecoration: 'none'
              }}>Purchase Rank</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ranks;
