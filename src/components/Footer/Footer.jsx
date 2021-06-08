import React from 'react';
import {Typography, Grid, Box, InputBase,AppBar, Toolbar, Button} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import logo from '../../assets/LogoSTU.png';
import Facebook from '../../assets/fbicon.png';
import Google from '../../assets/googleicon.png';
import Twitter from '../../assets/twittericon.png';
import {Send} from '@material-ui/icons';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Thương mại điện tử
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  const classes = useStyles();

  return (        
      <AppBar className={classes.footer} position="relative" color="" elevation={0}>
        <Toolbar>
      <Grid container justify="center" >
        <Grid item xs={6} sm={4} md={2} >
          <Grid
            container
            direction="raw"            
            className={classes.iconsWrapper}
            spacing={2}
          >            
              <img src={logo} alt="logo" width="50%" height="80%"/>          
            <Grid item className={classes.icons}>
              <a href="https://facebook.com/" className={classes.icon}>                            
              <img src={Facebook} width="100%" height="100%" alt="Facebook"/>
              </a>
              <a href="https://google.com" className={classes.icon}>
                <img src={Google} width="80%" height="80%" alt="Google" />
              </a>
              <a href="https://Twitter.com" className={classes.icon}>
              <img src={Twitter} width="100%" height="100%" alt="Twitter"/>
              </a>
            </Grid>
            <Grid item>
              <Copyright />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={4} md={2} className={classes.infoResponsive}>
        <Button size='small'  variant='oulined' color='primary' className={classes.buttonTitle}  >                
                <Typography color='inherit'>Hỗ Trợ </Typography>            
            </Button>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link href="#"className={classes.item} >Trung tâm hỗ trợ</Link>
            </li> 
            <Box borderBottom='2px solid' className={classes.box} />           
            <li className={classes.listItem}>
              <Link href="#" className={classes.item}>An toàn mua bán</Link>
            </li>
            <Box borderBottom='2px solid' className={classes.box} /> 
            <li className={classes.listItem}>
              <Link href="#" className={classes.item}>Quy định cần biết</Link>
            </li>
            <Box borderBottom='2px solid' className={classes.box} /> 
            <li className={classes.listItem}>
              <Link href="#" className={classes.item}>Liên hệ chúng tôi</Link>
            </li>
            <Box borderBottom='2px solid' className={classes.box} /> 
          </ul>
        </Grid>
        
        <Grid item xs={6} sm={4} md={2} className={classes.infoResponsive}>
        <Button size='small'  variant='oulined' color='primary' className={classes.buttonTitle}  >                
                <Typography color='inherit'>Về chúng tôi </Typography>            
            </Button>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link href="#"className={classes.item} >Giới thiệu</Link>
            </li> 
            <Box borderBottom='2px solid' className={classes.box} /> 
            <li className={classes.listItem}>
              <Link href="#" className={classes.item}>Tuyển dụng</Link>
            </li>
            <Box borderBottom='2px solid' className={classes.box} /> 
            <li className={classes.listItem}>
              <Link href="#" className={classes.item}>Truyền thông</Link>
            </li>
            <Box borderBottom='2px solid' className={classes.box} /> 
          </ul>
        </Grid>
      
        <Grid item xs={6} sm={4} md={2} className={classes.emailResponsive}>
          <Typography variant="h5" gutterBottom >
           Đăng ký nhận tin
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom >
            Đăng ký nhận tin tức khuyến mãi cũng như thông tin về sản phẩm của bạn
          </Typography> 
          <div className={classes.email}>
            <div className={classes.sendIcon}>
              <Send />
            </div>
            <InputBase
              placeholder="Email của bạn"
              classes={{
                root: classes.inputRoot
              }}              
            />
          </div>              
        </Grid>          
      </Grid>    
      </Toolbar>
      </AppBar>
  );
}