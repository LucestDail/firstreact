export default () => {
    return (
        <>
            <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '16px', wordWrap: 'break-word' }}>버튼 아이템 </div>
                    <div style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>ID : ITEM ID</div>
                </div>
                <div style={{ width: 240, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'white', borderRadius: 4, border: '1px #CCCCCC dotted', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ textAlign: 'center', color: '#B3B3B3', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: '18px', wordWrap: 'break-word' }}>버튼추가</div>
                    </div>
                    <div style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                </div>
            </div>
        </>
    )
}