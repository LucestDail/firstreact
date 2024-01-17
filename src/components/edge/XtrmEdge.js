import React from 'react';
import {BaseEdge,EdgeLabelRenderer,EdgeProps,getBezierPath,useReactFlow,} from 'reactflow';
import uuid from '../../modules/XtrmUUID.js';
import '../../styles/buttonedge.css';
import EmptyEdgeOption from '../../options/EmptyEdgeOption.js';
import NewEdgeOption from '../../options/newEdgeOption.js';
import EmptyNodeOption from '../../options/EmptyNodeOption.js';
export default function({
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
        console.log('minus');
    };
    const onPlus = () => {
        console.log('onPlus');
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
