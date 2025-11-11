import { useState, useEffect } from 'react';
import { getContent, updateContent } from '../utils/api';

const AdminSettings = ({ authToken, setMessage }) => {
  const [settings, setSettings] = useState({
    heroTitle: '',
    heroSubtitle: '',
    siteTitle: 'Wither Networks - Premium Minecraft Server',
    serverIP: 'play.withernetworks.fun',
    contactEmail: 'support@withernetworks.fun'
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
        contactEmail: 'support@withernetworks.fun'
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
        heroSubtitle: settings.heroSubtitle
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
        <h3>General Settings</h3>
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
  );
};

export default AdminSettings;