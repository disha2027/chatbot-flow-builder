// components/UserInputNode.js
import React from 'react';
import './NodeStyles.css';

const UserInputNode = ({ data }) => {
  return (
    <div className="custom-node input-node">
      <strong>📝 {data.label || 'User Input'}</strong>
    </div>
  );
};

export default UserInputNode;
