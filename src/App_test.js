// Default Components
import React, {
  useEffect,
  useState,
  useCallback,
  useRef
} from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  getConnectedEdges,
  useNodesState,
  useEdgesState,
  Controls,
  applyNodeChanges,
  MiniMap,
  MarkerType,
  Background,
} from 'reactflow';
import FlowBuilder, {
  NodeContext
} from "react-flow-builder";
import uuid from 'react-uuid'
// Custom Components
import { nodes as initialNodes, edges as initialEdges } from './components/initial-elements.js';
import NodebarDetail from './components/NodebarDetail.js';
import Nodebar from './components/Nodebar.js';
import Sidebar from './components/Sidebar.js';
import CustomBoxNode from './components/CustomBoxNode.js';
import Node1 from './components/Node1.jsx';
import Node2 from './components/Node2.jsx';
import Node3 from './components/Node3.jsx';
import Node4 from './components/Node4.jsx';
import ButtonEdge from './components/ButtonEdge.tsx';

// Default Styles
import 'reactflow/dist/style.css';

// Custom Styles
import './styles/overview.css';
import './styles/index.css';

// Local Variable
const getId = () => uuid();
let nodeJson = "";
const connectionLineStyle = { stroke: '#000' };

// Custom Definition
const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: 'black' },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: 'black',
  },
};

// Custom nodeTypes
const nodeTypes = {
  //customBoxNode: CustomBoxNode,
  node1: Node1,
  node2: Node2,
  node3: Node3,
  node4: Node4,
};
const edgeTypes = {
  buttonedge: ButtonEdge,
};

// Custom Event Definition
const StartNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

const EndNodeDisplay = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

const NodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`other-node ${node.configuring ? "node-configuring" : ""} ${
        node.validateStatusError ? "node-status-error" : ""
      }`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};

const ConditionNodeDisplay = () => {
  const node = useContext(NodeContext);
  return (
    <div
      className={`condition-node ${
        node.configuring ? "node-configuring" : ""
      } ${node.validateStatusError ? "node-status-error" : ""}`}
    >
      {node.data ? node.data.name : node.name}
    </div>
  );
};



// export default app
export default () => {

  // react component definitions
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Events Definitions
  // node change event
  const onChange = useCallback((params) => setNodes((eds) => applyNodeChanges(params, eds)), []);

  // node delete event
  const onNodesDelete = useCallback(
    (deleted) => {
      if (deleted[0].parentNode) {  // item node delete process
        setEdges(
          deleted.reduce((acc, node) => {
            const connectedEdges = getConnectedEdges([node], edges);
            const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));
            return [...remainingEdges];
          }, edges)
        );

        setNodes(
          nodes.filter((node) => node.id !== deleted[0].id).map((node) => {
            if (node.id === deleted[0].parentNode) {
              node.height -= 40;
              node.style.height -= 40;
              node.itemNumber -= 1;
            }
            return node;
          })
        )

        nodes.filter((node) => node.id !== deleted[0].id).map((node) => {
          if (node.id === deleted[0].parentNode) {
            node.height -= 40;
            node.style.height -= 40;
            node.itemNumber -= 1;
          }
          return node;
        });

        // console.log(currentItems.sort(function (a, b) { return a.itemOrder - b.itemOrder }));
        // delete current node's child nodes parent itemNumber and move item's position

      } else {  // box node delete process
        // delete current node's connected edges
        setEdges(
          deleted.reduce((acc, node) => {
            const connectedEdges = getConnectedEdges([node], edges);
            const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));
            return [...remainingEdges];
          }, edges)
        );

        // delete current node's child nodes
        setNodes(
          deleted.reduce((acc, node) => {
            const remainingNodes = acc.filter((nd) => node.id !== nd.parentNode);
            return [...remainingNodes];
          }, nodes)
        )
      }

    },
    [nodes, edges]
  );

  // node connect event
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, type: 'buttonedge', animated: true, style: { stroke: '#000' } }, eds)),
    []
  );
  // node drag event
  const onDragOver = useCallback((event) => { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; }, []);

  // node drop event
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
        id: 'box_' + getId(),
        type,
        sourcePosition: 'bottom',
        targetPosition: 'top',
        position,
        className: 'group-a',
        style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 100 },
        data: {
          label: `${type} node`
        },
        itemNumber: 0,
      };
      setNodes((nds) => nds.concat(newNode));
      if (type !== 'output') {
        debugger;
        const emptyPosition = {
          x: event.clientX,
          y: event.clientY,
        };
        const emptyNode = {
          id: 'empty_' + getId(),
          type: 'default',
          targetPosition: 'top',
          position: emptyPosition,
          className: 'group-empty',
          // hidden: true,
          style: { backgroundColor: 'rgba(255, 0, 0, 0)', width: 200, height: 100 },
          parentNode: newNode.id,
          itemNumber: 0,
        }
        const newEdge = {
          source: newNode.id,
          target: emptyNode.id,
          id: 'edge_' + getId(),
          type: 'buttonedge',
        }
        setEdges((eds) => eds.concat(newEdge));
        setNodes((nds) => nds.concat(emptyNode));
      }
    },
    [reactFlowInstance],
  );

  // inject reactFlow nodes to global variable, defined as "nodeJson", so developers can access current node status infomation
  useEffect(() => {
    if (reactFlowInstance) {
      nodeJson = JSON.stringify(reactFlowInstance.toObject());
    }
  }, [nodes, edges]);

  return (
    <div className="dndflow" style={{ width: '98vw', height: '85vh' }} >
      <ReactFlowProvider>
        <Nodebar setNodes={setNodes} setEdges={setEdges} nodes={nodes} edges={edges} />
        <NodebarDetail setNodes={setNodes} />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesDelete={onNodesDelete}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onChange={onChange}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            connectionLineStyle={connectionLineStyle}
            defaultEdgeOptions={defaultEdgeOptions}
            multiSelectionKeyCode=""
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