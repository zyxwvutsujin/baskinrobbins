import "../../styles/IceCream.css";

const Coffee = () => {
    return (
        <div className="content">
            <h1 className="logo-font">Coffee</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h5 className={'introduce-font'}>진한 카카오의 향과 풍부한 바디감의 배스킨라빈스 대표 커피 'Café Bris' <br/>
                일상에 모든 순간을 카페브리즈와 함께하세요.</h5>
            <div className="icecream-grid">
                <div className="co-item">
                    <img src={'../beverage/co1.png'} className="co-img"/>
                    <p>아메리카노</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co2.png'} className="co-img"/>
                    <p>카페라떼</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co3.png'} className="co-img"/>
                    <p>바닐라빈 라떼</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co4.png'} className="co-img"/>
                    <p>카라멜 마끼아또</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co5.png'} className="co-img"/>
                    <p>엄마는 외계인 카페모카</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co6.png'} className="co-img"/>
                    <p>연유라떼</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co7.png'} className="co-img"/>
                    <p>카페31</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co8.png'} className="co-img"/>
                    <p>아포가토 라떼</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co9.png'} className="co-img"/>
                    <p>솔티크림 슈페너</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co10.png'} className="co-img"/>
                    <p>솔티크림 라떼</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co11.png'} className="co-img"/>
                    <p>콜드브루 아메리카노</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co12.png'} className="co-img"/>
                    <p>콜드브루 라떼</p>
                </div>
                <div className="co-item">
                    <img src={'../beverage/co13.png'} className="co-img"/>
                    <p>콜드브루 오트</p>
                </div>
            </div>
        </div>
    );
};

export default Coffee;
