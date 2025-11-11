import { useState, useEffect } from 'react';
import { getContent, updateContent } from '../../utils/api';

const AdminRanks = ({ authToken, setMessage }) => {
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRanks();
  }, []);

  const loadRanks = async () => {
    try {
      const data = await getContent();
      setRanks(data.ranks || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading ranks:', error);
      setMessage({
        text: 'Failed to load ranks: ' + error.message,
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
        ranks: ranks
      };
      await updateContent(updatedContent, authToken);
      setMessage({
        text: 'Ranks saved successfully!',
        type: 'success'
      });
    } catch (error) {
      setMessage({
        text: 'Failed to save ranks: ' + error.message,
        type: 'error'
      });
    }
  };

  const addRank = () => {
    setRanks([...ranks, { name: '', description: '', price: '$0.00' }]);
  };

  const removeRank = (index) => {
    setRanks(ranks.filter((_, i) => i !== index));
  };

  const updateRank = (index, field, value) => {
    const newRanks = [...ranks];
    newRanks[index][field] = value;
    setRanks(newRanks);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-section">
      <div className="admin-header">
        <h2 className="minecraft-heading">Ranks Management</h2>
        <div className="admin-actions">
          <button className="btn primary minecraft-button" onClick={handleSave}>
            Save Ranks
          </button>
          <button className="btn secondary minecraft-button" onClick={addRank}>
            Add New Rank
          </button>
        </div>
      </div>

      <div className="admin-section">
        {ranks.map((rank, index) => (
          <div key={index} className="admin-rank-card minecraft-card">
            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="minecraft-input"
                  value={rank.name || ''}
                  onChange={(e) => updateRank(index, 'name', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  className="minecraft-input"
                  value={rank.price || ''}
                  onChange={(e) => updateRank(index, 'price', e.target.value)}
                />
              </div>
              <div className="form-group">
                <button 
                  className="btn danger small minecraft-button" 
                  onClick={() => removeRank(index)}
                  style={{ marginTop: '24px' }}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="minecraft-input"
                value={rank.description || ''}
                onChange={(e) => updateRank(index, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRanks;