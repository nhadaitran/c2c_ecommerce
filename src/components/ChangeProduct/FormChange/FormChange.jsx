import React from 'react';
import { TextField,Select, Grid,TextareaAutosize,Button,Typography,Link } from '@material-ui/core';
import {CloudDownload} from '@material-ui/icons';
import useStyle from './Style';

const FormChange = () => {
    const classes=useStyle();
    return (
        <div style={{ padding: 20,float:'left' }}>
            <Grid className={classes.form} container xs={6}  direction="row" spacing={1} >
                <Grid container item xs={12} spacing={1}>
                    <Grid item  xs={6}>
                        <select  className={classes.select} >          
                            <option className={classes.option}   > Danh mục sản phẩm</option>
                            <option className={classes.option} value="phone">Điện thoại</option> 
                            <option className={classes.option} value="phone">Tivi</option>         
                        </select>
                    </Grid>
                    <Grid item xs={6}>
                        <select  className={classes.select} >          
                            <option className={classes.option}>Khu vực</option>
                            <option className={classes.option} value="1">Quận 1</option>    
                            <option className={classes.option} value="2">Quận 2</option>    
                            <option className={classes.option} value="3">Quận 3</option>    
                            <option className={classes.option} value="4">Quận 4</option>      
                        </select>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <input className={classes.nameproduct} type="text" placeholder='Tên sản phẩm(Tối đa 100 kí tự)' fullWidth />
                </Grid>
                <Grid container item xs={12}>
                    <TextareaAutosize className={classes.description} cols="20" rows="10" placeholder="Mô tả sản phẩm"/>
                </Grid>
                <Grid container item xs={12}>
                    <input className={classes.price} type="number" min="0" step="10000" placeholder='Giá bán lẻ đề xuất' fullWidth />
                </Grid>
                <Grid  className={classes.upfile} container item xs={12}>
                    <Grid item xs={12}> 
                        <Typography>  <CloudDownload />    </Typography>    
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.buttonchoose}>{'Chọn file để tải lên'}</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography> Hoặc kéo thả file vào đây</Typography>   
                    </Grid>     
                </Grid>
                <Grid container item xs={12}>
                    <Grid  item xs={12}>
                        <Button className={classes.post}>Cập nhật</Button>
                    </Grid>
                    <Grid  item xs={12}>
                        <Button className={classes.cancel}>Hủy</Button>
                    </Grid>
                </Grid>   
            </Grid>  
        </div>
    )
}

export default FormChange;
