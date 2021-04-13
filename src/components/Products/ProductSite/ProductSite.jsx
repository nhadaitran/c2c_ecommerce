import React from 'react';
import useStyles from './styles';
import {Typography, Grid, Button, Paper, Box, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {ArrowForward, PermIdentity, Star, StarHalf, StarOutline,Call,Chat, FavoriteBorder,AttachMoney,Receipt} from '@material-ui/icons';
import {LocalOffer,Storage,ColorLens,LocalShipping,BatteryUnknown,Computer} from '@material-ui/icons';
import Slideshow from '../../Slideshow/Slideshow';


const ProductSite = () => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>                
      <Grid container>
        <Grid item xs={7} >
        <Slideshow/>
        </Grid>

      <Grid item xs={5} >
          <Paper className={classes.paper} elevation={0} square>
            <Typography variant="h4"color="inherit">
                    Tên Shop
            </Typography>            
            
            <Button className={classes.storeButton} component={Link} to='/personalPage' size='small' type='button' variant='contained' color='primary' >                
                <Typography variant='inherit'>Xem thông tin </Typography><ArrowForward />                
            </Button>
          </Paper>
          <Paper className={classes.paper}elevation={0} square>
              <Grid container spacing= {0} justify="space-between" item >
            <Grid>
                <Typography variant='h6' color=''>
                    Cá nhân
                </Typography>
                <PermIdentity fontSize='medium' />
            </Grid>
            <Grid>
            <Typography variant='h6'>
                    Đánh giá
                </Typography>
                <Star fontSize='small' />
                <Star fontSize='small' />
                <Star fontSize='small' />
                <StarHalf fontSize='small' />
                <StarOutline fontSize='small' />
            </Grid>
            <Grid>            
            <Typography variant='h6'>
                    Phản hồi
                </Typography>
                <Typography variant='subtitle1'>
                    100%
                </Typography>
                </Grid>
            </Grid>
          </Paper>
          <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="90%" marginLeft="30px"/>
           <Paper className={classes.paperButton}  elevation={0} square>
           <Button variant="outlined" color="primary" size="medium" className={classes.button} >
                Liên hệ người bán<Call />
            </Button>            
            <Button variant="outlined" color="primary" size="medium" className={classes.button}>
                Nhắn tin người bán<Chat />
            </Button>            
          </Paper>
          <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="90%" marginLeft="30px"/>
          <Paper className={classes.paper} elevation={0} square>
            <Typography  variant="h5" color="inherit">
                    Tên Sản Phẩm
            </Typography>                       
          </Paper>
          <Paper className={classes.paper} elevation={0} square>
            <Typography variant="h6" color="error" >
                    Giá tiền
            </Typography>                        
            <IconButton size='small' type='button' variant='contained' ><FavoriteBorder color='error' /></IconButton>                
          </Paper>
          <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="90%" marginLeft="30px" marginTop="-20px"/>
          <Paper className={classes.paperButton}  elevation={0} square>
           <Button variant="outlined" color="primary" size="medium" className={classes.button} >
                Đề xuất mức giá khác <AttachMoney />
            </Button>            
            <Button variant="outlined" color="primary" size="medium" className={classes.button}>
                Mua ngay <Receipt />
            </Button>            
          </Paper>
        </Grid> 
      </Grid>
    
    
    <Grid container xs={12} >
      <Typography variant="h5" color="inherit"> Thông tin sản phẩm:</Typography>      
      <Grid item spacing={1} xs={12}>
      <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="30%"/>
      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit">
        Đây là thông tin sản phẩm........................................................
      </Typography>
      </Paper>      
      </Grid>
      
      <Grid item spacing={1}   xs={4}>
      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit"><LocalOffer fontSize='small'/> Hãng: Samsung</Typography>      
      </Paper>      
      
      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit"><BatteryUnknown fontSize='small'/> Tình trạng: Chưa sử dụng</Typography>      
      </Paper>      

      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit"><Storage fontSize='small'/> Dung lượng: Không</Typography>    
      </Paper>      
      
      </Grid>
      <Grid item spacing={1}   xs={4}>
      <Paper className={classes.paper} elevation={0} square>    
      <Typography variant="subtitle1" color="inherit"><Computer fontSize='small'/> Dòng máy: Màn hình LCD</Typography>      
      </Paper>      
      
      <Paper className={classes.paper} elevation={0} square>      
      <Typography variant="subtitle1" color="inherit"><ColorLens fontSize='small'/> Màu sắc: Đen</Typography>      
      </Paper>      

      <Paper className={classes.paper} elevation={0} square>     
      <Typography variant="subtitle1" color="inherit"><LocalShipping fontSize='small'/> Giao hàng: Không</Typography>  
      </Paper>      
      
      </Grid>
    </Grid>
    </div>        
    )
}

export default ProductSite
