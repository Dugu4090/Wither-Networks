import { useState, useEffect } from 'react';
import { getContent, updateContent } from '../utils/api';

const AdminStats = ({ authToken, setMessage }) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getContent();
      setStats(data.stats || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading stats:', error);
      setMessage({
        text: 'Failed to load stats: ' + error.message,
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
        stats: stats
      };
      await updateContent(updatedContent, authToken);
      setMessage({
        text: 'Stats saved successfully!',
        type: 'success'
      });
    } catch (error) {
      setMessage({
        text: 'Failed to save stats: ' + error.message,
        type: 'error'
      });
    }
  };

  const addStat = () => {
    setStats([...stats, { value: '', label: '' }]);
  };

  const removeStat = (index) => {
    setStats(stats.filter((_, i) => i !== index));
  };

  const updateStat = (index, field, value) => {
    const newStats = [...stats];
    newStats[index][field] = value;
    setStats(newStats);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-section">
      <div className="admin-header">
        <h2>Stats Management</h2>
        <div className="admin-actions">
          <button className="btn primary" onClick={handleSave}>
            Save Stats
          </button>
          <button className="btn secondary" onClick={addStat}>
            Add New Stat
          </button>
        </div>
      </div>

      <div className="admin-section">
        {stats.map((stat, index) => (
          <div key={index} className="admin-stat-card">
            <div className="form-row">
              <div className="form-group">
                <label>Value</label>
                <input
                  type="text"
                  value={stat.value || ''}
                  onChange={(e) => updateStat(index, 'value', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Label</label>
                <input
                  type="text"
                  value={stat.label || ''}
                  onChange={(e) => updateStat(index, 'label', e.target.value)}
                />
              </div>
              <div className="form-group">
                <button 
                  className="btn danger small" 
                  onClick={() => removeStat(index)}
                  style={{ marginTop: '24px' }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminStats;