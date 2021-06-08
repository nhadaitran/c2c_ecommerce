import React from 'react'
import { Typography } from '@material-ui/core';

import UseStyle from './style';

const rightInfo = () => {
    const classes = UseStyle();

    return (
        <div className={classes.container}>
            <div className={classes.productInfo}>
                <Typography variant='h6' style={{fontWeight: 'bold'}}> iPhone Replica 1:1 </Typography>
            </div>
            <div className={classes.info}>
                <div>
                    <Typography variant='subtitle2'> Giá tiền: </Typography>
                    <Typography variant='subtitle2' style={{ marginTop:'30px'}}> Vận chuyển: </Typography>
                </div>
                <div>
                    <Typography variant='subtitle2' style={{float: 'right', color: 'red'}}> 3.200.000đ </Typography>
                    <Typography variant='subtitle2' style={{ marginTop:'50px'}}> Người bán vận chuyển </Typography>
                </div>
            </div>
            <div className={classes.total}>
                <div>
                    <Typography style={{fontWeight: 'bold'}}> Tổng tiền: </Typography>
                </div>
                <div>
                    <Typography style={{float: 'right', color: 'red'}}> 3.200.000đ </Typography>
                </div>
            </div>
        </div>
    )
}

export default rightInfo
