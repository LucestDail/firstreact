import React, { useEffect, useState, useCallback, useRef } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from 'reactflow';

import { nodes as initialNodes, edges as initialEdges } from '../components/initial-elements.js';
import CustomNode from './components/CustomNode';
import Sidebar from '../components/Sidebar.js';
import Nodebar from '../components/Nodebar.js';
import 'reactflow/dist/style.css';
import './styles/overview.css';
import './styles/index.css';

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) => {
  reactFlowInstance.fitView();
};

const OverviewFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [nodeName, setNodeName] = useState('Node 1');
  const [nodeBg, setNodeBg] = useState('#eee');
  const [nodeHidden, setNodeHidden] = useState(false);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onChange = useCallback((params) => setNodes((eds) => applyNodeChanges(params, eds)), []);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  let id = 0;
  const getId = () => `dndnode_${id++}`;

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

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
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.data = {
            ...node.data,
            label: nodeName,
          };
        }

        return node;
      })
    );
  }, [nodeName, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.style = { ...node.style, backgroundColor: nodeBg };
        }

        return node;
      })
    );
  }, [nodeBg, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.hidden = nodeHidden;
        }

        return node;
      })
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === 'e1-2') {
          edge.hidden = nodeHidden;
        }

        return edge;
      })
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }} className="providerflow dndflow">
        <Nodebar nodes={nodes} setNodes={setNodes} />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edgesWithUpdatedTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onChange={onChange}
            onInit={onInit}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
          >
            <MiniMap style={minimapStyle} zoomable pannable />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
        <div className="updatenode__controls">
          <label>label:</label>
          <input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />
          <label className="updatenode__bglabel">background:</label>
          <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />
          <div className="updatenode__checkboxwrapper">
            <label>hidden:</label>
            <input
              type="checkbox"
              checked={nodeHidden}
              onChange={(evt) => setNodeHidden(evt.target.checked)}
            />
          </div>
        </div>
        <Sidebar nodes={nodes} setNodes={setNodes} />
      </div>
    </>
  );
};
export default () => (
  <ReactFlowProvider>
    <OverviewFlow />
  </ReactFlowProvider>
)