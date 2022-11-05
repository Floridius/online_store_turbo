function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/heart.svg" alt="Unliked" />
            </div>

            <img width={133} height={112} src="/img/wrappers/0001.jpg" alt="вкладыш" />
            <h5>Вкладыш из серии 51-120</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>1299 руб.</b>
                </div>
                <button className="button">
                    <img width={16} height={16} src="/img/plus.svg" alt="plus"></img>
                </button>
            </div>
        </div>

    );
}

export default Card;