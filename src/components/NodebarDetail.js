import React, { useCallback, useState, useEffect } from 'react';
import { useReactFlow, ReactFlowProvider, useStore, useOnSelectionChange } from 'reactflow';

let nodeId = 0;
let currentSelectedNode = {};
export default ({ setNodes }) => {

    // react component definitions
    const reactFlowInstance = useReactFlow();
    const [selectedNodes, setSelectedNodes] = useState([]);
    const [selectedEdges, setSelectedEdges] = useState([]);

    // selected node definitions
    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            if (nodes.length === 1) {
                currentSelectedNode = nodes[0];
            }
            setSelectedNodes(nodes.map((node) => JSON.stringify(node)));
            setSelectedEdges(edges.map((edge) => JSON.stringify(edge)));
        },
    });

    const onClick = useCallback(() => {
        
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: {
                x: 20,
                y: 60 + (currentSelectedNode.itemNumber * 40),
            },
            data: {
                label: `Node ${id}`,
            },
            className: 'item-a',
            parentNode: currentSelectedNode.id,
        };
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === currentSelectedNode.id) {
                    node.data = {
                        ...node.data,
                    }
                    node.style.height = node.style.height + 40;
                    node.itemNumber =  node.itemNumber + 1
                    // set latest selected node information
                    currentSelectedNode = node;
                }
                return node;
            })
        );
        reactFlowInstance.addNodes(newNode);
        
    }, []);

    return (
        <>
            {selectedNodes.length === 1 && currentSelectedNode.className.indexOf('group') > -1?
                <aside className="aside-container left1">
                    <div>{selectedNodes}</div>
                    <div className="description">노드 추가하기</div>
                    <button onClick={onClick} className="btn-add">
                        add node
                    </button>
                </aside>
                :
                <></>
            }
        </>
    );
};