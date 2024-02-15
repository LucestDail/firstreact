import React from 'react';
export default () => {
    return (
        <>
            <div style={{ width: '100%', height: '100%', paddingBottom: 16, paddingLeft: 16, paddingRight: 8, opacity: 0.30, background: 'white', borderRadius: 4, border: '1px #1760CC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', height: 48, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                        <div style={{ flex: '1 1 0', height: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                            <div style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word' }}>이름을 입력해주세요.</div>
                        </div>
                        <div style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>OUTPUT</div>
                        <div style={{ width: 24, height: 24, padding: 4, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 16, height: 16, position: 'relative' }}>
                                <div style={{ width: 11.24, height: 11.24, left: 2.40, top: 2.40, position: 'absolute', background: '#808080' }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'stretch', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>ID : IN001</div>
                </div>
                <div style={{ alignSelf: 'stretch', height: 52, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', height: 52, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                            <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word' }}>한 줄 텍스트</div>
                            <div style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>ID : TE001</div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                            <div style={{ height: 32, padding: 8, background: '#FCFCFC', borderRadius: 4, border: '1px #CCCCCC dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                                <div style={{ width: 16, height: 16, position: 'relative' }}>
                                    <div style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                        </div>
                    </div>
                </div>
                <div style={{ alignSelf: 'stretch', paddingRight: 12, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ width: 85, paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
                        <div style={{ width: 12, height: 12, position: 'relative' }}>
                            <div style={{ width: 9.50, height: 9.50, left: 1.25, top: 1.25, position: 'absolute', background: '#808080' }}></div>
                        </div>
                        <div style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>아이템 추가</div>
                    </div>
                    <div style={{ width: 83, paddingTop: 6, paddingBottom: 6, paddingLeft: 6, paddingRight: 8, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 2, display: 'flex' }}>
                        <div style={{ width: 12, height: 12, position: 'relative' }}>
                            <div style={{ width: 10, height: 9.16, left: 1, top: 1.50, position: 'absolute', background: '#808080' }}></div>
                        </div>
                        <div style={{ color: '#808080', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>시뮬레이터</div>
                    </div>
                </div>
            </div>
        </>
    );
};