import React, { useEffect } from 'react'
import styles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }


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
                <img 
                className={styles.plus} 
                onClick={onClickPlus} 
                src={isAdded ? "/img/plus-fill.svg" : "/img/plus.svg"} 
                alt="plus"></img>
            </div>
        </div>

    );
}

export default Card;