import React from 'react';
import {
    BaseEdge,
    EdgeLabelRenderer,
    EdgeProps,
    getBezierPath,
    useReactFlow,
} from 'reactflow';
import uuid from 'react-uuid'
import '../styles/buttonedge.css';

const getId = () => uuid();
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
            id: 'box_' + getId(),
            type: 'default',
            sourcePosition: 'bottom',
            targetPosition: 'top',
            position: {
                x: 0,
                y: getNode(target).position.y,
            },
            className: 'group-a',
            style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 100 },
            data: {
                label: 'added node',
            },
            itemNumber: 0,
            parentNode: source,
            draggable: false,
            deletable: false,
        };
        const emptyNode = {
            id: 'empty_' + getId(),
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
            parentNode: newNode.id,
            itemNumber: 0,
        }
        const newEdge = {
            id: 'edge_' + getId(),
            source: source,
            target: newNode.id,
            animated: true,
            deletable: false,
            selectable: false,
            draggable: false,
        }
        const emptyEdge = {
            source: newNode.id,
            target: emptyNode.id,
            animated: true,
            style: { stroke: '#000' },
            id: 'edge_' + getId(),
            type: 'buttonedge',
            draggable: false,
            deletable: false,
            selectable: false,
        }
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
