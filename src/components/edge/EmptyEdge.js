import React from 'react';
import {BaseEdge,EdgeLabelRenderer,EdgeProps,getBezierPath,useReactFlow, getSmoothStepPath} from 'reactflow';
import uuid from '../../modules/XtrmUUID.js';
import '../../styles/buttonedge.css';
import EmptyEdgeOption from '../../options/EmptyEdgeOption.js';
import NewEdgeOption from '../../options/newEdgeOption.js';
import EmptyNodeOption from '../../options/EmptyNodeOption.js';
import NewBoxOption from '../../options/NewBoxOption.js';
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
    const { setEdges, setNodes, getNode, getNodes } = useReactFlow();
    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onMinus = (event) => {
        setEdges((edges) => edges.filter((edge) => edge.id !== id));
        setNodes((nodes) => nodes.filter((node) => node.id !== target));
    };
    const onPlus = (event) => {
        const currentNodes = getNodes();
        let nodeCount = 0;
        for(var i = 0; i < currentNodes.length; i++){
            if(currentNodes[i].parentNode === source){
                nodeCount++;
            }
        }
        const position = {
            x: 300 * nodeCount,
            y: getNode(target).position.y,
        }
        const newNode = NewBoxOption('xtrmBox', position, source);
        const emptyNode = EmptyNodeOption(newNode.id);
        const newEdge = NewEdgeOption(source, newNode.id);
        const emptyEdge = EmptyEdgeOption(newNode.id, emptyNode.id);
        // setNodes((nodes) => nodes.filter((node) => node.id !== target).concat(newNode).concat(emptyNode));
        setNodes((nodes) => nodes.concat(newNode).concat(emptyNode));
        // setEdges((edges) => edges.filter((edge) => edge.id !== id).concat(newEdge).concat(emptyEdge));
        setEdges((edges) => edges.concat(newEdge).concat(emptyEdge));

    };
    const onConnect = (event) => {
        console.log(event);
    };
    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        top: '30px',
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
                    <button className="edgebutton" onClick={onConnect}>
                        ...
                    </button>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}
