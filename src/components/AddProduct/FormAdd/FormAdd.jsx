import React from 'react';
import { TextField,Select, Grid,TextareaAutosize,Button,Typography,Link } from '@material-ui/core';
import {CloudDownload} from '@material-ui/icons';
import useStyle from './Style';

const FormAdd = () => {
    const classes = useStyle();
    return (
        <>
            <Grid  className={classes.contentleft}>
                <form action="" method="post">
                <table className={classes.form}>
                    <tr>
                        <td>
                            <select  className={classes.select} >          
                                <option className={classes.option}   > Danh mục sản phẩm</option>
                                <option className={classes.option} value="phone">Điện thoại</option> 
                                <option className={classes.option} value="phone">Tivi</option>         
                            </select>
                        </td>
                        <td> 
                            <select  className={classes.select} >          
                                <option className={classes.option}>Khu vực</option>
                                <option className={classes.option} value="1">Quận 1</option>    
                                <option className={classes.option} value="2">Quận 2</option>    
                                <option className={classes.option} value="3">Quận 3</option>    
                                <option className={classes.option} value="4">Quận 4</option>      
                            </select>
                        </td>
                    </tr>

                    <tr >     
                        <td colspan="2">
                            <input className={classes.nameproduct} type="text" placeholder='Tên sản phẩm(Tối đa 100 kí tự)' fullWidth />
                        </td>                                                             
                    </tr>

                    <tr>
                        <td colspan="2">
                            <TextareaAutosize className={classes.description} cols="30" rows="10" placeholder="Mô tả sản phẩm"/>

                        </td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            <input className={classes.price} type="number" min="0" step="10000" placeholder='Giá bán lẻ đề xuất' fullWidth />
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" >
                            <Grid className={classes.upfile}>
                                <Typography>  <CloudDownload />    </Typography>           
                                <Button className={classes.buttonchoose}>{'Chọn file để tải lên'}</Button>
                                <Typography> Hoặc kéo thả file vào đây</Typography>   
                            </Grid>          
                        </td>                                  
                    </tr>  
                    <tr>
                        <td colspan="2">
                            <input type="radio"/>Đăng ký quản cáo sản phẩm(5$/month)<Link href="#" component="button" variant="body2">Xem thêm</Link>
                        </td>
                    </tr> 
                    <tr >
                        <td colspan="2">
                            <Button className={classes.post}>Đăng tin</Button>
                        </td>
                    </tr>    
                    <tr >
                        <td colspan="2">
                            <Button className={classes.cancel}>Hủy</Button>
                        </td>
                    </tr>        
                </table>
                </form>
            </Grid> 
            
        </>
    )
}

export default FormAdd;
