import React , { useContext, useEffect } from 'react';

import { Routes , Route , Navigate } from 'react-router-dom';

// Context
import { cartContext } from './context/CartContextProvider';

// Components
import Navbar from './components/shared/Navbar';
import Cart from './components/Cart';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

const Landing = () => {

    const { dispatch } = useContext(cartContext)

    useEffect(() => {
        dispatch({type: "GET_LOCALSTORAGE"})
    } , [dispatch])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/cart' element={<Cart /> } />
                <Route path='/products' element={<Store /> } />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/' element={<Navigate to="/products" />} />
            </Routes>
        </>
    );
};

export default Landing;