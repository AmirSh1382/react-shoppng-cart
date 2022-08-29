import React , { useContext } from 'react';

import { Link } from 'react-router-dom';

// Context
import { cartContext } from '../../context/CartContextProvider';

// Styles
import styles from "./Navbar.module.css"

const Navbar = () => {

    const { state } = useContext(cartContext)

    return (
        <nav className={`${styles.navbar} shadow`}>
            <Link to="/products">Products</Link>

            <Link to="/cart" className={styles.cartIcon}>
                <i className="bi bi-cart3"></i>
                <span>{state.itemsCounter}</span>
            </Link>
        </nav>
    );
};

export default Navbar;