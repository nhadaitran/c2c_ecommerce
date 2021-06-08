import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Single from './SingleTopic/Single';

const Highlight = () => {    
    return (
        <div>
            <Typography variant="h5" gutterBottom>Tin tức </Typography> 
            <Single/>
            <Single/>
            <Single/>            
            <Single/>
            <Grid container direction="column" xs={12} alignItems="center" style={{margin:'10px'}}>
                <Pagination count={8} shape="rounded"  color="primary"  />
            </Grid>
        </div>
    )
}

export default Highlight
