import uuid from '../modules/uuid.js';
export default (parentNodeId, parentNodeItemNumber) => {
    return {
        id: 'item_' + uuid(),
        position: {
          x: 20,
          y: 60 + (parentNodeItemNumber * 40),
        },
        data: {
          label: `item`,
        },
        draggable: false,
        style: {
          zIndex: '1001',
          border: '1px solid #ddd',
          background: 'white',
        },
        className: 'item-a',
        parentNode: parentNodeId,
      };
}