import React from 'react'
import {IconButton, Typography, Grid, Card} from '@material-ui/core';
import {AirplanemodeActiveRounded, AdbRounded,AttachFileRounded,FreeBreakfastRounded, PhotoCameraRounded} from '@material-ui/icons';

import UseStyle from './styles';

const Category = () => {
    const classes = UseStyle();

    return (        
            <Card className={classes.root} >
            <Typography variant="h4" className={classes.tittle}> Danh mục sản phẩm </Typography>
                    <Grid className={classes.container} container spacing={1} >
                        
                            <Grid item >
                            <IconButton> <PhotoCameraRounded fontSize="large"/></IconButton>
                                <Typography className={classes.infoicons}>Category Name</Typography>
                            </Grid>
                            
                            
                            <Grid item>
                            <IconButton> <FreeBreakfastRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>Category Name</Typography>
                            </Grid >
                            
                            
                            <Grid item >
                            <IconButton>  <FreeBreakfastRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>Category Name</Typography>
                            </Grid>
                            
                            <Grid item>
                            <IconButton>     <AttachFileRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>Category Name</Typography>
                            </Grid>
                            
                            <Grid item>
                            <IconButton>    <AdbRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>Category Name</Typography>
                            </Grid>                            
                            
                            <Grid item>
                            <IconButton><AirplanemodeActiveRounded fontSize="large" /></IconButton>
                                <Typography className={classes.infoicons}>Category Name</Typography>
                            </Grid>                        
                    </Grid>
            </Card>        
    )
}

export default Category
