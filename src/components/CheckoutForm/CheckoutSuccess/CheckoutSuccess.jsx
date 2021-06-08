import React from 'react';
import useStyles from './styles';
import {Grid} from '@material-ui/core';
import LeftInfo from '../Invoice/leftInfo/leftInfo';
import RightSide from '../Invoice/rightInfo/rightInfo';



const CheckoutSuccess = () => {
const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.leftSide}>
            <LeftInfo />
            </Grid>

            <Grid item className={classes.rightSide}>
            <RightSide />
            </Grid>            
        </Grid>
    )
}

export default CheckoutSuccess
