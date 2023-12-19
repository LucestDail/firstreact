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
  MarkerType,
  Background,
} from 'reactflow';

// Custom Components
import { nodes as initialNodes, edges as initialEdges } from './components/initial-elements';
import NodebarDetail from './components/NodebarDetail.js';
import Nodebar from './components/Nodebar.js';
import Sidebar from './components/Sidebar.js';

// Default Styles
import 'reactflow/dist/style.css';

// Custom Styles
import './styles/overview.css';
import './styles/index.css';

// Local Variable
let id = 0;
const getId = () => `dndnode_${id++}`;
let nodeJson = "";
const connectionLineStyle = { stroke: '#000' };

// Custom Definition
const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: 'black' },
  type: 'floating',
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: 'black',
  },
};

// export default app
export default () => {

  // react component definitions
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Events Definitions
  const onChange = useCallback((params) => setNodes((eds) => applyNodeChanges(params, eds)), []);
  //const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#000' } }, eds)),
    []
  );
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
        sourcePosition: 'right',
        targetPosition: 'left',
        position,
        className: 'group-a',
        style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 100 },
        data: { label: `${type} node` },
        itemNumber: 0,
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  useEffect(() => {
    if (reactFlowInstance) {
      nodeJson = JSON.stringify(reactFlowInstance.toObject());
    }
  }, [nodes, edges]);


  return (
    <div className="dndflow" style={{ width: '98vw', height: '98vh' }} >
      <ReactFlowProvider>
        <Nodebar />
        <NodebarDetail />
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
            connectionLineStyle={connectionLineStyle}
            defaultEdgeOptions={defaultEdgeOptions}
            attributionPosition="top-right"
          >
            <MiniMap style={{ height: 120 }} zoomable pannable />
            <Background color="#aaa" gap={16} />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar nodeJson={nodeJson} nodes={nodes} setNodes={setNodes} />
      </ReactFlowProvider>
    </div>
  );
};