import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from "./EmptyBasket.module.css"

const EmptyBasket = () => {
    return (
        <div className={styles.contianer}>
            <div>Want to buy?</div>
            <Link to="/products">Go to shop</Link>
        </div>
    );
};

export default EmptyBasket;