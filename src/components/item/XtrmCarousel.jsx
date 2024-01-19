export default () => {
    return (
        <>
            <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '16px', wordWrap: 'break-word' }}>캐러셀 아이템 </div>
                    <div style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>ID : ITEM ID</div>
                </div>
                <div style={{ width: 240, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ height: 32, padding: 8, background: '#F7F7F7', borderRadius: 4, overflow: 'hidden', border: '1px #E0E0E0 dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                        <div style={{ width: 16, height: 16, position: 'relative' }}>
                        </div>
                    </div>
                    <div style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                </div>
            </div>
        </>
    )
}