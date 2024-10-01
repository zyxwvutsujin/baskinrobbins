function MainPromotionComponent(props) {
    return (
        <div className="card promotionCard text-center border-0">
            <img src={props.img} className="card-img-top img-fluid" alt={props.title}/>
            <div className="card-body">
                <span className="card-text card-date">{props.date}</span>
                <hr className="card-border"/>
                <span className="card-description">{props.title}</span>
            </div>
        </div>
    );
}

export default MainPromotionComponent;