import React from 'react'
import { Typography } from '@material-ui/core';

import { useState, useEffect } from 'react';
import Products from '../../Products/Products';
import { commerce } from '../../../lib/commerce';
import useStyle from './Style';

export const SellProducts = () => {
    const classes = useStyle();
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <>
            <Typography variant="h5" className={classes.titleName}>Sản phẩm đang bán ({8})</Typography>
            <Products products={products} />
        </>

    )
}
export default SellProducts;