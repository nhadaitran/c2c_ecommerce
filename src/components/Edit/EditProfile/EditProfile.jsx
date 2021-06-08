import React from 'react'
import { Typography, Grid, Paper, Avatar, TextField, Button} from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import UseStyle from './style'

const EditProfile = () => {
    const classes = UseStyle();

    return (
        <div className={classes.contaier}>
            <div className={classes.tittle}>
                <Avatar alt="" src="/static/images/avatar/1.jpg" className={classes.large}/>
                <div>
                    <Typography variant='h5'> Họ Tên <ArrowForwardIosIcon style={{ fontSize: 18 }}/> </Typography>
                </div>
                <div>
                    <Typography variant='h5' style={{ color: '#3d36fc' }}> Hồ sơ của tôi </Typography>
                </div>
            </div>

            <div className={classes.info}>
                <Grid container spacing={0}>
                    {/* Cái này là phần information bên trái */}
                    <Grid item xs={7}>
                        <Paper className={classes.paper}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Họ và tên" variant="outlined" style={{backgroundColor: '#f2f4f8'}} />
                                <TextField id="outlined-basic" label="Tên cửa hàng" variant="outlined" style={{backgroundColor: '#f2f4f8'}} />
                            </form>

                            <div className={classes.button}>
                                <Button variant="contained" 
                                        style={{ backgroundColor: '#4525f2', width: '70%', height: '40px', borderRadius: '20px' }}>
                                    <Typography style={{ color:'#f1effe', fontWeight:'bold' }}> Cập nhật thông tin </Typography>
                                </Button>
                            </div>
                        </Paper>
                    </Grid>

                    {/* Cái này là phần Avatar nằm bên phải */}
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            <Avatar alt="" src="/static/images/avatar/1.jpg" className={classes.large}/>
                            <Typography variant='body2' style={{ color: '#3d36fc' }}> Chọn ảnh mới </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default EditProfile
