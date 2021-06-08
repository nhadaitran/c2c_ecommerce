import React from 'react';
import Title from './Title/Title';
import FormAdd from './FormAdd/FormAdd';
import { Card, Grid, Paper } from '@material-ui/core';
import useStyle from './Style';
import Image from './Image/Image';

export const AddProduct = () => {
   const classes=useStyle();
    return (
        <>
            <Paper className={classes.paper} >
                <Title />
            </Paper>
            <Paper className={classes.paper}>
                <FormAdd />
                <Image/>             
            </Paper>

        </>
    )
}
export default AddProduct;
