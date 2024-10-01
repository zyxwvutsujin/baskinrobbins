import MainBetterComponent from "../com/MainBetterComponent.jsx";

function MainBetter(props) {
    const betterItems = [
        {img : 'https://www.baskinrobbins.co.kr/assets/images/main/img_farm.png',
            title: '핑크팜 캠페인',
            subTitle: '지역 농가 상생 프로젝트',
            color: '#937144'},
        {img : 'https://www.baskinrobbins.co.kr/assets/images/main/img_dream.png',
            title: '핑크드림 캠페인',
            subTitle: '청소년 자립 지원 프로젝트',
            color: '#fb565a'},
        {img : 'https://www.baskinrobbins.co.kr/assets/images/main/img_link.png',
            title: '핑크링크 캠페인',
            subTitle: '중소 기업 콜라보 프로젝트',
            color: '#009f31'}
    ]
    return (
        <section className={'mainBetterPage'}>
            <div className={'sectionTitle'}>
                <span className={'mainTitle'}>{props.title}</span>
                <span className={'text-muted'}>{props.subTitle}</span>
            </div>
            <div className={'mainBetterItem'}>
                {betterItems.map((item, index) => (
                    <MainBetterComponent key={index} img={item.img} title={item.title} subTitle={item.subTitle}
                                         color={item.color}
                    />
                ))}
            </div>
        </section>
    );
}

export default MainBetter;