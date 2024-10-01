import MainPromotion from "./MainPromotion.jsx";
import MainNewItem from "./MainNewItem.jsx";
import MainBrPlay from "./MainBrPlay.jsx";
import MainBetter from "./MainBetter.jsx";
import MainBenefit from "./MainBenefit.jsx";
import Header from "../../Fompages/Header.jsx";
import Footer from "../../Fompages/Footer.jsx";

function Main() {
    return (
        <div>
            <header>
                <Header theme={'transNav'} />
            </header>
            <main className={'container-fluid p-0 m-0'}>
                <section className={'mainFirstPage'}>
                    <div className={'mainBanner container align-items-center justify-content-center'}>
                        <div className={'mainBannerBox'}>
                            <div className={'mainBannerTitle rounded-top-5'}>
                                <img src={'../backgroundlogo.png'} className={'img-fluid'}/>
                            </div>
                        </div>
                        <div className={'mainBannerImg'}>
                            <img
                                src={'https://www.baskinrobbins.co.kr/upload/main/banner/895087bb730c221b225623f29d8ef1a4.png'}
                                className={'img-fluid'}/>
                        </div>
                    </div>
                </section>
                <MainPromotion title={'Promotion'} subTitle={'배라의 다양한 혜택과 이벤트를 만나보세요'}/>
                <MainNewItem title={'New Item'} subTitle={'새로 나온 배라의 신제품을 소개합니다'}/>
                <MainBrPlay title={'BR Play'} subTitle={'배라와 함께한 당신의 다양한 의견을 듣습니다'}/>
                <MainBetter title={'BR Better'} subTitle={'배라가 사회와 함께 하는 방법, 가치 있는 같이'}/>
                <MainBenefit title={'BR Benefit'} subTitle={'배라와 함께 다양한 혜택을 즐기세요'}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Main;