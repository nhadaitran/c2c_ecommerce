import React from 'react';
import { Grid, Button, Typography, Slider } from '@material-ui/core';
import useStyle from './Style';
import { ArrowForwardIos } from '@material-ui/icons';

const Header = () => {
    const classes = useStyle();
    return (
        <div>            
                <Grid className={classes.top} xs={15} container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid container direction="row" justify="flex-start" alignItems="center" >
                        <Grid item xs={0}><Button className={classes.topbutton} href="/" color="primary">Trang chủ</Button></Grid>
                        <Grid item xs={0} style={{ marginTop: '5px' }}><ArrowForwardIos /></Grid>
                        <Grid item xs={0}><Button className={classes.topbutton} href="#" color="primary">Tin tức</Button></Grid>
                    </Grid>
            </Grid>            
        </div>
    )
}

export default Header;
