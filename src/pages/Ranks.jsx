const Ranks = () => {
  const ranks = [
    {
      icon: 'fa-star',
      name: 'VIP',
      priceUsd: '$1.99',
      priceInr: '≈ ₹165',
      perks: [
        'VIP prefix in chat',
        'Access to /fly',
        '2 player vaults',
        'Join full server'
      ]
    },
    {
      icon: 'fa-gem',
      name: 'PRO',
      priceUsd: '$4.99',
      priceInr: '≈ ₹415',
      perks: [
        'All VIP perks',
        'PRO prefix in chat',
        '5 player vaults',
        'Colored chat messages'
      ]
    },
    {
      icon: 'fa-crown',
      name: 'SUPREME',
      priceUsd: '$6.99',
      priceInr: '≈ ₹580',
      perks: [
        'All PRO perks',
        'SUPREME prefix',
        '8 player vaults',
        'Pet particles'
      ]
    },
    {
      icon: 'fa-trophy',
      name: 'LEGEND',
      priceUsd: '$9.99',
      priceInr: '≈ ₹830',
      perks: [
        'All SUPREME perks',
        'LEGEND prefix',
        '12 player vaults',
        'Custom join messages'
      ]
    },
    {
      icon: 'fa-skull',
      name: 'WITHER',
      priceUsd: '$12.99',
      priceInr: '≈ ₹1,075',
      perks: [
        'All LEGEND perks',
        'WITHER prefix',
        '16 player vaults',
        'Exclusive cosmetics'
      ]
    },
    {
      icon: 'fa-bolt',
      name: 'ZEUS',
      priceUsd: '$16.99',
      priceInr: '≈ ₹1,410',
      perks: [
        'All WITHER perks',
        'ZEUS prefix',
        '20 player vaults',
        'Lightning effects'
      ]
    },
    {
      icon: 'fa-dragon',
      name: 'MYTHIC',
      priceUsd: '$19.99',
      priceInr: '≈ ₹1,660',
      perks: [
        'All ZEUS perks',
        'MYTHIC prefix',
        '25 player vaults',
        'Dragon pet companion'
      ]
    },
    {
      icon: 'fa-chess-king',
      name: 'LEADER',
      priceUsd: '$24.99',
      priceInr: '≈ ₹2,075',
      perks: [
        'All MYTHIC perks',
        'LEADER prefix',
        'Unlimited vaults',
        'All future perks'
      ]
    }
  ];

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h2>Server Ranks</h2>
          <p>Support the server and unlock exclusive perks with our premium ranks!</p>
        </div>
      </section>

      <section className="ranks-section">
        <div className="ranks-container">
          {ranks.map((rank, index) => (
            <div className="rank-card" key={index}>
              <div className="rank-icon"><i className={`fas ${rank.icon}`}></i></div>
              <h3 className="rank-name">{rank.name}</h3>
              <div className="rank-prices">
                <div className="price-usd">{rank.priceUsd}</div>
                <div className="price-inr">{rank.priceInr}</div>
              </div>
              <ul className="rank-perks">
                {rank.perks.map((perk, i) => (
                  <li key={i}>
                    <i className="fas fa-check"></i> {perk}
                  </li>
                ))}
              </ul>
              <a href="#" className="buy-btn">Purchase</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ranks;
