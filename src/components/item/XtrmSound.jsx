export default () => {
    return (
        <>
            <div className="Item" style={{ alignSelf: 'stretch', height: 76, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                <div className="Sound" style={{ alignSelf: 'stretch', height: 76, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                    <div className="ResponseType" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                        <div style={{ color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '16px', wordWrap: 'break-word' }}>멀티미디어 아이템</div>
                        <div className="IdItemId" style={{ textAlign: 'right', color: '#999999', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>ID : ITEM ID</div>
                    </div>
                    <div className="Chip" style={{ width: 240, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                        <div className="Player" style={{ width: 228, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #CCCCCC dotted', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div className="Top" style={{ alignSelf: 'stretch', height: 20, paddingTop: 2, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, background: '#F7F7F7', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div className="35" style={{ color: '#CCCCCC', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>00:00</div>
                                <div className="Seekbar" style={{ width: 146, height: 4, position: 'relative', background: '#E0E0E0', borderRadius: 9999, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }} />
                                <div className="35" style={{ textAlign: 'right', color: '#CCCCCC', fontSize: 11, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>00:00</div>
                            </div>
                            <div className="Bottom" style={{ alignSelf: 'stretch', paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div className="Btn" style={{ flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div className="Btn" style={{ width: 24, height: 24, padding: 4, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                        <div className="Ico0056PageNext" style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div className="Vector" style={{ width: 6.67, height: 8, left: 5.33, top: 4, position: 'absolute', background: '#CCCCCC' }}></div>
                                        </div>
                                    </div>
                                    <div className="Btn" style={{ width: 24, height: 24, padding: 4, background: 'rgba(255, 255, 255, 0)', borderRadius: 6, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                        <div className="Ico0108Stop" style={{ width: 16, height: 16, position: 'relative' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="Vol" style={{ width: 68, height: 16, position: 'relative' }}>
                                    <div className="Seekbar" style={{ width: 48, height: 4, left: 20, top: 6, position: 'absolute', background: '#E0E0E0', borderRadius: 9999, overflow: 'hidden' }} />
                                    <div className="Ico0091Sound" style={{ width: 16, height: 16, left: 0, top: 0, position: 'absolute' }}>
                                    </div>
                                    <div className="Handle" style={{ width: 12, height: 12, left: 16, top: 2, position: 'absolute', background: 'white', boxShadow: '0px 2px 8px rgba(83, 84, 130, 0.12)', borderRadius: 999 }}>
                                        <div className="Accent" style={{ width: 6, height: 6, left: 3, top: 3, position: 'absolute', background: '#CCCCCC', boxShadow: '0px 8px 40px rgba(83, 84, 130, 0.60)', borderRadius: 999 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Socket" style={{ width: 8, height: 8, background: 'rgba(26, 26, 26, 0.12)', borderRadius: 50 }} />
                    </div>
                </div>
            </div>
        </>
    )
}