import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

import UseStyle from './style'
import TextBox from './textbox'
import Select from './select'



const info = () => {
    const classes = UseStyle();

    return (
        <div className={classes.contaier}>
            <div className={classes.tittle}>
                <Typography variant='h5' style={{ color: '#3d36fc', fontWeight: 'bold' }}> Thông tin </Typography>
            </div>
            <div style={{ marginTop: '5%' }}>
                <Typography variant='h6' style={{ fontWeight: 'bold' }}> Thông tin tài khoản </Typography>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{backgroundColor: '#f2f4f8'}} />
            </form> 

            <div style={{ marginTop: '10%' }}>
                <Typography variant='h6' style={{ fontWeight: 'bold' }}> Thông tin liên hệ </Typography>
            </div>

            <div><TextBox /></div>
            <div><Select /></div>
            <div className={classes.button}>
                <Button variant="contained" 
                        style={{ backgroundColor: '#4525f2', width: '60%', height: '30%', borderRadius: '20px' }}>
                    <Typography style={{ color:'#f1effe', fontWeight:'bold', textDecoration:'none' }} component={Link} to ='/billinfo'> Tiếp tục </Typography>
                </Button>
                <Button variant="contained" 
                        style={{ backgroundColor: '#f22555', width: '20%', borderRadius: '20px', marginLeft: '10%' }}>
                    <Typography style={{ color:'#f1effe', fontWeight:'bold', textDecoration:'none' }} component={Link} to ='/fav'> Hủy </Typography>
                </Button>
            </div>
        </div>
    )
}

export default info
