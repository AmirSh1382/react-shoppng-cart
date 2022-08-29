import React , { useContext } from 'react';
import { useNavigate } from "react-router-dom"

// Context
import { cartContext } from '../../context/CartContextProvider';

// styles
import styles from "./CheckOut.module.css"

const CheckOut = () => {
    const navigate = useNavigate()

    const { dispatch } = useContext(cartContext)

    const clickHandler = () => {
        dispatch({type: "CLEAR"})
        navigate("/products")
    }

    return (
        <div className={styles.container}>
            <div>Checked out successfully</div>
            <button onClick={clickHandler}>buy more</button>
        </div>
    );
};

export default CheckOut;