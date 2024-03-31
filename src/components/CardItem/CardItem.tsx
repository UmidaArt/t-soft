import React from 'react';
import styles from "./CardItem.module.css";

const CardItem = () => {
    return (
        <div className={styles.cardsBlock}>
            <div className={styles.cardItem}>
                <img/>
                <h5>Electronics</h5>
            </div>
            <div className={styles.cardItem}>
                <img/>
                <h5>Clothes</h5>
            </div>
            <div className={styles.cardItem}>
                <img/>
                <h5>Shoes</h5>
            </div>
            <div className={styles.cardItem}>
                <img/>
                <h5>Miscellaneous</h5>
            </div>
            <div className={styles.cardItem}>
                <img/>
                <h5>Nueva categoria</h5>
            </div>

        </div>
    );
};

export default CardItem;