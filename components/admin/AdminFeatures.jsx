import { useState, useEffect, useCallback } from 'react';
import { getContent, updateContent } from '../utils/api';

const AdminFeatures = ({ authToken, setMessage }) => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFeatures = useCallback(async () => {
    try {
      const data = await getContent();
      setFeatures(data.features || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading features:', error);
      setMessage({
        text: 'Failed to load features: ' + error.message,
        type: 'error'
      });
      setLoading(false);
    }
  }, [setMessage]);

  useEffect(() => {
    loadFeatures();
  }, [loadFeatures]);

  const handleSave = async () => {
    try {
      const currentContent = await getContent();
      const updatedContent = {
        ...currentContent,
        features: features
      };
      await updateContent(updatedContent, authToken);
      setMessage({
        text: 'Features saved successfully!',
        type: 'success'
      });
    } catch (error) {
      setMessage({
        text: 'Failed to save features: ' + error.message,
        type: 'error'
      });
    }
  };

  const addFeature = () => {
    setFeatures([...features, { title: '', description: '' }]);
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const updateFeature = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-section">
      <div className="admin-header">
        <h2>Features Management</h2>
        <div className="admin-actions">
          <button className="btn primary" onClick={handleSave}>
            Save Features
          </button>
          <button className="btn secondary" onClick={addFeature}>
            Add New Feature
          </button>
        </div>
      </div>

      <div className="admin-section">
        {features.map((feature, index) => (
          <div key={index} className="admin-feature-card">
            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={feature.title || ''}
                  onChange={(e) => updateFeature(index, 'title', e.target.value)}
                />
              </div>
              <div className="form-group">
                <button 
                  className="btn danger small" 
                  onClick={() => removeFeature(index)}
                  style={{ marginTop: '24px' }}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={feature.description || ''}
                onChange={(e) => updateFeature(index, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFeatures;