import React from 'react';
export default () => {
    return (
        <>
            <div className="Node" style={{ width: 264, height: 668, paddingBottom: 16, paddingLeft: 16, paddingRight: 8, background: 'white', borderRadius: 4, border: '0.50px #CCCCCC solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
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
                                <div className="Text" style={{ width: 228, padding: 8, background: '#F7F7F7', borderRadius: 4, border: '1px #CCCCCC dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0090Text" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>케이크 디자인을 골라주세요!</div>
                                </div>
                                <div className="Parameter" style={{ width: 228, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0111Setting" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 12.45, height: 12.80, left: 1.77, top: 1.60, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div className="CakeDesign" style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>cake_design</div>
                                    <div className="Fx" style={{ textAlign: 'right', color: '#999999', fontSize: 13, fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word' }}>fx</div>
                                </div>
                            </div>
                            <div className="Frame67" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex' }}>
                                <div className="ResponseType" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                    <div style={{ textAlign: 'right', color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>단일선택</div>
                                    <div className="Ico0096ArrowDownSolid" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 8, height: 6.67, left: 4, top: 5.33, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                </div>
                                <div className="Btn" style={{ width: 228, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                    <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>팔레트 케이크</div>
                                    </div>
                                    <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>탄생화 케이크</div>
                                    </div>
                                    <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>플라워 케이크</div>
                                    </div>
                                    <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>커스텀 케이크</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Line1" style={{ width: 227, height: 0, border: '1px #D9D9D9 dotted' }}></div>
                        <div className="Chip" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                            <div className="Top" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex' }}>
                                <div className="Text" style={{ width: 228, padding: 8, background: '#F7F7F7', borderRadius: 4, border: '1px #CCCCCC dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0090Text" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>케이크 사이즈를 골라주세요!</div>
                                </div>
                                <div className="Parameter" style={{ width: 228, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0111Setting" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 12.45, height: 12.80, left: 1.77, top: 1.60, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div className="CakeSize" style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>cake_size</div>
                                    <div className="Fx" style={{ textAlign: 'right', color: '#999999', fontSize: 13, fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word' }}>fx</div>
                                </div>
                            </div>
                            <div className="Socket" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div className="Frame68" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                    <div className="ResponseType" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div style={{ textAlign: 'right', color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>단일선택</div>
                                        <div className="Ico0096ArrowDownSolid" style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div className="Vector" style={{ width: 8, height: 6.67, left: 4, top: 5.33, position: 'absolute', background: '#999999' }}></div>
                                        </div>
                                    </div>
                                    <div className="Btn" style={{ width: 228, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                        <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>1호</div>
                                        </div>
                                        <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>2호</div>
                                        </div>
                                        <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>3호</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Line1" style={{ width: 227, height: 0, border: '1px #D9D9D9 dotted' }}></div>
                        <div className="Chip" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                            <div className="Top" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex' }}>
                                <div className="Text" style={{ width: 228, padding: 8, background: '#F7F7F7', borderRadius: 4, border: '1px #CCCCCC dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0090Text" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>케이크 종류를 골라주세요!</div>
                                </div>
                                <div className="Parameter" style={{ width: 228, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0111Setting" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 12.45, height: 12.80, left: 1.77, top: 1.60, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#B3B3B3', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>파라미터 지정</div>
                                    <div className="Fx" style={{ textAlign: 'right', color: '#999999', fontSize: 13, fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word' }}>fx</div>
                                </div>
                            </div>
                            <div className="Socket" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div className="Frame69" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                    <div className="ResponseType" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div style={{ textAlign: 'right', color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>단일선택</div>
                                        <div className="Ico0096ArrowDownSolid" style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div className="Vector" style={{ width: 8, height: 6.67, left: 4, top: 5.33, position: 'absolute', background: '#999999' }}></div>
                                        </div>
                                    </div>
                                    <div className="Btn" style={{ width: 228, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                        <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>딸기</div>
                                        </div>
                                        <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>초코</div>
                                        </div>
                                        <div className="Btn" style={{ height: 28, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5, background: 'rgba(255, 255, 255, 0)', borderRadius: 2, border: '1px #619CF2 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="Text" style={{ textAlign: 'center', color: '#367DE4', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: 18, wordWrap: 'break-word' }}>얼그레이</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Line1" style={{ width: 227, height: 0, border: '1px #D9D9D9 dotted' }}></div>
                        <div className="Chip" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                            <div className="Top" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'flex' }}>
                                <div className="Text" style={{ width: 228, padding: 8, background: '#F7F7F7', borderRadius: 4, border: '1px #CCCCCC dotted', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0090Text" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 10.46, height: 10.77, left: 2.67, top: 2.67, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>픽업 일정을 설정해 주세요!</div>
                                </div>
                                <div className="Parameter" style={{ width: 228, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: 'white', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                    <div className="Ico0111Setting" style={{ width: 16, height: 16, position: 'relative' }}>
                                        <div className="Vector" style={{ width: 12.45, height: 12.80, left: 1.77, top: 1.60, position: 'absolute', background: '#999999' }}></div>
                                    </div>
                                    <div className="CakePickupDate" style={{ flex: '1 1 0', color: '#4D4D4D', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>cake_pickup_date</div>
                                    <div className="Fx" style={{ textAlign: 'right', color: '#999999', fontSize: 13, fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '600', lineHeight: 18, wordWrap: 'break-word' }}>fx</div>
                                </div>
                            </div>
                            <div className="Socket" style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                                <div className="Frame70" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                                    <div className="ResponseType" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div style={{ textAlign: 'right', color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>날짜</div>
                                        <div className="Ico0096ArrowDownSolid" style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div className="Vector" style={{ width: 8, height: 6.67, left: 4, top: 5.33, position: 'absolute', background: '#999999' }}></div>
                                        </div>
                                    </div>
                                    <div className="Picker" style={{ width: 120, height: 28, paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 4, background: 'white', border: '1px #CCCCCC solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                                        <div className="1201" style={{ width: 88, height: 18, color: '#1A1A1A', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>2022-12-01</div>
                                        <div className="Wrapper16" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                            <div className="Ico0008Cal" style={{ width: 16, height: 16, position: 'relative' }}>
                                                <div className="Vector" style={{ width: 13.33, height: 13.67, left: 1.33, top: 0.67, position: 'absolute', background: '#367DE4' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ResponseType" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                        <div style={{ textAlign: 'right', color: '#999999', fontSize: 12, fontFamily: 'Noto Sans KR', fontWeight: '500', lineHeight: 16, wordWrap: 'break-word' }}>시간</div>
                                        <div className="Ico0096ArrowDownSolid" style={{ width: 16, height: 16, position: 'relative' }}>
                                            <div className="Vector" style={{ width: 8, height: 6.67, left: 4, top: 5.33, position: 'absolute', background: '#999999' }}></div>
                                        </div>
                                    </div>
                                    <div className="Picker" style={{ width: 120, height: 28, paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 4, background: 'white', border: '1px #CCCCCC solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                                        <div className="0000" style={{ width: 84, height: 18, color: '#1A1A1A', fontSize: 13, fontFamily: 'Noto Sans KR', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word' }}>12:00:00</div>
                                        <div className="Wrapper16" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                            <div className="Ico0032Time" style={{ width: 16, height: 16, position: 'relative' }}>
                                                <div className="Vector" style={{ width: 14, height: 14, left: 1, top: 1, position: 'absolute', background: '#367DE4' }}></div>
                                            </div>
                                        </div>
                                    </div>
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