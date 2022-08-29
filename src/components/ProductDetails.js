import React , { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Context
import { productsContext } from '../context/ProductsContextProvider';

// Styles
import styles from "./ProductDetails.module.css"

const ProductDetails = () => {
    const params = useParams()
    
    const productId = params.id

    const  products  = useContext(productsContext)

    const mainProduct = products.find(product => product.id === +productId)

    const { image , title , description , price , category } = mainProduct

    return (
        <div className={`${styles.container} container`}>
            <div className='row mx-2'>
                <div className='col-12 col-lg-6'>
                    <img src={image} alt="prodcut" />
                </div>
                <div className='col-12 col-lg-6 mt-5 mt-lg-0'>
                    <div className={`${styles.details}`}>
                        <h3 className={styles.title}>{title}</h3>
                        <p>{description} {description}</p>
                        <p className='mt-2'><span className={styles.category}>Category: </span>{category}</p>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <span className={styles.price}>{price}$</span>
                            <Link className={styles.link} to="/products">Back to Shop</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;