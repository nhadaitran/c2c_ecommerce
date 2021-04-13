import React from 'react'
import { Paper, Avatar, Typography, Button, Table, Link, IconButton, Grid } from '@material-ui/core';
import { Message, Star, CalendarToday, Room, Feedback, Phone, VisibilityOff, Settings, PostAdd } from '@material-ui/icons';
import useStyle from './Style';
export const Personalinformation = () => {
    const classes = useStyle();
    return (
        <Grid container spacing={0}   xs={12}>
            <Grid item spacing={0}   xs={2}>            
                <Avatar alt="Remy Sharp" className={classes.avatar} src="data:image/jpeg;base64,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" />            
            </Grid> 
            <Grid   xs={3}>                
            <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.name} variant="h4">Tên Shop</Typography>                
                <Paper className={classes.paperTitle} elevation={0}>
                <Link href="#">0  Theo Dõi</Link>  
                <Link href="#">0  Đang Theo Dõi</Link>                
                </Paper>

             <Button className={classes.button} variant="contained" color="primary" ><Message style={{ color: 'white' }} />Tin Nhắn</Button>
            <Button className={classes.button} variant="contained" color="secondary" ><PostAdd style={{ color: 'white' }} />Đăng Tin</Button>
            </Paper>
            </Grid>
        <Grid xs={7}>
            <Paper className={classes.right} elevation={2}>
                <Table className={classes.table} >
                    <tr>
                        <td className={classes.titleRight}><Star /></td>
                        <td className={classes.titleRight}>Đánh Giá</td>
                        <td ><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /><Star style={{ fontSize: 'medium' }} /></td>
                        <td >
                            <IconButton aria-label="Setting" ><Settings className={classes.icon} /></IconButton>
                        </td>
                    </tr>

                    <tr className={classes.titleRight}>
                        <td ><CalendarToday /></td>
                        <td >Ngày Tham Gia:</td>
                        <td> 25/12/2012 </td>
                    </tr>

                    <tr className={classes.titleRight}>
                        <td ><Room /></td>
                        <td >Địa Chỉ:</td>
                        <td >180 Cao Lỗ,P4,Q8,Tp.Hồ Chí Minh</td>
                    </tr>
                    <tr className={classes.titleRight}>
                        <td ><Feedback /></td>
                        <td >Phản Hồi Chat:</td>
                        <td >Thường trả lời trong vòng 1 giờ</td>
                    </tr>

                    <tr className={classes.titleRight}>
                        <td  ><Phone /></td>
                        <td >Số Điện Thoại:</td>
                        <td>
                            <tr>
                                <td>0123xxx789 </td>
                                <td><IconButton><VisibilityOff className={classes.titleRight} /></IconButton></td>
                            </tr>
                        </td>
                    </tr>
                </Table>
            </Paper>
            </Grid>
            </Grid>
    )
}
export default Personalinformation;

