// components/TextNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import './TextNode.css';

const TextNode = ({ data }) => {
  return (
    <div className="text-node">
      <Handle type="target" position={Position.Top} />
      <div className="text-node-label">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default TextNode;

