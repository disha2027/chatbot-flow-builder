
import React, { useState, useCallback } from 'react';
import SettingsPanel from './SettingsPanel';
import ReactFlow, {
  Background,
  MiniMap,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import NodePanel from './NodePanel';
import TextNode from './TextNode';
import UserInputNode from './UserInputNode';
import { nanoid } from 'nanoid';

const nodeTypes = {
  textNode: TextNode,
  userInputNode: UserInputNode, 
};

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) => {
      const exists = edges.some((e) => e.source === params.source);
      if (!exists) {
        setEdges((eds) => addEdge(params, eds));
      }
    },
    [edges]
  );

  const onNodeClick = (_e, node) => {
    setSelectedNode(node);
  };

  const handleNodeTextChange = (id, text) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label: text } } : node
      )
    );
  };

  const addTextNode = () => {
    const id = nanoid(6);
    setNodes((nds) => [
      ...nds,
      {
        id,
        type: 'textNode',
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: { label: 'Text Message' },
      },
    ]);
  };

  const addUserInputNode = () => {
    const id = nanoid(6);
    setNodes((nds) => [
      ...nds,
      {
        id,
        type: 'userInputNode',
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: { label: 'Ask for Input' },
      },
    ]);
  };

  const handleSave = () => {
    const nodesWithNoOutgoing = nodes.filter(
      (node) => !edges.find((e) => e.source === node.id)
    );

    if (nodes.length > 1 && nodesWithNoOutgoing.length > 1) {
      alert('❌ Error: More than one node has no outgoing edge.');
      return;
    }

    alert('✅ Flow Saved!');
    console.log('Nodes:', nodes);
    console.log('Edges:', edges);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className="sidebar">
        {selectedNode ? (
          <SettingsPanel selectedNode={selectedNode} onChange={handleNodeTextChange} />
        ) : (
          <NodePanel
            onAddTextNode={addTextNode}
            onAddUserInputNode={addUserInputNode}
          />
        )}
        <button onClick={handleSave} className="button save-button">
          💾 Save Flow
        </button>
      </div>

      <div style={{ flexGrow: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowBuilder;

