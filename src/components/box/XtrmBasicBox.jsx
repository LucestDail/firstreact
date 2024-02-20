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
//                 type='target'
//                 position={Position.Top}
//                 style={{ background: '#555' }}
//                 onConnect={(params) => console.log('handle onConnect', params)}
//                 isConnectable={isConnectable}
//             />
//             {menu ? <XtrmItemContext onClick={onPaneClick} {...menu}/> : ''}
//             <div className='itemWrapper'>
//                 <div className='Bottom' style={{ alignSelf: 'stretch', paddingRight: 12, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
//                     <div onClick={(event) => { menu? onPaneClick() : activeContext(currentSelectedNode, event) }} className='Btn' style={{ paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
//                         <div className='Ico0041Add' style={{ width: 12, height: 12, position: 'relative' }}>
//                         </div>
//                         <div className='Text' style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word' }}>아이템 추가</div>
//                     </div>
//                     <div onClick={activeSimulator} className='Btn' style={{ paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
//                         <div className='Ico0085ChatSimulation' style={{ width: 12, height: 12, position: 'relative' }}>
//                         </div>
//                         <div className='Text' style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word' }}>시뮬레이터</div>
//                     </div>
//                 </div>
//             </div>

//             <Handle
//                 type='source'
//                 position={Position.Bottom}
//                 id='a'
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
                <div className='box-container-trigger'>
                    <div className='box-title-wrapper'>
                        <div className='box-title-container'>
                            <div className='box-name-container'>
                                <div className='box-name-element'>이름을 입력해주세요</div>
                            </div>
                            <div className='box-icon-container'>
                                <div className='box-icon-element Ico0085ChatSimulation'></div>
                            </div>
                            <div className='box-icon-container'>
                                <div className='box-icon-element Ico0013CloseBold'></div>
                            </div>
                        </div>
                        <div className='box-info-container'>
                            <div className='box-info-element'> TYPE : TRIGGER</div>
                            <div className='box-info-element'> BOXID : TR010</div>
                        </div>
                    </div>
                    <div className='box-contents-wrapper'>
                        <div className='box-content-wrapper'>
                            <div className='box-item-tag-wrapper'>
                                <div className='box-item-tag-container'>
                                    <div className='Ico0257ChatAgent box-item-tag-element'></div>
                                </div>
                            </div>
                            <div className='box-item-content-wrapper'>
                                <div className='box-item-title-wrapper'>
                                    <div className='box-item-title-container'>
                                        <div className='box-item-title-element'>텍스트 단락</div>
                                        <div className='Ico0096ArrowDownSolid box-item-tag-element'></div>
                                    </div>
                                </div>
                                <div className='box-item-input-wrapper'>
                                    <div className='box-item-input-container'>
                                        <div className='box-item-input-element'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-item-add-wrapper'>
                                <div className='box-item-add-container'>
                                    <div className='Ico0041Add box-item-add-element'></div>
                                </div>
                            </div>
                        </div>
                        <div className='box-content-wrapper-blue'>
                            <div className='box-item-tag-wrapper-blue'>
                                <div className='box-item-tag-container'>
                                    <div className='Ico0230User box-item-tag-element'></div>
                                </div>
                            </div>
                            <div className='box-item-content-wrapper'>
                                <div className='box-item-title-wrapper'>
                                    <div className='box-item-title-container'>
                                        <div className='box-item-title-element'>텍스트 단락</div>
                                        <div className='Ico0096ArrowDownSolid box-item-input-element'>
                                        </div>
                                    </div>
                                </div>
                                <div className='box-item-title-wrapper'>
                                    <div className='box-item-input-container'>
                                        <div className='box-item-input-element'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-item-add-wrapper'>
                                <div className='box-item-add-container'>
                                    <div className='Ico0041Add box-item-add-element'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}