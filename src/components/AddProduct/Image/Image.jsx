import React from 'react';
import {Grid} from '@material-ui/core';
import useStyle from './Style';

const Image = () => {
    const classes=useStyle();    
    return (
        <Grid className={classes.contentright}/>
    )
}
export default Image;
