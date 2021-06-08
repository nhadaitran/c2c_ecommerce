import React from 'react'
import { Typography } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import faker from 'faker';
import UseStyle from './style';

const leftInfo = () => {
    const classes = UseStyle();
    var faker = require('faker/locale/vi');
    return (
        <>  
            <div className={classes.content}>
                <div className={classes.topContent}>
                    <div><CheckCircleRoundedIcon style={{ fontSize: 50 }}/></div>
                    <div>
                        <Typography variant='subtitle2'>Order {faker.datatype.number()}</Typography>
                        <Typography variant='h8' style={{fontWeight: 'bold'}}>Thank you, Mr/Mrs {faker.name.lastName()}!</Typography>
                        <Typography variant='body2' >Hóa đơn của bạn đã được giao cho người bán.</Typography>
                    </div>
                </div> 
            </div>
            <div className={classes.info}>
                <Typography variant='h6' style={{fontWeight: 'bold'}}> Thông tin hóa đơn </Typography>
                <Typography variant='h6' style={{ marginTop:'20px'}}> Họ và tên người nhận: {faker.name.findName()}</Typography>
                <Typography variant='h6'> Vận chuyển: vận chuyển bởi người bán</Typography>
                <Typography variant='h6'> Phương thức thanh toán: thanh toán khi nhận hàng</Typography>
                <Typography variant='h6'> Địa chỉ: 18 Cao Lỗ, Phường 4, Quận 8, TP HCM</Typography>
                <Typography variant='h6'> Số điện thoại: {faker.phone.phoneNumber()}</Typography>
            </div>
        </>
    )
}

export default leftInfo