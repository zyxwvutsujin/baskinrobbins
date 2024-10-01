
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Slick.css"
import MainPromotionComponent from "../com/MainPromotionComponent.jsx";


function MainPromotion(props) {
    const promotionItems = [
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/e5787e074c04a42fd808f72d94b090a6.png',
            title: '우석이 디지털 굿즈 4차',
            date: '2024-09-25 ~ 2024-10-01'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/5a41d373649a7bfcd77130e066fca78b.png',
            title: '스윗 테라피',
            date: '2024-09-26 ~ 2024-09-30'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/b76dc1736963cfe2c4ba3b8235e1886e.png',
            title: '지금 배라에서 우석이 포근 블랭킷을 만나보세요!',
            date: '2024-09-25 ~ 소진 시까지'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/6112f167c63f6d7f55590f23105ac97a.png',
            title: '쿼터 이상 구매 시, 우석이 포토카드 SET 600원',
            date: '2024-09-13 ~ 소진 시까지'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/1390d367df582eb30144b9653d1367b9.png',
            title: '우석이와 배라샷 인증샷 EVENT',
            date: '2024-09-23 ~ 2024-10-30'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/0194175d9b9981e2be9b768ea5eb5e15.jpg',
            title: '이달의 맛 이벤트',
            date: '2024-09-01 ~ 2024-09-26'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/71817c0bf7dc2ef6e4730f3930525280.png',
            title: '배라 등신대 인증샷',
            date: '2024-08-30 ~ 2024-09-30'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/090b435e703e9afa05a0b00ad00a7b07.png',
            title: '워크샵 by 배스킨라빈스',
            date: '상시 운영'
        },
        {
            img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/388539cae1fd5d2f219392ad712b21ff.png',
            title: '1회용 컵 사용 줄이기 안내',
            date: '상시 운영'
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
        slidesToShow: 5,
        slidesToScroll: 5,
        dotsClass: 'dots_custom'
    };
    return (
        <section>
            <div className={'sectionTitle'}>
                <span className={'mainTitle'}>{props.title}</span>
                <span className={'text-muted'}>{props.subTitle}</span>
            </div>
            <div className={'container'}>
                <Slider {...setting}>
                    {promotionItems.map((promo, index) => (
                        <MainPromotionComponent
                            key={index}
                            img={promo.img}
                            title={promo.title}
                            date={promo.date}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
}
export default MainPromotion;
