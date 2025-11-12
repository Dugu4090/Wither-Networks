import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faCcVisa, faCcMastercard, faPaypal, faBitcoin } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa as faCcVisaBrand, faCcMastercard as faCcMastercardBrand, faPaypal as faPaypalBrand, faBitcoin as faBitcoinBrand } from '@fortawesome/free-brands-svg-icons';

const Store = () => {
  const [ranks] = useState([
    {
      id: 1,
      name: 'VIP',
      price: '$5.99',
      color: 'blue',
      features: [
        'Colored chat',
        'VIP prefix',
        '2x EXP boost',
        'Access to /nick command',
        'Priority support'
      ]
    },
    {
      id: 2,
      name: 'Premium',
      price: '$9.99',
      color: 'purple',
      features: [
        'Everything in VIP',
        'Fly command',
        '10 homes',
        '3x EXP boost',
        'Access to /hat command',
        'Reserved slot'
      ]
    },
    {
      id: 3,
      name: 'Elite',
      price: '$19.99',
      color: 'gold',
      features: [
        'Everything in Premium',
        '50 homes',
        '5x EXP boost',
        'Access to /vanish command',
        'Custom tags',
        'Free monthly crates'
      ]
    },
    {
      id: 4,
      name: 'Legend',
      price: '$39.99',
      color: 'red',
      features: [
        'Everything in Elite',
        '100 homes',
        '10x EXP boost',
        'Access to /speed command',
        'Custom tags with colors',
        'Weekly crates',
        'Special Legend events'
      ]
    }
  ]);

  const paymentMethods = [
    { icon: faCcVisaBrand, name: 'Visa', color: '#1a1f71' },
    { icon: faCcMastercardBrand, name: 'Mastercard', color: '#eb001b' },
    { icon: faPaypalBrand, name: 'PayPal', color: '#003087' },
    { icon: faBitcoinBrand, name: 'Bitcoin', color: '#f7931a' }
  ];

  return (
    <div className="container">
      <section className="page-header">
        <h1>Store</h1>
        <p>Support the server and enhance your gameplay experience with our premium ranks and packages.</p>
      </section>

      <section className="store-content">
        <div className="ranks-grid">
          {ranks.map(rank => (
            <div key={rank.id} className="rank-preview-card">
              <div className="rank-icon">
                <FontAwesomeIcon icon={faCrown} />
              </div>
              <h3>{rank.name}</h3>
              <div className="rank-price">{rank.price}</div>
              <ul className="mode-features">
                {rank.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="cta-button" style={{ width: '100%', marginTop: '1rem' }}>
                Purchase Now
              </button>
            </div>
          ))}
        </div>

        <div className="store-info">
          <h2>Why Purchase Ranks?</h2>
          <p>
            Purchasing ranks helps support the server and allows us to provide better gameplay experience 
            for everyone. All purchases are one-time payments with no recurring fees.
          </p>
          
          <h3>Payment Methods</h3>
          <div className="payment-methods">
            {paymentMethods.map((method, index) => (
              <FontAwesomeIcon 
                key={index} 
                icon={method.icon} 
                style={{ fontSize: '2rem', margin: '0 1rem', color: method.color }} 
                title={method.name}
              />
            ))}
          </div>
          
          <h3>Need Help?</h3>
          <p>
            If you have any questions about our store or need assistance with a purchase, 
            please <Link href="/contact">contact our support team</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Store;