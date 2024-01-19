import React, { useCallback, useState } from 'react';
import { Handle, Position, useReactFlow, useOnSelectionChange, } from 'reactflow';
import NewItemOption from '../../options/NewItemOption.js';
import XtrmItemContext from '../context/XtrmItemContext.js';
let currentSelectedNode = {};
export default ({ data, isConnectable }) => {
    const [menu, setMenu] = useState(null);
    const { setNodes, getNodes, getNode, addNodes } = useReactFlow();
    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            if (nodes.length === 1) {
                currentSelectedNode = nodes[0];
            }
        },
    });
    const activeContext = useCallback(
        (currentSelectedNode, event) => {
            event.preventDefault();
            setMenu({
                id: currentSelectedNode.id,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            });
        },
        [setMenu],
    );
    const activeSimulator = useCallback(() => { }, []);
    const onPaneClick = useCallback(() => setMenu(null), [setMenu]);
    return (
        <>
            {menu ? <XtrmItemContext onClick={onPaneClick} {...menu}/> : ""}
            <div className='itemWrapper'>
                <div className="Bottom" style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex', width:'100%'}}>
                    <div onClick={(event) => { activeContext(currentSelectedNode, event) }} className="Btn" style={{ paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
                        <div className="Ico0041Add" style={{ width: 12, height: 12, position: 'relative' }}>
                        </div>
                        <div className="Text" style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word' }}>아이템 추가</div>
                    </div>
                    <div onClick={activeSimulator} className="Btn" style={{ paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
                        <div className="Ico0085ChatSimulation" style={{ width: 12, height: 12, position: 'relative' }}>
                        </div>
                        <div className="Text" style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word' }}>시뮬레이터</div>
                    </div>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={{ background: '#555' }}
                isConnectable={isConnectable}
            />
        </>
    );
};