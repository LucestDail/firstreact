export default () => {
    return (
        <>
            <div className="Text" style={{ alignSelf: 'stretch', height: 56, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                <div className="ResponseType" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '16px', wordWrap: 'break-word' }}>텍스트 단락 아이템</div>
                    <div className="IdItemId" style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>ID : ITEM ID</div>
                </div>
                <div className="Chip" style={{ width:'100%', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                    <div className="Text" style={{ width:'100%', height: 32, padding: 8, background: '#F7F7F7', borderRadius: 4, border: '1px #E0E0E0 dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex' }}>
                        <div className="Ico0090Text" style={{ width: 16, height: 16, position: 'relative' }}>
                        </div>
                    </div>
                    <div className="Socket" style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                </div>
            </div>
        </>
    )
}