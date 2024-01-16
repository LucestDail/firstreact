export default (nodeId, parentNodeId) => {
    return {
        id: nodeId,
        type: 'emptyBox',
        targetPosition: 'top',
        position: {
            x: 0,
            y: 200,
        },
        className: 'group-empty',
        draggable: false,
        selectable: false,
        deletable: false,
        style: { backgroundColor: 'rgba(255, 0, 0, 0)', width: 200, height: 100 },
        parentNode: parentNodeId,
        itemNumber: 0,
    };
}