import React from 'react';
export default () => {
    return (
        <>
            <div className="Card" style={{ width: 264, height: 134, paddingBottom: 16, paddingLeft: 16, paddingRight: 8, background: 'white', borderRadius: 4, border: '0.50px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div className="Header" style={{ width: 228, height: 48, paddingTop: 16, paddingBottom: 16, justifyContent: 'flex-start', alignItems: 'baseline', gap: 16, display: 'inline-flex' }}>
                    <div className="Frame13" style={{ flex: '1 1 0', height: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                        <div className="Frame14" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word' }}>첫인사</div>
                            <div className="Ico0174Info" style={{ width: 16, height: 16, position: 'relative' }}>
                                <div className="Vector" style={{ width: 13.33, height: 13.33, left: 1.33, top: 1.33, position: 'absolute', background: '#999999' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="Trigger" style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>TRIGGER</div>
                </div>
                <div className="Chip" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div className="Text" style={{ height: 70, padding: 8, background: '#F7F7F7', borderRadius: 4, border: '1px #CCCCCC dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                        <div className="Ico0090Text" style={{ width: 16, height: 16, position: 'relative' }}>
                            <div className="Vector" style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                        </div>
                        <div style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>안녕하세요! 테스트 베이커리 & 카페입니다. 🤗<br />무엇을 도와드릴까요?</div>
                    </div>
                    <div className="Socket" style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                </div>
            </div>
        </>
    );
};