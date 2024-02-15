/********************* Library area *********************/
import React, { useEffect, useState, useCallback, useRef } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, getConnectedEdges, useNodesState, useEdgesState, Controls, applyNodeChanges, MiniMap, Background, } from 'reactflow';
/********************* Components area *********************/
import NodebarDetail from './components/nav/NodebarDetail.js';
import Nodebar from './components/nav/Nodebar.js';
import Sidebar from './components/nav/Sidebar.js';
import ContextMenu from './components/context/XtrmItemContext.js';
/********************* Module area *********************/
import getId from './modules/XtrmUUID.js';
/********************* Style area *********************/
import './styles/index.css';
import 'reactflow/dist/style.css';
import './styles/overview.css';
import './styles/main.css';
/********************* Option area *********************/
import connectionLineStyle from './options/ConnectionLineStyle.js'
import defaultEdgeOptions from './options/DefaultEdgeOptions.js';
import nodeTypes from './options/NodeTypes.js';
import edgeTypes from './options/EdgeTypes.js';
import NewNodeOption from './options/NewNodeOption.js';
import EmptyNodeOption from './options/EmptyNodeOption.js';
import EmptyEdgeOption from './options/EmptyEdgeOption.js';
import InitBoxOption from './options/InitBoxOption.js';
import InitEdgeOption from './options/InitEdgeOption.js';
import XtrmEdgeOption from './options/XtrmEdgeOption.js';
/********************* Local Definition area *********************/
let nodeJson = "";
let xtrmParameters = "";
/********************* Main area *********************/
export default () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(InitBoxOption);
  const [edges, setEdges, onEdgesChange] = useEdgesState(InitEdgeOption);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [menu, setMenu] = useState(null);
  const onChange = useCallback((params) => setNodes((eds) => applyNodeChanges(params, eds)), []);
  const onNodesDelete = useCallback(
    (deleted) => {
      if (!('itemNumber' in deleted[0])) {  // item node delete process
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

      } else {
        setEdges(
          deleted.reduce((acc, node) => {
            const connectedEdges = getConnectedEdges([node], edges);
            const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));
            return [...remainingEdges];
          }, edges)
        );
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
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, type: 'emptyedge', animated: true, style: { stroke: '#000' } }, eds)),
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
      const newNode = NewNodeOption(type, position);
      setNodes((nds) => nds.concat(newNode));
      if (type !== 'output') {
        const emptyNode = EmptyNodeOption(newNode.id);
        const newEdge = EmptyEdgeOption(newNode.id, emptyNode.id);
        //const newEdge = XtrmEdgeOption(newNode.id, emptyNode.id);
        setEdges((eds) => eds.concat(newEdge));
        setNodes((nds) => nds.concat(emptyNode));
      }
    },
    [reactFlowInstance],
  );
  const onNodeContextMenu = useCallback(
    (event, node) => {
      event.preventDefault();
      const pane = reactFlowWrapper.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom: event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenu],
  );
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);
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
            onNodeContextMenu={onNodeContextMenu}
            onPaneClick={onPaneClick}
            multiSelectionKeyCode=""
            attributionPosition="top-right"
          >
            <MiniMap style={{ height: 120 }} zoomable pannable />
            <Background color="#aaa" gap={16} />
            <Controls />
            {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
          </ReactFlow>
        </div>
        <Sidebar nodeJson={nodeJson} nodes={nodes} setNodes={setNodes} />
      </ReactFlowProvider>
    </div>
  );
};