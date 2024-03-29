import XtrmUUID from "../modules/XtrmUUID";
export default (parentNodeId) => {
    return {
        id: 'empty_' + XtrmUUID(),
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
        style: { backgroundColor: 'rgba(255, 0, 0, 0)', width: 280, height: 100 },
        parentNode: parentNodeId,
        itemNumber: 0,
    };
}