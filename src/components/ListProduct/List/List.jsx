import React,{useState,useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { commerce } from '../../../lib/commerce';
import Products from '../../Products/Products';
const List = () => {    
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();        
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const [cart,setFav] = useState({});     

    const handleAddToFav = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId,quantity)

        setFav(cart);
    };
    return (
        <>
            <Grid  container direction="column" justify="center" alignItems="center" xs={12}>
                <Grid item>
                <Products products={products} onAddToFav={handleAddToFav } />
                </Grid>
                <Grid item xs={6}  >
                    <Pagination  color="primary" count={10} shape="rounded" />
                </Grid>
            </Grid>
        </>
    )
}

export default List;
