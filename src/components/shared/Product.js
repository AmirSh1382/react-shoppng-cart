import React , { useContext } from 'react';

import { Link } from "react-router-dom"

// Fucntoins
import { shorten , isInCart , quantityCounter } from '../../helper/fucntions';

// Context 
import { cartContext } from '../../context/CartContextProvider';

// Styles
import styles from "./Product.module.css"

const Product = ({productData}) => {
    const { state , dispatch } = useContext(cartContext)

    const { image , title , price } = productData

    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center'>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt='product'/>
                <div className='mt-4'>
                    <h3 className={styles.title}>{shorten(title)}</h3>
                    <p>{price}$</p>
                    <div className={styles.btnsContainer}>
                        <Link to={`/products/${productData.id}`}>Details</Link>
                        <div>
                            {quantityCounter(state, productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><i className="bi bi-trash"></i></button>} 
                            {quantityCounter(state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: productData})}><i className="bi bi-dash"></i></button>}
                            {quantityCounter(state, productData.id) && <span>{quantityCounter(state, productData.id)}</span>}
                            {
                                isInCart(state , productData.id) ? 
                                <button onClick={() => dispatch({type: "INCREASE", payload: productData})}><i className="bi bi-plus"></i></button>:
                                <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>add to cart</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;