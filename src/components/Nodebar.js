import React, { useCallback, useState, useRef } from 'react';

export default ({ setNodes, setEdges, nodes, edges }) => {

    const ref = useRef(null);
    const [message, setMessage] = useState('');

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = JSON.parse(ref.current.value);
            if (flow) {
                setNodes(flow.nodes || []);
                setEdges(flow.edges || []);
            }
        };
        restoreFlow();
    }, [setNodes]);

    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    async function readFile(event){
        const file = event.target.files.item(0)
        const text = await file.text();
        document.getElementById("message").value = text;
        setMessage(text);
    }

    return (
        <aside className="aside-container left0">
            <div className="description">노드 추가하기</div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                시작 노드
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                중간 노드
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                마지막 노드
            </div>
            <button disabled={!message} onClick={onRestore} className="btn-add">
                import react flow
            </button>
            <input type="file" onChange={readFile}></input>
            <textarea
                style={{ width: '13vw', height: '60vh', wordWrap: 'break-word', overflow: 'scroll' }}
                id="message"
                name="message"
                value={message}
                ref={ref}
                onChange={handleMessageChange}
            ></textarea>
        </aside>
    );
};
