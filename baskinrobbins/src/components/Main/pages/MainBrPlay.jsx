function MainBrPlay(props) {
    return (
        <section className={'mainPlayPage'}>
            <div className={'sectionTitle'}>
                <span className={'mainTitle'}>{props.title}</span>
                <span className={'text-muted'}>{props.subTitle}</span>
            </div>
            <div className={'d-flex gap-3'}>
                <img src={'https://www.baskinrobbins.co.kr/upload/main/brplay/38ec45e00b62db0f26e4ee90ce889841.png'}/>
                <img src={'https://www.baskinrobbins.co.kr/upload/main/brplay/99847b6c140916bfe27eceea5c2ed9dc.png'}/>
            </div>
        </section>
    );
}

export default MainBrPlay;