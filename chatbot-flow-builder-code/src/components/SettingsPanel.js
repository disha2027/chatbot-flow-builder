// components/SettingsPanel.js
import React, { useState, useEffect } from 'react';
import './SettingsPanel.css';

const SettingsPanel = ({ selectedNode, onChange }) => {
  const [text, setText] = useState(selectedNode.data.label || '');

  useEffect(() => {
    setText(selectedNode.data.label || '');
  }, [selectedNode]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChange(selectedNode.id, newText);
  };

  return (
    <div className="settings-panel">
      <h3>Settings Panel</h3>
      <label>Text:</label>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="settings-input"
        placeholder="Enter message..."
      />
    </div>
  );
};

export default SettingsPanel;
