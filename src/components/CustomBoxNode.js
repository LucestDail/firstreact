import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Handle,
  Position,
  useReactFlow,
  useNodesState,
  useEdgesState,
  useOnSelectionChange,
} from 'reactflow';
import { nodes as initialNodes, edges as initialEdges } from './initial-elements';

let currentSelectedNode = {};
let setNodes;
let reactFlowInstance;
export default ({ data, isConnectable }) => {
  setNodes = data.setNodes;
  reactFlowInstance = data.reactFlowInstance;

  // react component definitions
  //const reactFlowInstance = useReactFlow();
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // selected node definitions
  useOnSelectionChange({
    onChange: ({ nodes, edges }) => {
      if (nodes.length === 1) {
        currentSelectedNode = nodes[0];
      }
    },
  });

  const onClick = useCallback(() => {
    const id = "item_" + crypto.randomUUID();
    const newNode = {
      id,
      position: {
        x: 20,
        y: 60 + (currentSelectedNode.itemNumber * 40),
      },
      data: {
        label: `item`,
      },
      draggable: false,
      style: {
        zIndex: '1001',
        border: '1px solid #ddd',
        background: 'white',
      },
      className: 'item-a',
      parentNode: currentSelectedNode.id,
    };

    data.setNodes(
      data.reactFlowInstance.getNodes().map((node) => {
        if (node.id === currentSelectedNode.id) {
          node.data = {
            ...node.data,
          }
          node.height = node.height + 40
          node.style.height = node.style.height + 40;
          node.itemNumber = node.itemNumber + 1;
          currentSelectedNode = node;
        }
        return node;
      })
    );
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <button onClick={onClick} className="btn-add">
        add node
      </button>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
};