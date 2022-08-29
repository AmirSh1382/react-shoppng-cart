import React , { useContext } from 'react';

// Context
import { productsContext } from "../context/ProductsContextProvider"

// Components
import Product from './shared/Product';

// Styles
import styles from "./Store.module.css"

const Store = () => {

    const products = useContext(productsContext)

    return (
        <div className={`${styles.container} container`}>
            <div className='row'>
                {
                    products.map(product => <Product key={product.id} productData={product} />)
                }
            </div>
        </div>
    );
};

export default Store;