import React from 'react';
import CardItem from "../CardItem/CardItem";
import styles from "./Categories.module.css"
const Categories = () => {
    return (
        <div className={styles.categories}>
            <h3>Categories</h3>
            <CardItem/>
        </div>
    );
};

export default Categories;