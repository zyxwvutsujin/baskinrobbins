import Slider from "react-slick";
import "../../../styles/Slick.css"
import MainBeBenefitComponent from "../com/MainBeBenefitComponent.jsx";
import MainBenefit2Component from "../com/MainBenefit2Component.jsx";

function MainBenefit(props) {
    const newItems = [
        {img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8a5d94cfdda901dd0385d4dbaa024ce4.jpg'},
        {img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/29d4d75e4737b7c0c7445586e4d48dee.jpg'},
        {img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/cd99fb2f46c76c61090adc4c446f29c0.png'},
        {img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/c9b25ee4553b2ecfc6da305bdc5de276.png'},
        {img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8b5648c719be9a733e7cdee3e85ea62d.png'},
        {img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/7d9526983466705ca23739ae162d76ee.jpg'},
        {img: 'https://www.baskinrobbins.co.kr/upload/promotion/event/8e5747a04cbeb6c854716c824d19ec27.png'},
    ]
    const bottomItems = [
        {
            title:'Store',
            text: '내 주변 가까운\n 배스킨라빈스 매장을 찾아보세요',
            img: 'https://www.baskinrobbins.co.kr/assets/images/main/img_store_map.png'
        },
        {
            title:'BR Way',
            text: '오랜 시간 우리 곁에 함께한\n 배스킨라빈스의 이야기',
            img: 'https://www.baskinrobbins.co.kr/assets/images/main/img_story_story.png'
        },
    ]

    const setting = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        vertical: false,
        pauseOnHover: true,
        speed: 800,
        centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        dotsClass: 'dots_custom'
    };
    return (
        <section>
            <div className={'sectionTitle'}>
                <span className={'mainTitle'}>{props.title}</span>
                <span className={'text-muted'}>{props.subTitle}</span>
            </div>
            <div className={'container-fluid mainBenefitItem'}>
                <Slider {...setting}>
                    {newItems.map((item, index) => (
                        <MainBeBenefitComponent
                            key={index}
                            img={item.img}
                        />
                    ))}
                </Slider>
            </div>
            <div className={'mainStoreLayout'}>
                {bottomItems.map((item, index) => (
                    <MainBenefit2Component
                        key={index}
                        img={item.img}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </section>
    );
}

export default MainBenefit;