import React from 'react'
import { Paper, Avatar, Typography, Button, Table, IconButton, Grid } from '@material-ui/core';
import { Message, Star, CalendarToday, Room, Feedback, Phone, VisibilityOff, Settings, PostAdd } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import useStyle from './Style';
import faker from 'faker';
export const Personalinformation = () => {
    const classes = useStyle();
    var faker = require ('faker/locale/vi');
    return (
        <Grid container spacing={0}   xs={12}>
            <Grid item spacing={0}   xs={2}>            
                <Avatar alt="avatar" className={classes.avatar}  src={faker.image.avatar()}/>
            </Grid> 
            <Grid   xs={4}>                
            <Paper className={classes.paper} elevation={0}>
                <Typography className={classes.name} variant="h4">{faker.internet.userName()}</Typography>                
                <Paper className={classes.paperTitle} elevation={0}>
                <Link href="#" style={{textDecoration:'none'}}>{faker.datatype.number()} Theo Dõi</Link>
                <Link href="#" style={{textDecoration:'none'}}>{faker.datatype.number()} Đang Theo Dõi</Link>                
                </Paper>

             <Button className={classes.button} variant="contained" color="primary" component ={Link} to='/messages'><Message  />Tin Nhắn</Button>
            <Button className={classes.button} variant="contained" color="secondary" component ={Link} to='/addproduct'><PostAdd />Đăng Tin</Button>
            </Paper>
            </Grid>
        <Grid xs={6}>
            <Paper className={classes.right} elevation={2}>
                <Table className={classes.table} >
                    <tr>
                        <td className={classes.titleRight}><Star /></td>
                        <td className={classes.titleRight}>Đánh Giá</td>
                            <td >
                                <Star style={{ fontSize: 'medium', color: 'white'}} />
                                <Star style={{ fontSize: 'medium', color: 'white' }} />
                                <Star style={{ fontSize: 'medium', color: 'white' }} />
                                <Star style={{ fontSize: 'medium', color: 'white' }} />
                                <Star style={{ fontSize: 'medium', color: 'white' }} />
                            </td>
                        <td >
                            <IconButton aria-label="Setting" ><Settings className={classes.icon} /></IconButton>
                        </td>
                    </tr>

                    <tr className={classes.titleRight}>
                        <td ><CalendarToday /></td>
                        <td >Ngày Tham Gia:</td>
                        <td> {faker.date.past().toLocaleString()} </td>
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

