import React, { useCallback, useState } from 'react';
import ReactFlow, { Handle, Position, useReactFlow, useOnSelectionChange, } from 'reactflow';
import NewItemOption from '../../options/NewItemOption.js';
import XtrmItemContext from '../context/XtrmItemContext.js';
let currentSelectedNode = {};
// export default ({ isConnectable }) => {
//     const [menu, setMenu] = useState(null);
//     const { setNodes, getNodes, getNode, addNodes } = useReactFlow();
//     useOnSelectionChange({
//         onChange: ({ nodes, edges }) => {
//             if (nodes.length === 1) {
//                 currentSelectedNode = nodes[0];
//             }
//         },
//     });
//     const activeContext = useCallback(
//         (currentSelectedNode, event) => {
//             event.preventDefault();
//             setMenu({
//                 id: currentSelectedNode.id,
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//             });
//         },
//         [setMenu],
//     );
//     const activeSimulator = useCallback(() => { }, []);
//     const onPaneClick = useCallback(() => setMenu(null), [setMenu]);
//     return (
//         <>
//             <Handle
//                 type="target"
//                 position={Position.Top}
//                 style={{ background: '#555' }}
//                 onConnect={(params) => console.log('handle onConnect', params)}
//                 isConnectable={isConnectable}
//             />
//             {menu ? <XtrmItemContext onClick={onPaneClick} {...menu}/> : ""}
//             <div className='itemWrapper'>
//                 <div className="Bottom" style={{ alignSelf: 'stretch', paddingRight: 12, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
//                     <div onClick={(event) => { menu? onPaneClick() : activeContext(currentSelectedNode, event) }} className="Btn" style={{ paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
//                         <div className="Ico0041Add" style={{ width: 12, height: 12, position: 'relative' }}>
//                         </div>
//                         <div className="Text" style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word' }}>아이템 추가</div>
//                     </div>
//                     <div onClick={activeSimulator} className="Btn" style={{ paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
//                         <div className="Ico0085ChatSimulation" style={{ width: 12, height: 12, position: 'relative' }}>
//                         </div>
//                         <div className="Text" style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word' }}>시뮬레이터</div>
//                     </div>
//                 </div>
//             </div>

//             <Handle
//                 type="source"
//                 position={Position.Bottom}
//                 id="a"
//                 style={{ background: '#555' }}
//                 isConnectable={isConnectable}
//             />
//         </>
//     );
// };


export default () => {
    return (
        <>
            <div className='box-wrapper box-wrapper-trigger'>
                <div style={{ width: '100%', height: '100%', paddingBottom: 12, background: 'white', borderRadius: 4, border: '1px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <div style={{ alignSelf: 'stretch', height: 52, paddingLeft: 16, paddingRight: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                            <div style={{ flex: '1 1 0', height: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                                <div style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '20px', wordWrap: 'break-word' }}>이름을 입력해주세요</div>
                            </div>
                            <div style={{ width: 24, height: 24, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div className="Ico0085ChatSimulation" style={{ width: 18, height: 18, position: 'relative' }}></div>
                            </div>
                            <div style={{ width: 24, height: 24, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div className="Ico0013CloseBold" style={{ width: 18, height: 18, position: 'relative' }}></div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                            <div style={{ color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>TYPE : TRIGGER</div>
                            <div style={{ color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>BOXID : TR010</div>
                        </div>
                    </div>
                    <div style={{ height: '64px', paddingLeft: 8, paddingRight: 8, alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', gap: 12, display: 'flex' }}>
                        <div style={{ height: 68, background: '#F7F7F7', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomRightRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                            <div style={{ marginLeft: '-28px', width: 28, height: 28, padding: 4, background: '#808080', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                <div style={{ width: 20, height: 20, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Ico0257ChatAgent" style={{ width: 20, height: 20, position: 'relative'}}></div>
                                </div>
                            </div>
                            <div style={{  marginTop: '-40px', padding: '8px', alignSelf: 'stretch', height: '52px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                                        <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '16px', wordWrap: 'break-word' }}>텍스트 단락</div>
                                        <div className="Ico0096ArrowDownSolid" style={{ width: 16, height: 16, position: 'relative' }}>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right', color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>AID : TE001</div>
                                </div>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div style={{ flex: '1 1 0', height: 32, padding: 8, background: '#FCFCFC', borderRadius: 4, border: '1px #E0E0E0 dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                        <div style={{ width: 16, height: 16, position: 'relative' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ position:'absolute', bottom: '-32px', left:'120px', width: 20, height: 20, padding: 4, background: 'white', border: '1px #CCCCCC solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                <div style={{ width: 12, height: 12, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Ico0041Add" style={{ width: 12, height: 12, position: 'relative' }}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: 68, padding: 8, background: '#EBF3FF', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomRightRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                            <div style={{ width: 28, height: 28, padding: 4, background: '#4E8EEB', borderTopLeftRadius: 4, borderTopRightRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                <div style={{ width: 20, height: 20, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Ico0230User" style={{ width: 24, height: 24, position: 'relative' }}></div>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'stretch', height: '52px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                                        <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '16px', wordWrap: 'break-word' }}>한 줄 텍스트</div>
                                        <div style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div style={{ width: 8, height: 6.67, left: 4, top: 5.33, position: 'absolute', background: '#999999' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>UID : TE001</div>
                                    <div style={{ flex: '1 1 0', height: 16, justifyContent: 'flex-end', alignItems: 'center', display: 'flex' }}>
                                        <div style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div style={{ width: 13.33, height: 12.22, left: 14.67, top: 14.22, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#999999' }}></div>
                                        </div>
                                        <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '16px', wordWrap: 'break-word' }}>0</div>
                                    </div>
                                </div>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div style={{ flex: '1 1 0', height: 32, padding: 8, background: '#FCFCFC', borderRadius: 4, border: '1px #E0E0E0 dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                        <div style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: 8, height: 12, background: '#D9D9D9', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}