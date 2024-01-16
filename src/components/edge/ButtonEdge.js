import React from 'react';
import {BaseEdge,EdgeLabelRenderer,EdgeProps,getBezierPath,useReactFlow,} from 'reactflow';
import uuid from '../../modules/uuid.js';
import '../../styles/buttonedge.css';
import EmptyEdgeOption from '../../options/EmptyEdgeOption.js';
import NewEdgeOption from '../../options/newEdgeOption.js';
import EmptyNodeOption from '../../options/EmptyNodeOption.js';
export default function CustomEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    source,
    target,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
}) {
    const { setEdges, setNodes, getNode } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onMinus = () => {
        setEdges((edges) => edges.filter((edge) => edge.id !== id));
        setNodes((nodes) => nodes.filter((node) => node.id !== target));
    };
    const onPlus = () => {
        const newNode = {
            id: 'box_' + uuid(),
            type: 'xtrmBox',
            sourcePosition: 'bottom',
            targetPosition: 'top',
            position: {
                x: 0,
                y: getNode(target).position.y,
            },
            className: 'group-a',
            style: {
                backgroundColor: 'rgba(255, 0, 0, 0)',
                width: 200,
                height: 100,
                borderWidth: 2,
                borderRadius: 5,
                borderStyle: 'solid'
            },
            data: {
                label: 'added node',
            },
            itemNumber: 0,
            parentNode: source,
            draggable: false,
            deletable: false,
        };
        
        const emptyNode = EmptyNodeOption('empty_' + uuid(), newNode.id);
        const newEdge = NewEdgeOption(source, newNode.id);
        const emptyEdge = EmptyEdgeOption(newNode.id, emptyNode.id);
        setNodes((nodes) => nodes.filter((node) => node.id !== target).concat(newNode).concat(emptyNode));
        setEdges((edges) => edges.filter((edge) => edge.id !== id).concat(newEdge).concat(emptyEdge));
    };
    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        fontSize: 12,
                        // everything inside EdgeLabelRenderer has no pointer events by default
                        // if you have an interactive element, set pointer-events: all
                        pointerEvents: 'all',
                    }}
                    className="nodrag nopan"
                >
                    <button className="edgebutton" onClick={onMinus}>
                        -
                    </button>
                    <button className="edgebutton" onClick={onPlus}>
                        +
                    </button>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}
