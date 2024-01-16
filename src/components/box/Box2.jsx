import React from 'react';
export default () => {
    return (
        <>
            <div className="Node" style={{ width: 264, height: 146, paddingBottom: 16, paddingLeft: 16, paddingRight: 8, background: 'white', borderRadius: 4, border: '0.50px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className="Header" style={{ width: 228, height: 48, paddingTop: 16, paddingBottom: 16, justifyContent: 'flex-start', alignItems: 'baseline', gap: 16, display: 'inline-flex' }}>
                    <div className="Frame13" style={{ flex: '1 1 0', height: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                        <div className="Socket" style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                        <div className="Frame14" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word' }}>필수입력</div>
                        </div>
                    </div>
                    <div className="Trigger" style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>PARAMETER</div>
                </div>
                <div className="Frame16" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div className="Parameter" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                        <div className="Chip" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                            <div className="Top" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex' }}>
                                <div className="Parameter" style={{ width: 228, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0111Setting" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 12.45, height: 12.80, left: 1.77, top: 1.60, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#B3B3B3', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>인풋유형</div>
                                </div>
                                <div className="Parameter" style={{ width: 228, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0111Setting" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 12.45, height: 12.80, left: 1.77, top: 1.60, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#B3B3B3', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>파라미터 지정</div>
                                    <div className="Fx" style={{ textAlign: 'right', color: '#999999', fontSize: 13, fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word' }}>fx</div>
                                </div>
                                <div className="Parameter" style={{ width: 228, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0111Setting" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 12.45, height: 12.80, left: 1.77, top: 1.60, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#B3B3B3', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>응답유형</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Socket" style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                </div>
            </div>
        </>
    );
};