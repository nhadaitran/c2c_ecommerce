import React from 'react'
import {IconButton, Typography, Grid} from '@material-ui/core';
import {AirplanemodeActiveRounded, AdbRounded,AttachFileRounded,FreeBreakfastRounded, PhotoCameraRounded} from '@material-ui/icons';
import faker from 'faker';

import UseStyle from './styles';

const Category = () => {
    const classes = UseStyle();
    var faker = require('faker/locale/vi');

    return (                               
                    <Grid className={classes.root} container spacing={10}>
                        
                            <Grid item >
                            <IconButton> <PhotoCameraRounded fontSize="large"/></IconButton>
                                <Typography className={classes.infoicons}>{faker.commerce.product()}</Typography>
                            </Grid>
                            
                            
                            <Grid item>
                            <IconButton> <FreeBreakfastRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>{faker.commerce.product()}</Typography>
                            </Grid >
                            
                            
                            <Grid item >
                            <IconButton>  <FreeBreakfastRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>{faker.commerce.product()}</Typography>
                            </Grid>
                            
                            <Grid item>
                            <IconButton>     <AttachFileRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>{faker.commerce.product()}</Typography>
                            </Grid>
                            
                            <Grid item>
                            <IconButton>    <AdbRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>{faker.commerce.product()}</Typography>
                            </Grid>                            
                            
                            <Grid item>
                            <IconButton><AirplanemodeActiveRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>{faker.commerce.product()}</Typography>
                            </Grid>                        
                    </Grid>
            
    )
}

export default Category
