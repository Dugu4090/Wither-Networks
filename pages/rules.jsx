import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faBan, faShieldAlt, faComments, faHandshake, faGavel, faBuilding, faFistRaised, faLock } from '@fortawesome/free-solid-svg-icons';

const Rules = () => {
  const coreRegulations = [
    {
      icon: faUserShield,
      title: '1. Professional Conduct',
      description: 'Maintain respectful communication. Harassment, discrimination, or toxic behavior will result in immediate action.',
      enforcement: 'Mute → Temporary Ban → Permanent Ban'
    },
    {
      icon: faBan,
      title: '2. Zero-Tolerance Policy',
      description: 'Any form of cheating, hacking, or unfair advantage tools is strictly prohibited. This includes but is not limited to client modifications, macros, and exploits.',
      enforcement: 'Permanent Ban (No Appeals)'
    },
    {
      icon: faShieldAlt,
      title: '3. No Exploitation',
      description: 'Exploiting bugs, glitches, or unintended mechanics is forbidden. Report vulnerabilities to administration immediately.',
      enforcement: 'Temporary Ban → Permanent Ban'
    },
    {
      icon: faComments,
      title: '4. Communication Standards',
      description: 'No spam, advertising, or excessive messaging. All communications must remain professional and on-topic.',
      enforcement: 'Mute → Temporary Ban'
    },
    {
      icon: faHandshake,
      title: '5. Fair Trading',
      description: 'Scamming or fraudulent trading is prohibited. All transactions must be conducted in good faith.',
      enforcement: 'Warning → Temporary Ban → Permanent Ban'
    },
    {
      icon: faGavel,
      title: '6. Staff Authority',
      description: 'Comply with all staff directives. Staff decisions are final and must be respected at all times.',
      enforcement: 'Mute → Temporary Ban'
    }
  ];

  const additionalGuidelines = [
    {
      icon: faBuilding,
      title: 'Building Regulations',
      points: [
        'Maintain appropriate distance from other builds',
        'No griefing or unauthorized modifications',
        'All structures must be appropriate',
        'No performance-impacting constructions'
      ]
    },
    {
      icon: faFistRaised,
      title: 'Combat Guidelines',
      points: [
        'Respect designated PvP zones',
        'No combat logging during engagement',
        'Follow game mode specific rules',
        'Report suspicious activity immediately'
      ]
    },
    {
      icon: faLock,
      title: 'Account Responsibility',
      points: [
        'Secure your account with strong credentials',
        'Account sharing is prohibited',
        'All actions on your account are your responsibility',
        'Report compromised accounts immediately'
      ]
    }
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1>Server Rules</h1>
        <p>Compliance with these rules is mandatory for all players</p>
      </div>

      <section className="features">
        <h2>Core Regulations</h2>
        <div className="features-grid">
          {coreRegulations.map((rule, index) => (
            <div className="feature-card" key={index}>
              <FontAwesomeIcon icon={rule.icon} className="feature-icon" />
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
              <p className="enforcement-text"><strong>Enforcement:</strong> {rule.enforcement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <h2>Additional Guidelines</h2>
        <div className="features-grid">
          {additionalGuidelines.map((guideline, index) => (
            <div className="feature-card" key={index}>
              <FontAwesomeIcon icon={guideline.icon} className="feature-icon" />
              <h3>{guideline.title}</h3>
              <ul className="guideline-list">
                {guideline.points.map((point, pointIndex) => (
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

export default Rules;