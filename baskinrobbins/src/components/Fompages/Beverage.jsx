import "../../styles/IceCream.css";

const Beverage = () => {
    return (
        <div className="content">
            <h1 className="logo-font">Beverage</h1>
            <h5 className={'introduce-font'}>짜릿하게 시원한 블라스트부터 아이스크림을 듬뿍넣고 갈아만든 쉐이크까지!<br/>
                배스킨라빈스만의 특별함을 음료로 만나보세요.</h5>
            <div className="icecream-grid">
                <div className="be-item">
                    <img src={'../beverage/be1.png'} className="be-img"/>
                    <p>바삭 두바이 스타일 초코 블라스트</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be2.png'} className="be-img"/>
                    <p>바삭 민트초코 블라스트</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be3.png'} className="be-img"/>
                    <p>남작복숭아 망고 PANG! 아이스티</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be4.png'} className="be-img"/>
                    <p>피치망고 PANG! 에이드</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be5.png'} className="be-img"/>
                    <p>맥심 모카골드 블라스트</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be6.png'} className="be-img"/>
                    <p>이상한 나라의 솜사탕 블라스트</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be7.png'} className="be-img"/>
                    <p>우주 라이크 봉봉 블라스트</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be8.png'} className="be-img"/>
                    <p>과일 블라스트 (설향딸기, 리치워터, 멜론)</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be9.png'} className="be-img"/>
                    <p>티 블라스트 (자몽 블랙티, 레몬라임 민트티)</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be10.png'} className="be-img"/>
                    <p>요거트 블라스트 (스트로베리)</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be11.png'} className="be-img"/>
                    <p>카푸치노 블라스트 (오리지널, 모카)</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be12.png'} className="be-img"/>
                    <p>아이스크림 블라스트 (아몬드봉봉, 엄마는 외계인)</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be13.png'} className="be-img"/>
                    <p>외츄원 쉐이크</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be14.png'} className="be-img"/>
                    <p>밀크 쉐이크</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be15.png'} className="be-img"/>
                    <p>오레오 쉐이크 (오리지널, 딸기, 초코)</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be16.png'} className="be-img"/>
                    <p>티류 (복숭아, 캐모마일민트, 리치베리)</p>
                </div>
                <div className="be-item">
                    <img src={'../beverage/be17.png'} className="be-img"/>
                    <p>라떼류 (딸기 연유 라떼)</p>
                </div>
            </div>


        </div>
    );
};

export default Beverage;
