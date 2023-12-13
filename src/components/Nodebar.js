import React from 'react';
export default ({onSave, onRestore, nodeJson}) => {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>
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
            <div className="btn">
                <button type="button" className="onSaveBtn" onClick={onSave}>내보내기</button>
                <button type="button" className="onRestoreBtn" onClick={onRestore}>불러오기</button>
            </div>
            <textarea onChange={onRestore} className="nodeinfo" style={{ width: '12vw', height: '70vh' }} defaultValue={nodeJson} />
        </aside>
    );
};
