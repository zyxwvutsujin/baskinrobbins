function SubCardComponent(props) {
    return (
        <div className={'card border-0 rounded-3 subCard'}>
            <img src={props.imgSrc} className={'card-img'} alt="sub-img"/>
            <div className={'card-body subCardBody'}>
                <span
                    className={'card-text'} style={{color: props.color}}
                    dangerouslySetInnerHTML={{ __html: props.text.replace(/\n/g, "<br />") }}
                />
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'} className={'btn bi-arrow-right rounded-circle text-white'}
                            style={{backgroundColor: props.color}}>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubCardComponent;