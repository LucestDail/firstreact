import uuid from "../modules/XtrmUUID.js";
export default (source, target) => {
    return {
        source: source,
        target: target,
        animated: true,
        draggable: false,
        style: { stroke: '#000' },
        id: 'edge_' + uuid(),
        type: 'xtrmedge',
        deletable: false,
        selectable: false,
        data: { emptyNode: target },
        pathOptions: 'step',
    }
}