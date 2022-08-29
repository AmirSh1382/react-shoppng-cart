import React , { useContext } from 'react';

// Functions
import { shorten } from '../../helper/fucntions';

// Styles
import styles from "./CartItem.module.css"

// Context
import { cartContext } from '../../context/CartContextProvider';


const CartItem = ({itemData}) => {
    const { dispatch } = useContext(cartContext)

    const { image , title , price , quantity} = itemData
    
    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt="product"/>
            </div>
            <div>
                <div className={styles.title}>{shorten(title)}</div>
                <div className={styles.price}>{price}$</div>
            </div>
            <div>
                <div className={styles.quantity}>{quantity}</div>
            </div>
            <div className={styles.btnsContainer}>
                {
                    quantity === 1 ? 
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: itemData})}><i className="bi bi-trash"></i></button> :
                    <button onClick={() => dispatch({type: "DECREASE", payload: itemData})}><i className="bi bi-dash"></i></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: itemData})}><i className="bi bi-plus"></i></button>
            </div>
        </div>
    );
};

export default CartItem;