import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTicketAlt, faCogs, faCreditCard, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const contactChannels = [
    {
      icon: faDiscord,
      title: 'Discord',
      description: 'Primary communication channel with instant staff response and active community engagement.',
      action: 'Join Discord Server',
      actionType: 'primary',
      link: '#'
    },
    {
      icon: faEnvelope,
      title: 'Email Support',
      description: 'For business inquiries, partnerships, or detailed technical support requests.',
      emails: ['support@withernetworks.fun', 'business@withernetworks.fun']
    },
    {
      icon: faTicketAlt,
      title: 'Support Tickets',
      description: 'Private support channel for account issues, reports, and confidential matters.',
      action: 'Create Ticket',
      actionType: 'secondary',
      link: '#'
    }
  ];

  const supportCategories = [
    {
      icon: faCogs,
      title: 'Technical Support',
      description: 'Professional assistance with technical issues and system errors.',
      points: [
        'Connection diagnostics',
        'Performance optimization',
        'Bug reporting & tracking',
        'Client compatibility issues'
      ]
    },
    {
      icon: faCreditCard,
      title: 'Transaction Support',
      description: 'Assistance with purchases, upgrades, and payment processing.',
      points: [
        'Rank purchase support',
        'Payment processing issues',
        'Upgrade inquiries',
        'Transaction verification'
      ]
    },
    {
      icon: faFlag,
      title: 'Player Reports',
      description: 'Report rule violations and suspicious activity for immediate review.',
      points: [
        'Cheating & exploits',
        'Chat violations',
        'Griefing incidents',
        'Fraudulent activity'
      ]
    }
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Professional support available 24/7</p>
      </div>

      <section className="features">
        <h2>Contact Channels</h2>
        <div className="features-grid">
          {contactChannels.map((channel, index) => (
            <div className="feature-card" key={index}>
              <FontAwesomeIcon icon={channel.icon} className="feature-icon" />
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
              {channel.action && (
                <div className="contact-action">
                  <a href={channel.link} className={`btn ${channel.actionType}`}>
                    {channel.action}
                  </a>
                </div>
              )}
              {channel.emails && (
                <div className="contact-emails">
                  {channel.emails.map((email, emailIndex) => (
                    <p key={emailIndex} className="email-address">{email}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <h2>Support Categories</h2>
        <div className="features-grid">
          {supportCategories.map((category, index) => (
            <div className="feature-card" key={index}>
              <FontAwesomeIcon icon={category.icon} className="feature-icon" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul className="support-list">
                {category.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;