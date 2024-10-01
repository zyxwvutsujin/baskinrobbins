import SubCardComponent from "./SubCardComponent.jsx";

function MainNewComponent(props) {
    return (
        <div className={'mainNewItemGrid'}>
            <div className={'card border-0 rounded-3 mainImg'}>
                <img src={props.mainImg} className={'card-img'} alt="main-img"/>
            </div>
            <SubCardComponent imgSrc={props.subOneImg} text={props.subOneTxt} color={props.subOneColor} />
            <SubCardComponent imgSrc={props.subTwoImg} text={props.subTwoTxt} color={props.subTwoColor}/>
            <SubCardComponent imgSrc={props.subThreeImg} text={props.subThreeTxt} color={props.subThreeColor}/>
            <SubCardComponent imgSrc={props.subFourImg} text={props.subFourTxt} color={props.subFourColor}/>
        </div>
    );
}

export default MainNewComponent;
