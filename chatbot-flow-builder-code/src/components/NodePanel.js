/// components/NodePanel.js
import React from 'react';
import './NodePanel.css';

const NodePanel = ({ onAddTextNode, onAddInputNode }) => {
  return (
    <div className="node-panel">
      <h3>Nodes Panel</h3>
      <button onClick={onAddTextNode} className="add-node-button">
        ➕ Add Text Node
      </button>
     <button className="node-button" onClick={onAddInputNode} style={{ marginTop: '10px' }}>
        🔤 Add Input Node
      </button>
    </div>
  );
};

export default NodePanel;

