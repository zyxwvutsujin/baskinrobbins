function MainBetterComponent(props) {
    return (
        <div className={'card border-0 rounded-3 subCard'}>
            <img src={props.img} className={'card-img'} alt="sub-img"/>
            <div className={'card-body d-flex flex-column'}>
                <span className={'card-text fs-5 fw-bold'} style={{color: props.color}}>{props.title}</span>
                <span className={'card-text'}>
                    {props.subTitle}
                </span>
            </div>
        </div>
    );
}

export default MainBetterComponent;