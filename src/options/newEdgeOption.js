import uuid from "../modules/uuid.js";
export default (source, target) => {
    return {
        source: source,
        target: target,
        animated: true,
        draggable: false,
        style: { stroke: '#000' },
        id: 'edge_' + uuid(),
        type: 'buttonedge',
        deletable: false,
        selectable: false,
        data: { emptyNode: target },
    }
}