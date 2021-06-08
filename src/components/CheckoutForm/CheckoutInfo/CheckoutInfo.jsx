import React from 'react';
import useStyles from './styles';
import {Grid} from '@material-ui/core';
import Info from '../Infomation/info';
import RightSide from '../Invoice/rightInfo/rightInfo'



const CheckoutInfo = () => {
const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.leftSide}>
            <Info />
            </Grid>

            <Grid item className={classes.rightSide}>
            <RightSide />
            </Grid>
        </Grid>
    )
}

export default CheckoutInfo
