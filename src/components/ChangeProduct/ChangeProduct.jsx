import React from 'react';
import Title from './Title/Title';
import {Paper} from '@material-ui/core';
import useStyle from './Style';
import FormChange from './FormChange/FormChange';
import Image from './Image/Image';

const ChangeProduct = () => {
    const classes=useStyle();
    return (
        <div>
            <Paper className={classes.paper}>
                <Title/>
            </Paper>
            <Paper className={classes.paper}>
                <FormChange/>
                <Image/>
            </Paper>
        </div>
    )
}

export default ChangeProduct
