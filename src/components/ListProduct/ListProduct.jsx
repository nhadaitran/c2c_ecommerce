import React from 'react';
import Header from './Header/Header';
import { Paper } from '@material-ui/core';
import useStyle from './Style';
import List from './List/List';
const ListProduct = () => {
    const classes = useStyle();
    return (
        <>
            <Paper className={classes.paper}>
                <Header />
            </Paper>
            <Paper className={classes.paper}>
                <List />
            </Paper>

        </>
    )
}

export default ListProduct;
