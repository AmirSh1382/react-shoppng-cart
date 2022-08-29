import React , { useContext } from 'react';

// Context
import { cartContext } from '../../context/CartContextProvider';

// Styles
import styles from "./Total.module.css"

const Total = () => {

    const { state , dispatch } = useContext(cartContext)

    return (
        <div className={styles.container}>
            <div><span>Total Items:</span> {state.itemsCounter}</div>
            <div><span>Total Payments:</span> {state.total}$</div>
            <div className='d-flex align-items-center justify-content-between mt-5 mb-2'>
                <button className={styles.clearBtn} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                <button className={styles.checkOutBtn} onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
            </div>
        </div>
    );
};

export default Total;