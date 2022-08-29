import React , { useContext } from 'react';

// Styles
import styles from "./Cart.module.css"

// Context
import { cartContext } from '../context/CartContextProvider'; 

// Components
import CartItem from './shared/CartItem'; 
import Total from './shared/Total';
import CheckOut from './shared/CheckOut';
import EmptyBasket from './shared/EmptyBasket';

const Cart = () => {

  const { state } = useContext(cartContext)

    return (
        <div className={`${styles.container} container-fliod`}>
          <div className='row d-flex justify-content-center'>
            <div className='col-12 col-md-8 col-lg-7'>
              {
                state.selectedItems.map(item => <CartItem key={item.id} itemData={item} />)
              }
            </div>
            <div className='col-12 col-md-4 col-lg-3 text-center'>
              {state.itemsCounter > 0 && <Total />}
              {state.itemsCounter === 0 && state.checkout && <CheckOut />}
              {state.itemsCounter === 0 && !state.checkout && <EmptyBasket />}
            </div>
          </div>
        </div>
    );
};

export default Cart;