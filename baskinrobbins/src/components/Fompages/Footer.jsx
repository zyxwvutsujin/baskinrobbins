import "../../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="../footerlogo.png" />
                    <p>사업자 등록번호: 303-81-09535<br/>
                        비알코리아(주) 대표이사 도세호<br/>
                        서울특별시 서초구 남부순환로 2620(양재동 11-149일대)<br/>
                        TEL : 080-555-3131</p>
                </div>
                <div className="footer-menu">
                    <h4 className="footer-font">Menu</h4>
                    <ul>
                        <li>이달의 맛</li>
                        <li>아이스크림</li>
                        <li>프리팩</li>
                        <li>아이스크림 케이크</li>
                        <li>디저트</li>
                        <li>음료</li>
                        <li>커피</li>
                    </ul>
                </div>
                <div className="footer-play">
                    <h4 className="footer-font">BR Play</h4>
                    <ul>
                        <li>이벤트</li>
                        <li>베라광장</li>
                        <li>BR레시피</li>
                        <li>마이플레이버리스트</li>
                    </ul>
                </div>
                <div className="footer-story">
                    <h4 className="footer-font">BR Story</h4>
                    <ul>
                        <li>브랜드 스토리</li>
                        <li>이달의 맛 히스토리</li>
                        <li>Be Better</li>
                    </ul>
                </div>
                <div className="footer-delivery">
                    <h4 className="footer-font">Delivery/Store</h4>
                    <ul>
                        <li>매장 찾기</li>
                        <li>100flavor 플래그십스토어</li>
                        <li>워크샵 by 베스킨라빈스</li>
                        <li>점포개설문의</li>
                        <li>배달주문</li>
                        <li>단체주문</li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h4 className="footer-font">Information Center</h4>
                    <ul>
                        <li>고객센터</li>
                        <li>소비자중심경영(CCM)</li>
                        <li>칭찬점프</li>
                        <li>공지사항</li>
                        <li>보도자료</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
