import uuid from '../modules/XtrmUUID';
export default (type, position, parentNode) => {
    return {
        id: 'box_' + uuid(),
        type,
        sourcePosition: 'bottom',
        targetPosition: 'top',
        position,
        className: 'group-a',
        style: {
            backgroundColor: 'rgba(255, 0, 0, 0)',
            width: 280,
            height: 100,
            borderWidth: 2,
            borderRadius: 5,
            borderStyle: 'solid'
        },
        data: {
            label: 'added node',
        },
        itemNumber: 0,
        parentNode,
        draggable: true,
        deletable: true,
    }
};