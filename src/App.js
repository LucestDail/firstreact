import React, { useCallback } from 'react';
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

import { nodes as initialNodes, edges as initialEdges } from './components/initial-elements';
import CustomNode from './components/CustomNode';
import Sidebar from './components/Sidebar.js';

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
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onChange = useCallback((params) => setNodes((eds) => applyNodeChanges(params, eds)), []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }} className="providerflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper">
            <ReactFlow
              nodes={nodes}
              edges={edgesWithUpdatedTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onChange={onChange}
              onInit={onInit}
              fitView
              attributionPosition="top-right"
              nodeTypes={nodeTypes}
            >
              <MiniMap style={minimapStyle} zoomable pannable />
              <Controls />
              <Background color="#aaa" gap={16} />
            </ReactFlow>
          </div>
          <Sidebar nodes={nodes} setNodes={setNodes} />
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default OverviewFlow;
