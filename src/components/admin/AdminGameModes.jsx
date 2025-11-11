import { useState, useEffect } from 'react';
import { getContent, updateContent } from '../utils/api';

const AdminGameModes = ({ authToken, setMessage }) => {
  const [gameModes, setGameModes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGameModes();
  }, []);

  const loadGameModes = async () => {
    try {
      const data = await getContent();
      setGameModes(data.gameModes || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading game modes:', error);
      setMessage({
        text: 'Failed to load game modes: ' + error.message,
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
        gameModes: gameModes
      };
      await updateContent(updatedContent, authToken);
      setMessage({
        text: 'Game modes saved successfully!',
        type: 'success'
      });
    } catch (error) {
      setMessage({
        text: 'Failed to save game modes: ' + error.message,
        type: 'error'
      });
    }
  };

  const addGameMode = () => {
    setGameModes([...gameModes, { name: '', description: '', status: 'LIVE' }]);
  };

  const removeGameMode = (index) => {
    setGameModes(gameModes.filter((_, i) => i !== index));
  };

  const updateGameMode = (index, field, value) => {
    const newGameModes = [...gameModes];
    newGameModes[index][field] = value;
    setGameModes(newGameModes);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-section">
      <div className="admin-header">
        <h2>Game Modes Management</h2>
        <div className="admin-actions">
          <button className="btn primary" onClick={handleSave}>
            Save Game Modes
          </button>
          <button className="btn secondary" onClick={addGameMode}>
            Add New Game Mode
          </button>
        </div>
      </div>

      <div className="admin-section">
        {gameModes.map((mode, index) => (
          <div key={index} className="admin-mode-card">
            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={mode.name || ''}
                  onChange={(e) => updateGameMode(index, 'name', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  value={mode.status || ''}
                  onChange={(e) => updateGameMode(index, 'status', e.target.value)}
                />
              </div>
              <div className="form-group">
                <button 
                  className="btn danger small" 
                  onClick={() => removeGameMode(index)}
                  style={{ marginTop: '24px' }}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={mode.description || ''}
                onChange={(e) => updateGameMode(index, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGameModes;