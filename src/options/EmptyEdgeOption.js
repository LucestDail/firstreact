import uuid from '../modules/XtrmUUID.js';

export default (source, target) => {
    return {
        source: source,
        target: target,
        animated: true,
        style: { stroke: '#000' },
        id: 'edge_' + uuid(),
        type: 'emptyedge',
        draggable: false,
        deletable: false,
        selectable: false,
    };
}
