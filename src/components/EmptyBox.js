import React from 'react';
import ReactFlow, {
  Handle,
  Position,
} from 'reactflow';
export default ({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ backgroundColor: 'transparent' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
    </>
  );
};