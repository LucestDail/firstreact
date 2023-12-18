import React, { useCallback, useState, useEffect } from 'react';
import { useStore, useOnSelectionChange } from 'reactflow';
const transformSelector = (state) => state.transform;

export default ({ nodes, setNodes, nodeJson }) => {
    const [nodeName, setNodeName] = useState();
    const [selectedNodes, setSelectedNodes] = useState([]);
    const [selectedEdges, setSelectedEdges] = useState([]);
    const transform = useStore(transformSelector);
    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            setSelectedNodes(nodes.map((node) => JSON.stringify(node)));
            setSelectedEdges(edges.map((edge) => JSON.stringify(edge)));
        },
    });

    const selectAll = useCallback(() => {
        setNodes((nds) =>
            nds.map((node) => {
                node.selected = true;
                return node;
            })
        );
    }, [setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.selected) {
                    node.data = {
                        ...node.data,
                        label: nodeName,
                    };
                }
                return node;
            })
        );
    }, [nodeName, setNodes]);
    return (
        <aside>
            <div className="description">
                현재 선택 노드 정보 :
                <p style={{ width: '13vw', height: '10vh', wordWrap: 'break-word', overflow: 'scroll' }}>Selected nodes: {selectedNodes.join(', ')}</p>
                <p style={{ width: '13vw', height: '10vh', wordWrap: 'break-word', overflow: 'scroll' }}>Selected edges: {selectedEdges.join(', ')}</p>
            </div>
            <label>노드 내용 :</label>
            <input defaultValue={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />

            <div className="description">
                노드 상세 정보 창
            </div>
            <div className="title">확대 정보</div>
            <div className="transform">
                [{transform[0].toFixed(2)}, {transform[1].toFixed(2)}, {transform[2].toFixed(2)}]
            </div>
            <div className="title">노드 정보</div>
            <div style={{ width: '13vw', height: '10vh', wordWrap: 'break-word', overflow: 'scroll' }}>
                {nodes.map((node) => (
                    <div key={node.id}>
                        Node {node.id} - x: {node.position.x.toFixed(2)}, y: {node.position.y.toFixed(2)}
                    </div>
                ))}
            </div>
            <div className="selectall">
                <button onClick={selectAll}>전체 노드 선택</button>
            </div>

            <div className="title">노드 JSON 정보</div>
            <div>
                <p style={{ width: '13vw', height: '20vh', wordWrap: 'break-word', overflow: 'scroll' }}>{nodeJson}</p>
            </div>
        </aside>
    );
};
