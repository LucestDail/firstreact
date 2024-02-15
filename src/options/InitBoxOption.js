import uuid from '../modules/XtrmUUID';
export default [
    {
        id: 'start_' + uuid(),
        type: 'xtrmStartPointBox',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        position: { x: 500, y: 250 },
        className: 'group-a',
        style: {
            width: 280,
            height: 100,
        },
        itemNumber: 0,
        draggable: false,
        deletable: false,
    },
    {
        id: 'box_' + uuid(),
        type: 'xtrmBasicBox',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        position: { x: 800, y: 400 },
        className: 'group-a',
        style: {
            width: 260,
            height: 100,
        },
        itemNumber: 0,
        draggable: true,
        deletable: true,
    }
];
