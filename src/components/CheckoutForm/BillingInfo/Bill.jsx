import React from 'react'
import { Typography,Radio,RadioGroup,FormControlLabel, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import Adress from './adress';
import Saveinfo from './saveinfo';
import Textbox from './textbox';

import UseStyle from './style'

export default function Bill() {
    const classes = UseStyle();
    const [value, setValue] = React.useState('khi nhận hàng');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.tittle}>
                <div>
                    <Typography variant='h5'> Thông tin <ArrowForwardIosIcon style={{ fontSize: 18 }}/> </Typography>
                </div>
                <div>
                    <Typography variant='h5' style={{ color: '#3d36fc' }}> Thanh toán </Typography>
                </div>
            </div>

            <div className={classes.info}>
                <Typography variant='h6'> Địa chỉ: 18 Cao Lỗ, Phường 4, Quận 8, TP. HCM </Typography>
                <Typography variant='h6'> Vận chuyển: Người bán vận chuyển </Typography>
            </div>
            <div>
                <Typography variant='h6'> Phương thức thanh toán </Typography>
                <RadioGroup aria-label="thanhtoan" name="thanhtoan" value={value} onChange={handleChange}>
                    <FormControlLabel value="" control={<Radio />} label="Thanh toán khi nhận hàng" />
                    <div>
                        <FormControlLabel value="Thẻ" control={<Radio />} label="Thanh toán bằng thẻ" />
                        <CreditCardIcon /> 
                    </div>
                </RadioGroup>
            </div>
            <div><Textbox /></div> 
            <div><Adress /></div>
            <div><Saveinfo /></div>
            <div className={classes.button}>
                <Button variant="contained" 
                        style={{ backgroundColor: '#4525f2', width: '60%', height: '40px', borderRadius: '20px' }}>
                    <Typography style={{ color:'#f1effe', fontWeight:'bold', textDecoration:'none' }} component={Link} to ='/success'> Tiếp tục </Typography>
                </Button>
                <Button variant="contained" 
                        style={{ backgroundColor: '#f22555', width: '20%', borderRadius: '20px', marginLeft: '10%' }}>
                    <Typography style={{ color:'#f1effe', fontWeight:'bold', textDecoration:'none' }} component={Link} to ='/checkout'> Quay lại </Typography>
                </Button>
            </div>
        </div>  
    )
}
