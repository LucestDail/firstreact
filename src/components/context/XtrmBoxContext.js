/********************* Library area *********************/
import React, { useCallback } from 'react';
import { useReactFlow } from 'reactflow';
/********************* Components area *********************/
import BoxContext from './BoxContext.jsx';
import ItemContext from './ItemContext.jsx'
/********************* Module area *********************/

/********************* Style area *********************/
import '../../styles/boxContext.css';
/********************* Option area *********************/

/********************* Local Definition area *********************/

/********************* Main area *********************/
export default function ({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const keysave = useCallback(() => {
  });

  const keycall = useCallback(() => {
  });

  const clickItem = useCallback((params, event) => {
    console.log(params);
  });
  return (
    <>
      <div
        style={{ top, left, right, bottom }}
        className="context-menu"
        {...props}
      >
        <div className="Right" style={{ width: '100%', height: '100%', background: 'white', borderRadius: 4, overflow: 'hidden', border: '1px #E0E0E0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
          <div className="Category" style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 1, paddingBottom: 1, background: '#B3B3B3', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
            <div style={{ textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>아이템</div>
          </div>
          <div onClick={(event)=>{clickItem("xtrmText", event)}} item="xtrmText" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0090Text" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>텍스트</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmSound", event)}} item="xtrmSound" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0091Sound" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>음성파일</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmPhoto", event)}} item="xtrmPhoto" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0139Photo" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>이미지</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmCard", event)}} item="xtrmCard" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0289Card" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>카드</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmButton", event)}} item="xtrmButton" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0095Button" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>버튼</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmCarousel", event)}} item="xtrmCarousel" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0093Carousel" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>캐로셀</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmAccordion", event)}} item="xtrmAccordion" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0092Accordion" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>아코디언</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmList", event)}} item="xtrmList" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0043Detail" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>리스트</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmCalendar", event)}} item="xtrmCalendar" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0008Cal" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>날짜</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmTime", event)}} item="xtrmTime" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0032Time" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>시간</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmLink", event)}} item="xtrmLink" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0058Link" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>링크</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmKMS", event)}} item="xtrmKMS" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0094Book" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>KMS</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmApi", event)}} item="xtrmApi" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0293Api" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>API연결</div>
          </div>
          <div className="Divider" style={{ width: 48, height: 1, background: '#E0E0E0' }}></div>
          <div onClick={(event)=>{clickItem("xtrmPlugin", event)}} item="xtrmPlugin" className="BtnLnb" style={{ height: 48, paddingTop: 8, paddingBottom: 6, background: 'rgba(255, 255, 255, 0)', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'flex' }}>
            <div className="Ico0219Dashboard" style={{ width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
            </div>
            <div style={{ width: 48, textAlign: 'center', color: '#666666', fontSize: 10, fontFamily: 'Noto Sans KR', fontWeight: '700', lineHeight: '14px', wordWrap: 'break-word' }}>플러그인</div>
          </div>
        </div>
      </div>
    </>
  );
}
