import { useState, useEffect } from 'react';
import { getContent, updateContent } from '../../components/utils/api';

const AdminSettings = ({ authToken, setMessage }) => {
  const [settings, setSettings] = useState({
    heroTitle: '',
    heroSubtitle: '',
    siteTitle: 'Wither Networks - Premium Minecraft Server',
    serverIP: 'play.withernetworks.fun',
    contactEmail: 'support@withernetworks.fun',
    discordLink: '',
    customFooterLinks: [],
    copyrightText: '© 2025 Wither Networks | play.withernetworks.fun'
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
        discordLink: data.discordLink || '',
        customFooterLinks: data.customFooterLinks || [],
        copyrightText: data.copyrightText || '© 2025 Wither Networks | play.withernetworks.fun'
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
        discordLink: settings.discordLink,
        customFooterLinks: settings.customFooterLinks,
        copyrightText: settings.copyrightText
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

  const updateFooterLink = (index, field, value) => {
    const newFooterLinks = [...settings.customFooterLinks];
    newFooterLinks[index] = { ...newFooterLinks[index], [field]: value };
    setSettings({
      ...settings,
      customFooterLinks: newFooterLinks
    });
  };

  const addFooterLink = () => {
    setSettings({
      ...settings,
      customFooterLinks: [...settings.customFooterLinks, { path: '', label: '', external: false }]
    });
  };

  const removeFooterLink = (index) => {
    const newFooterLinks = [...settings.customFooterLinks];
    newFooterLinks.splice(index, 1);
    setSettings({
      ...settings,
      customFooterLinks: newFooterLinks
    });
  };

  const toggleExternalLink = (index) => {
    const newFooterLinks = [...settings.customFooterLinks];
    newFooterLinks[index] = { ...newFooterLinks[index], external: !newFooterLinks[index].external };
    setSettings({
      ...settings,
      customFooterLinks: newFooterLinks
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
        <h3>Social Links</h3>
        <div className="form-group">
          <label>Discord Server Link</label>
          <input
            type="text"
            value={settings.discordLink}
            onChange={(e) => updateSetting('discordLink', e.target.value)}
            placeholder="https://discord.gg/your-server"
          />
          <small>Enter the full URL to your Discord server invite link</small>
        </div>
      </div>

      <div className="admin-section">
        <div className="admin-header">
          <h3>Custom Footer Links</h3>
          <button className="btn secondary" onClick={addFooterLink}>
            Add Link
          </button>
        </div>
        <p>Add custom links to appear in the footer. These can be internal pages or external websites.</p>
        
        {settings.customFooterLinks.length === 0 ? (
          <div className="empty-state">
            <p>No footer links added yet. Click "Add Link" to create your first footer link.</p>
          </div>
        ) : (
          <div className="form-grid">
            {settings.customFooterLinks.map((link, index) => (
              <div key={index} className="form-group">
                <div className="admin-header">
                  <h4>Footer Link {index + 1}</h4>
                  <button 
                    className="btn danger small" 
                    onClick={() => removeFooterLink(index)}
                  >
                    Remove
                  </button>
                </div>
                <label>Path/URL</label>
                <input
                  type="text"
                  value={link.path}
                  onChange={(e) => updateFooterLink(index, 'path', e.target.value)}
                  placeholder="/page or https://example.com"
                />
                <label>Label</label>
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) => updateFooterLink(index, 'label', e.target.value)}
                  placeholder="Link text"
                />
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={link.external || false}
                      onChange={() => toggleExternalLink(index)}
                    />
                    Open in new tab (external link)
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="admin-section">
        <h3>Copyright Text</h3>
        <div className="form-group">
          <label>Footer Copyright Text</label>
          <input
            type="text"
            value={settings.copyrightText}
            onChange={(e) => updateSetting('copyrightText', e.target.value)}
            placeholder="© 2025 Your Server Name"
          />
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