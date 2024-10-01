function MainBenefit2Component(props) {
    return (
        <div className={'mainStoreBox'}
             style={{backgroundImage: `url(${props.img})`, backgroundSize:"contain", backgroundRepeat:"no-repeat",
                 backgroundPosition:"center"}}>
            <div className={'d-flex align-items-center gap-3'}>
                <span className={'mainTitle'}>{props.title}</span>
                <span
                    className={'text-muted'}
                    dangerouslySetInnerHTML={{__html: props.text.replace(/\n/g, "<br />")}}
                />
            </div>
        </div>
    );
}

export default MainBenefit2Component;