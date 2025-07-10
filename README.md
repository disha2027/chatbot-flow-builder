#  Chatbot Flow Builder

A simple, extensible Chatbot Flow Builder built using React and [React Flow](https://reactflow.dev/).

This application lets you visually create a chatbot conversation flow using nodes and edges. You can add messages, connect them, and control how the chatbot responds.

## Live Demo

👉 [View the deployed app](https://chatbot-flow-builder-7gxc-dn7tnib7e-dishas-projects-b25c8bb6.vercel.app)



## Features

1. **Text Nodes**
   - Add multiple message nodes.
   - Each node contains a customizable text field.

2. **Nodes Panel**
   - Drag and drop available nodes into the canvas.
   - Easily extendable to support more node types.

3. **Settings Panel**
   - Appears when a node is selected.
   - Allows editing the text of the selected node.

4. **Edges**
   - Connect nodes to define the chatbot flow.
   - Each node has a source (one outgoing edge) and one or more targets (multiple incoming edges).

5. **Save Button**
   - Validates the structure before saving.
   - Shows an error if there are multiple nodes with no outgoing connections.

---

##  Tech Stack

- React
- React Flow
- JavaScript
- CSS


To run the app locally:

git clone https://github.com/disha2027/chatbot-flow-builder.git
cd chatbot-flow-builder
npm install
npm start
