import React from 'react';
import useStyles from './styles';
import {Grid} from '@material-ui/core';
import Bill from '../BillingInfo/Bill';
import RightSide from '../Invoice/rightInfo/rightInfo'



const CheckoutMethod = () => {
const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.leftSide}>
            <Bill />
            </Grid>

            <Grid item className={classes.rightSide}>
            <RightSide />
            </Grid>            
        </Grid>
    )
}

export default CheckoutMethod
