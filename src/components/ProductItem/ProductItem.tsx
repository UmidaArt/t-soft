import React from 'react';
import styles from "./ProductItem.module.css";

// @ts-ignore
const ProductItem = ({productItem}) => {
    return (
        <div>
            <div className={styles.productsItem}>{productItem.title}</div>
        </div>
    );
};

export default ProductItem;