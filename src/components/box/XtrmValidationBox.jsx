import React from 'react';
export default () => {
    return (
        <>
            <div style={{ width: '100%', height: '100%', paddingBottom: 12, background: 'white', borderRadius: 4, border: '1px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 52, paddingLeft: 16, paddingRight: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                        <div style={{ flex: '1 1 0', height: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                            <div style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 20, wordWrap: 'break-word' }}>필수입력체크</div>
                        </div>
                        <div style={{ width: 24, height: 24, padding: 4, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 16, height: 16, position: 'relative' }}>
                                <div style={{ width: 13.33, height: 12.22, left: 1.33, top: 2, position: 'absolute', background: '#808080' }}></div>
                            </div>
                        </div>
                        <div style={{ width: 24, height: 24, padding: 4, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 16, height: 16, position: 'relative' }}>
                                <div style={{ width: 10.83, height: 10.85, left: 2.67, top: 2.66, position: 'absolute', background: '#808080' }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                        <div style={{ color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>TYPE : VALIDATION</div>
                        <div style={{ color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>BOXID : VA010</div>
                    </div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex' }}>
                    <div style={{ height: 134, padding: 8, background: '#F7F7F7', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomRightRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                        <div style={{ width: 28, height: 28, padding: 4, background: '#808080', borderTopLeftRadius: 4, borderTopRightRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ width: 15, height: 17.23, background: 'white' }}></div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', height: 54, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                            <div style={{ textAlign: 'right', color: '#F1386F', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>필수 슬롯이 비어 있습니다.</div>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div style={{ flex: '1 1 0', height: 34, padding: 8, background: '#E0E0E0', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                    <div style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>설명 : @변수명</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', height: 52, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word' }}>텍스트 단락</div>
                                <div style={{ textAlign: 'right', color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>AID : TE002</div>
                            </div>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div style={{ flex: '1 1 0', height: 32, padding: 8, background: '#FCFCFC', borderRadius: 4, border: '1px #E0E0E0 dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                    <div style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: 20, height: 20, padding: 4, background: 'white', border: '1px #CCCCCC solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ width: 12, height: 12, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ width: 9.50, height: 9.50, background: '#808080' }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 96, padding: 8, background: '#EBF3FF', borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomRightRadius: 4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                        <div style={{ width: 28, height: 28, padding: 4, background: '#4E8EEB', borderTopLeftRadius: 4, borderTopRightRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ width: 14.50, height: 16.67, background: 'white' }}></div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', height: 80, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
                                    <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word' }}>단일 선택버튼</div>
                                    <div style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div style={{ width: 8, height: 6.67, left: 4, top: 5.33, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                </div>
                                <div style={{ color: '#999999', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>UID : BT001</div>
                            </div>
                            <div style={{ width: 240, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div style={{ width: 228, height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'white', borderRadius: 4, border: '1px #B3B3B3 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', color: '#666666', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 18, wordWrap: 'break-word' }}>네, 맞아요</div>
                                </div>
                                <div style={{ width: 20, height: 20, padding: 4, background: '#1760CC', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <div style={{ width: 12, height: 12, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                        <div style={{ width: 9.50, height: 9.50, background: 'white' }}></div>
                                    </div>
                                </div>
                                <div style={{ width: 8, height: 12, background: '#D9D9D9', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                            </div>
                            <div style={{ width: 240, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div style={{ width: 228, height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'white', borderRadius: 4, border: '1px #B3B3B3 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'center', color: '#666666', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 18, wordWrap: 'break-word' }}>다시 할게요</div>
                                </div>
                                <div style={{ width: 20, height: 20, padding: 4, background: '#1760CC', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <div style={{ width: 12, height: 12, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                        <div style={{ width: 9.50, height: 9.50, background: 'white' }}></div>
                                    </div>
                                </div>
                                <div style={{ width: 8, height: 12, background: '#D9D9D9', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                            </div>
                        </div>
                        <div style={{ width: 20, height: 20, padding: 4, background: 'white', border: '1px #CCCCCC solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ width: 12, height: 12, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ width: 9.50, height: 9.50, background: '#808080' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};