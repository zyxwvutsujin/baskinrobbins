import '/src/styles/Formpage.css'

const ThisMonthTaste = () => {
    return (
        <div className="content">
            <h1 className={'logo-first'}>9월 이달의 맛</h1>
            <div className={'border-grid border'}>
                <div className={'bottom'}>
                    <h5 className={'fommenu-font'}>WOOSEOK THE ALIEN</h5>
                    <h1 className={'fommenu-font'}>우석이도 외계인</h1>
                    <p className={'fommenu-font1'}>우석이가 Pick한 최애 플레이버!<br/>
                        ´엄마는 외계인´과 ´민트 초콜릿 칩´의 만남<br/>
                        더 청량해진 민트 아이스크림과 달콤한 초콜릿 아이스크림에<br/>
                        시그니처 프레첼 볼로 단짠 매력까지!</p>
                </div>

                <div className="flavor-container">
                    <div className="flavor-item">
                        <img src={'../Fompage/mint.png'} className={'fom-flavor-img'} alt="민트"/>
                        <p>민트</p>
                    </div>
                    <div className="flavor-item">
                        <img src={'../Fompage/cho.png'} className={'fom-flavor-img'} alt="초콜릿"/>
                        <p>초콜릿</p>
                    </div>
                    <div className="flavor-item">
                        <img src={'../Fompage/chop.png'} className={'fom-flavor-img'} alt="초코 프레첼"/>
                        <p>초코 프레첼</p>
                    </div>
                </div>
                <div>
                    <img src={'../Fompage/flavermain.jpg'} className={'flavor-main-img'}/>
                </div>
            </div>

            <div className="new-products">
                <h4 className={'text-start flavor-new-h4'}>이달의 신제품</h4>
                <div className="product-grid">
                    <div className="product-item">
                        <img src={'../Fompage/product1.png'} className={'product-img'} alt="우석이도 외계인"/>
                        <p>우석이도 외계인</p>
                    </div>
                    <div className="product-item">
                        <img src={'../Fompage/product2.png'} className={'product-img'}
                             alt="우석이도 외계인 마카롱"/>
                        <p>우석이도 외계인 마카롱</p>
                    </div>
                    <div className="product-item">
                        <img src={'../Fompage/product3.png'} className={'product-img'}
                             alt="우석이도 외계인 선데"/>
                        <p>우석이도 외계인 선데</p>
                    </div>
                    <div className="product-item">
                        <img src={'../Fompage/product4.png'} className={'product-img'}
                             alt="블록팩 우석이도외계인"/>
                        <p>블록팩 우석이도외계인</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThisMonthTaste;
