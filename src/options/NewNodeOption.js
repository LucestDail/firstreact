import uuid from '../modules/XtrmUUID.js';
export default (type, position) => {
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
            label: `${type} node`
        },
        itemNumber: 0
    };
}