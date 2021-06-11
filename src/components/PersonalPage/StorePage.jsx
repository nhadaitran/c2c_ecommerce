import React from 'react';
import { Grid } from '@material-ui/core';
import useStyle from './Styles';

import StoreInfomation from './StoreInformation/StoreInformation';
import ProductsSold from './ProductsSold/ProductsSold';
import SellProducts from './SellProducts/SellProducts';
import ReviewEvaluation from './ReviewEvaluation/ReviewEvaluation';
export const StorePage = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.layout}>
            <Grid item className={classes.item}  >
                <StoreInfomation />
            </Grid >    
            <Grid item className={classes.itemSale}>
                <SellProducts />
            </Grid>

            <Grid item className={classes.itemSale}>
                <ProductsSold />
            </Grid>

            <Grid item spacing={1}   xs={12} className={classes.item}>
                <ReviewEvaluation />
            </Grid>
        </Grid>
    )
}
export default StorePage;
