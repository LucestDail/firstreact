
// Default Components
import React, { useEffect, useState, useCallback, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodes,
  useEdges,
  useNodesState,
  useEdgesState,
  Controls,
  applyNodeChanges,
  MiniMap,
  Background,
} from 'reactflow';

// Custom Components
import { nodes as initialNodes, edges as initialEdges } from './components/initial-elements';
import Nodebar from './components/Nodebar.js';
import Sidebar from './components/Sidebar.js';

// Default Styles
import 'reactflow/dist/style.css';
import 'reactflow/dist/style.css';

// Custom Styles
import './styles/overview.css';
import './styles/index.css';

// Lcal Variable
let id = 0;
const getId = () => `dndnode_${id++}`;
let nodeJson = {};
// export default app
export default () => {

  // react component definitions
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Events Definitions
  const onChange = useCallback((params) => setNodes((eds) => applyNodeChanges(params, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onDragOver = useCallback((event) => { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; }, []);
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData('application/reactflow');
      if (typeof type === 'undefined' || !type) {
        return;
      }
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  const onSave = () => {
    if(reactFlowInstance){
      nodeJson = JSON.stringify(reactFlowInstance.toObject());
      alert(nodeJson);
    }
  };

  const onRestore = () => {
    const flow = JSON.parse(nodeJson);
    if (flow) {
      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);
    }
  };

  useEffect(() => {
    if(reactFlowInstance){
      nodeJson = JSON.stringify(reactFlowInstance.toObject());
      console.log(nodeJson);
    }
  }, [nodes, edges]);


  return (
    <div className="dndflow" style={{ width: '98vw', height: '98vh' }} >
      <ReactFlowProvider>
        <Nodebar onSave={onSave} onRestore={onRestore} nodeJson={nodeJson} />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onChange={onChange}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            attributionPosition="top-right"
          >
            <MiniMap style={{ height: 120 }} zoomable pannable />
            <Background color="#aaa" gap={16} />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar nodes={nodes} setNodes={setNodes} />
      </ReactFlowProvider>
    </div>
  );
};