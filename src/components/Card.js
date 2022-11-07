function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart.svg" alt="Unliked" />
            </div>

            <img width={133} height={112} src={props.imageUrl} alt="вкладыш" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{props.price} руб</b>
                </div>
                <button className="button">
                    <img width={16} height={16} src="/img/plus.svg" alt="plus"></img>
                </button>
            </div>
        </div>

    );
}

export default Card;