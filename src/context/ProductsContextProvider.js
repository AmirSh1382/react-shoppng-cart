import React , { useEffect , useState } from 'react';

import getProducts from '../services/Api';

export const productsContext = React.createContext()

const ProductsContextProvider = ({children}) => {

    const [ products , setProducts ] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getProducts())
        }
 
        fetchApi()
    } , [])

    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;