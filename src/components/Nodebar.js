import React from 'react';
import ReactFlow, {
} from 'reactflow';

export default () => {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="aside-container left0">
            <div className="description">노드 추가하기</div>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                아래 점 있는 노드
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                위아래 점 있는 노드
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                위 점 있는 노드
            </div>
        </aside>
    );
};
