import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import useStyle from './styles';
import Header from './HeaderNews/Header';
import Highlight from './HighlightsTopic/Highlight';
import Main from './MainTopic/Main';

const News = () => {
    const classes = useStyle();    
    return (
        <div>
            <Paper elevation={0} className={classes.paper}><Header/></Paper>
            <Paper elevation={0} className={classes.paper}>
                <Grid container spacing={0} elevation={0} justifyContent="space-between" >
                    <Grid item xs={8} elevation={0}>
                        <Main/>          
                    </Grid>
                    <Grid item xs={4} elevation={0}>
                        <Highlight/>
                    </Grid>
                </Grid>
            </Paper>                
        </div>
    )
}

export default News
