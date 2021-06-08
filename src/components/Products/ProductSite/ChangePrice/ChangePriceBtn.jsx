import React from 'react';
import {Card, CardContent, Typography, TextField, IconButton} from '@material-ui/core';
import {Check} from '@material-ui/icons';
import useStyles from './styles';

const ChangePriceBtn = () => {
    const classes = useStyles();
    return (        
        <Card className={classes.root} elevation={0}>
            <CardContent variant="elevation">
                <Typography variant="h5" gutterBottom color="primary">
                    Vui lòng nhập mức giá mong muốn:
                </Typography>
                        <TextField type="price" placeholder="0-10%"></TextField>
                        <IconButton color="secondary"><Check/></IconButton>
            </CardContent>  
        </Card>              
    )
}

export default ChangePriceBtn
