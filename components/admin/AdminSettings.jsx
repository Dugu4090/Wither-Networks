import { useState, useEffect } from 'react';
import { getContent, updateContent } from '../../components/utils/api';

const AdminSettings = ({ authToken, setMessage }) => {
  const [settings, setSettings] = useState({
    heroTitle: '',
    heroSubtitle: '',
    siteTitle: 'Wither Networks - Premium Minecraft Server',
    serverIP: 'play.withernetworks.fun',
    contactEmail: 'support@withernetworks.fun',
    navigation: [
      { path: '/', icon: 'fa-home', label: 'Home' },
      { path: '/about', icon: 'fa-info-circle', label: 'About' },
      { path: '/game-modes', icon: 'fa-gamepad', label: 'Games' },
      { path: '/rules', icon: 'fa-gavel', label: 'Rules' },
      { path: '/ranks', icon: 'fa-crown', label: 'Ranks' },
      { path: '/contact', icon: 'fa-envelope', label: 'Contact' }
    ],
    footerLinks: {
      quickLinks: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/game-modes', label: 'Game Modes' },
        { path: '/rules', label: 'Rules' }
      ],
      supportLinks: [
        { path: '/contact', label: 'Help Center' },
        { path: '/contact', label: 'Contact Us' },
        { path: '/ranks', label: 'Premium Ranks' }
      ]
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await getContent();
      setSettings({
        ...settings,
        heroTitle: data.heroTitle || '',
        heroSubtitle: data.heroSubtitle || '',
        siteTitle: 'Wither Networks - Premium Minecraft Server',
        serverIP: 'play.withernetworks.fun',
        contactEmail: 'support@withernetworks.fun',
        navigation: data.navigation || settings.navigation,
        footerLinks: data.footerLinks || settings.footerLinks
      });
      setLoading(false);
    } catch (error) {
      console.error('Error loading settings:', error);
      setMessage({
        text: 'Failed to load settings: ' + error.message,
        type: 'error'
      });
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const currentContent = await getContent();
      const updatedContent = {
        ...currentContent,
        heroTitle: settings.heroTitle,
        heroSubtitle: settings.heroSubtitle,
        navigation: settings.navigation,
        footerLinks: settings.footerLinks
      };
      await updateContent(updatedContent, authToken);
      setMessage({
        text: 'Settings saved successfully!',
        type: 'success'
      });
    } catch (error) {
      setMessage({
        text: 'Failed to save settings: ' + error.message,
        type: 'error'
      });
    }
  };

  const updateSetting = (field, value) => {
    setSettings({
      ...settings,
      [field]: value
    });
  };

  const updateNavigationItem = (index, field, value) => {
    const newNavigation = [...settings.navigation];
    newNavigation[index] = { ...newNavigation[index], [field]: value };
    setSettings({
      ...settings,
      navigation: newNavigation
    });
  };

  const updateFooterLink = (section, index, field, value) => {
    const newFooterLinks = { ...settings.footerLinks };
    newFooterLinks[section][index] = { ...newFooterLinks[section][index], [field]: value };
    setSettings({
      ...settings,
      footerLinks: newFooterLinks
    });
  };

  const addNavigationItem = () => {
    const newNavigation = [...settings.navigation, { path: '', icon: '', label: '' }];
    setSettings({
      ...settings,
      navigation: newNavigation
    });
  };

  const removeNavigationItem = (index) => {
    const newNavigation = [...settings.navigation];
    newNavigation.splice(index, 1);
    setSettings({
      ...settings,
      navigation: newNavigation
    });
  };

  const addFooterLink = (section) => {
    const newFooterLinks = { ...settings.footerLinks };
    newFooterLinks[section].push({ path: '', label: '' });
    setSettings({
      ...settings,
      footerLinks: newFooterLinks
    });
  };

  const removeFooterLink = (section, index) => {
    const newFooterLinks = { ...settings.footerLinks };
    newFooterLinks[section].splice(index, 1);
    setSettings({
      ...settings,
      footerLinks: newFooterLinks
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-section">
      <div className="admin-header">
        <h2>Website Settings</h2>
        <div className="admin-actions">
          <button className="btn primary" onClick={handleSave}>
            Save Settings
          </button>
        </div>
      </div>

      <div className="admin-section">
        <h3>Homepage Hero Section</h3>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={settings.heroTitle}
            onChange={(e) => updateSetting('heroTitle', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Subtitle</label>
          <textarea
            value={settings.heroSubtitle}
            onChange={(e) => updateSetting('heroSubtitle', e.target.value)}
          />
        </div>
      </div>

      <div className="admin-section">
        <div className="admin-header">
          <h3>Navigation Links</h3>
          <button className="btn secondary" onClick={addNavigationItem}>
            Add Navigation Item
          </button>
        </div>
        <div className="form-grid">
          {settings.navigation.map((item, index) => (
            <div key={index} className="form-group">
              <div className="admin-header">
                <h4>Navigation Item {index + 1}</h4>
                {settings.navigation.length > 1 && (
                  <button 
                    className="btn danger small" 
                    onClick={() => removeNavigationItem(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <label>Path</label>
              <input
                type="text"
                value={item.path}
                onChange={(e) => updateNavigationItem(index, 'path', e.target.value)}
              />
              <label>Icon Class</label>
              <input
                type="text"
                value={item.icon}
                onChange={(e) => updateNavigationItem(index, 'icon', e.target.value)}
                placeholder="e.g., fa-home"
              />
              <label>Label</label>
              <input
                type="text"
                value={item.label}
                onChange={(e) => updateNavigationItem(index, 'label', e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <div className="admin-header">
          <h3>Footer Links - Quick Links</h3>
          <button className="btn secondary" onClick={() => addFooterLink('quickLinks')}>
            Add Link
          </button>
        </div>
        <div className="form-grid">
          {settings.footerLinks.quickLinks.map((link, index) => (
            <div key={index} className="form-group">
              <div className="admin-header">
                <h4>Quick Link {index + 1}</h4>
                {settings.footerLinks.quickLinks.length > 1 && (
                  <button 
                    className="btn danger small" 
                    onClick={() => removeFooterLink('quickLinks', index)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <label>Path</label>
              <input
                type="text"
                value={link.path}
                onChange={(e) => updateFooterLink('quickLinks', index, 'path', e.target.value)}
              />
              <label>Label</label>
              <input
                type="text"
                value={link.label}
                onChange={(e) => updateFooterLink('quickLinks', index, 'label', e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <div className="admin-header">
          <h3>Footer Links - Support Links</h3>
          <button className="btn secondary" onClick={() => addFooterLink('supportLinks')}>
            Add Link
          </button>
        </div>
        <div className="form-grid">
          {settings.footerLinks.supportLinks.map((link, index) => (
            <div key={index} className="form-group">
              <div className="admin-header">
                <h4>Support Link {index + 1}</h4>
                {settings.footerLinks.supportLinks.length > 1 && (
                  <button 
                    className="btn danger small" 
                    onClick={() => removeFooterLink('supportLinks', index)}
                  >
                    Remove
                  </button>
                )}
              </div>
              <label>Path</label>
              <input
                type="text"
                value={link.path}
                onChange={(e) => updateFooterLink('supportLinks', index, 'path', e.target.value)}
              />
              <label>Label</label>
              <input
                type="text"
                value={link.label}
                onChange={(e) => updateFooterLink('supportLinks', index, 'label', e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <h3>General Settings</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Site Title</label>
            <input
              type="text"
              value={settings.siteTitle}
              onChange={(e) => updateSetting('siteTitle', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Server IP</label>
            <input
              type="text"
              value={settings.serverIP}
              onChange={(e) => updateSetting('serverIP', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Contact Email</label>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => updateSetting('contactEmail', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;