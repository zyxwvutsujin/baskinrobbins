import Slider from "react-slick";
import "../../../styles/Slick.css"
import MainNewComponent from "../com/MainNewComponent.jsx";


function MainNewItem(props) {
    const newItems = [
        {
            mainImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/d82c69496023a46687b3b29e5a6ed086.png',
            subOneImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/730ef323a8c021285fd3730062eafc64.png',
            subOneTxt: '우석이도 외계인\n마카롱',
            subOneColor: '#add7eb',
            subTwoImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/fe37476d2c8b617ce0904f72e7409e79.png',
            subTwoTxt: '바삭 민트초코\n블라스트',
            subTwoColor: '#936a4b',
            subThreeImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/f91d196857ac94d8f12d1ec277cb6f12.png',
            subThreeTxt: '우석이도 외계인 선데',
            subThreeColor: '#ace0fd',
            subFourImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/ffae1c06bb85e6b255f92bd5cab31237.png',
            subFourTxt: '블록팩\n우석이도외계인',
            subFourColor: '#82c3f7',
        },
        {
            mainImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/e976b9ae284311e576864138406e14f3.png',
            subOneImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/b1490783d8e3a3edfbd98ee615f26533.png',
            subOneTxt: '바삭 두바이 스타일\n초코 블라스트',
            subOneColor: '#a87057',
            subTwoImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/b84fac6ab759a38809dc55e8196069e9.png',
            subTwoTxt: '두바이스타일 초코\n케이크',
            subTwoColor: '#a87057',
            subThreeImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/2c6ce188c6a91cd739cb81a2a2a0bf50.png',
            subThreeTxt: '마이멜로디 스틱바\n딸기 요거트',
            subThreeColor: '#b07585',
            subFourImg: 'https://www.baskinrobbins.co.kr/upload/main/newitems/ca42536c272f5bef2dea90cad177d5a9.png',
            subFourTxt: '쿠로미 스틱바\n블랙소르베 제로',
            subFourColor: '#7e5194',
        }
    ];
    const setting = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        vertical: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'dots_custom'
    };
    return (
        <section className={'mainPinkPage'}>
            <div className={'sectionTitle'}>
                <span className={'mainTitle'}>{props.title}</span>
                <span className={'text-muted'}>{props.subTitle}</span>
            </div>
            <div className={'container'}>
                <Slider {...setting}>
                    {newItems.map((item, index) => (
                        <MainNewComponent
                            key={index}
                            mainImg={item.mainImg}
                            subOneImg={item.subOneImg}
                            subOneTxt={item.subOneTxt}
                            subOneColor={item.subOneColor}
                            subTwoImg={item.subTwoImg}
                            subTwoTxt={item.subTwoTxt}
                            subTwoColor={item.subTwoColor}
                            subThreeImg={item.subThreeImg}
                            subThreeTxt={item.subThreeTxt}
                            subThreeColor={item.subThreeColor}
                            subFourImg={item.subFourImg}
                            subFourTxt={item.subFourTxt}
                            subFourColor={item.subFourColor}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default MainNewItem;