import React from 'react';
import FlowBuilder from './components/FlowBuilder';

function App() {
  return (
    <div>
      <h2 style={{
        textAlign: 'center',
        padding: '16px',
        color: '#2c3e50',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif'
      }}>
        🤖 Chatbot Flow Builder
      </h2>
      <FlowBuilder />
    </div>
  );
}

export default App;
