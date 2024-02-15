import React from 'react';
export default () => {
    return (
        <>
            <div style={{ width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, background: '#DFE1E9', borderRadius: 4, border: '0.50px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <div style={{ width: 228, height: 48, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                        <div style={{ flex: '1 1 0', height: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                            <div style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word' }}>url : @locationSite</div>
                        </div>
                        <div style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>TRANSITION</div>
                        <div style={{ width: 24, height: 24, padding: 4, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 16, height: 16, position: 'relative' }}>
                                <div style={{ width: 11.24, height: 11.24, left: 2.40, top: 2.40, position: 'absolute', background: '#808080' }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'stretch', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 14, wordWrap: 'break-word' }}>ID : TR001</div>
                </div>
            </div>
        </>
    );
};