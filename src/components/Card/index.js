import styles from './Card.module.scss';


function Card(props) {
    console.log(props);
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src="/img/heart.svg" alt="Unliked" />
            </div>

            <img width={133} height={112} src={props.imageUrl} alt="вкладыш" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{props.price} руб</b>
                </div>
                <button className="button" onClick={props.onPlus}>
                    <img width={16} height={16} src="/img/plus.svg" alt="plus"></img>
                </button>
            </div>
        </div>

    );
}

export default Card;