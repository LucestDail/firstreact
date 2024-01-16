import React, { useCallback, useState } from 'react';
import ReactFlow, {Handle,Position,useReactFlow,useOnSelectionChange,} from 'reactflow';
import NewItemOption from '../../options/NewItemOption.js';
let currentSelectedNode = {};
export default ({ data, isConnectable }) => {
    const { setEdges, setNodes, getNodes, getNode, addNodes } = useReactFlow();
    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            if (nodes.length === 1) {
                currentSelectedNode = nodes[0];
            }
        },
    });
    const onClick = useCallback((event) => {
        currentSelectedNode = getNode(event.target.parentElement.parentElement.getAttribute("data-id"));
        const newItem = NewItemOption(currentSelectedNode.id, currentSelectedNode.itemNumber);
        setNodes(
            getNodes().map((node) => {
                if (node.id === currentSelectedNode.id) {
                    node.data = {
                        ...node.data,
                    }
                    node.height = node.height + 40;
                    node.style.height = node.style.height + 40;
                    node.itemNumber = node.itemNumber + 1;
                    currentSelectedNode = node;
                }
                if (node.id === currentSelectedNode.emptyNodeId) {
                    node.data = {
                        ...node.data,
                    }
                    node.position.y += 40;
                }
                return node;
            })
        );
        addNodes(newItem);
    }, []);
    return (
        <>
            <Handle
                type="target"
                position={Position.Top}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className='itemWrapper'>
                <button onClick={onClick} className="btn btn-3 hover-border-1">
                    <span>아이템 추가</span>
                </button>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={{ background: '#555' }}
                isConnectable={isConnectable}
            />
        </>
    );
};