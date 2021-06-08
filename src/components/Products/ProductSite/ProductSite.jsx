import {React,useState} from 'react';
import useStyles from './styles';
import {Typography, Grid, Button, Paper, Box, IconButton, AppBar, Toolbar, Menu, MenuItem } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {ArrowForward, PermIdentity, Star, StarHalf, StarOutline,Call,Chat, FavoriteBorder,AttachMoney,Receipt} from '@material-ui/icons';
import {LocalOffer,Storage,ColorLens,LocalShipping,BatteryUnknown,Computer, Apps} from '@material-ui/icons';
import Slideshow from '../../Slideshow/Slideshow';
import ChangePriceBtn from './ChangePrice/ChangePriceBtn';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import faker from 'faker';


const ProductSite = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const [openPrice, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const contentStyle = { maxWidth: '30%', };
    var faker = require('faker/locale/vi');
    const handleMenu = () => {
      setAnchorEl(true);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    

    return (
        <div className={classes.layout}>                
      <Grid container>
        <Grid item className={classes.layoutImage} >
        <Slideshow/>
        </Grid>

      <Grid item className={classes.layoutProduct}>
          <Paper className={classes.paper} elevation={0} square>
            <Grid container spacing= {0} justify="space-between" item >
              <Grid item xs={7}>
                <Typography variant="h4"color="inherit" >
                {faker.internet.userName()}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Button className={classes.storeButton} component={Link} to='/profile' size='small' type='button' variant='contained' color='primary'>                
                    <Typography variant='inherit'>Xem thông tin </Typography><ArrowForward />                
                </Button>
                </Grid>
          </Grid>
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
          <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="90%" marginLeft="30px" className={classes.box}/>
           <Paper className={classes.paperButton}  elevation={0} square>
           <Button variant="outlined" color="primary" size="medium" className={classes.button} >
                Liên hệ người bán<Call />
            </Button>            
            <Button variant="outlined" color="primary" size="medium" className={classes.button}>
                Nhắn tin người bán<Chat />
            </Button>            
          </Paper>
          <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="90%" marginLeft="30px" />
          <Paper className={classes.paper} elevation={0} square>
            <Typography  variant="h5" color="inherit">
              {faker.commerce.productName()}
            </Typography>                       
          </Paper>
          <Paper className={classes.paper} elevation={0} square>
            <Typography variant="h6" color="error" >
              {faker.finance.currencySymbol()}
              {faker.commerce.price()}
            </Typography>                        
            <IconButton size='small' type='button' variant='contained' ><FavoriteBorder color='error' /></IconButton>                
          </Paper>
          <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="90%" marginLeft="30px" marginTop="-20px" className={classes.box}/>
          <Paper className={classes.paperButton}  elevation={0} square>
           <Button variant="outlined" color="primary" size="medium" className={classes.button} onClick={() => setOpen(o => !o)}>
                Đề xuất mức giá khác <AttachMoney />
            </Button>                        
            <Button variant="outlined" color="primary" size="medium" className={classes.button}>
                Mua ngay <Receipt />
            </Button>            
          </Paper>
        </Grid> 
      </Grid>

      <Popup open={openPrice} closeOnDocumentClick onClose={closeModal} 
    {...{contentStyle }}>
      <ChangePriceBtn/>
    </Popup>

    
      <Typography variant="h5" color="inherit"> Thông tin sản phẩm:</Typography>      
      <Box borderBottom='2px solid' borderColor="primary.main" maxWidth="30%"/>
    <Grid container>
      <Grid item >    
      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit">
        {faker.commerce.productDescription()}
      </Typography>
      </Paper>      
      </Grid>
      <Grid container>
      <Grid item >
      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit"><LocalOffer fontSize='small'/> Hãng: {faker.company.suffixes()}</Typography>      
      </Paper>      
      
      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit"><BatteryUnknown fontSize='small'/> Tình trạng: {faker.commerce.productAdjective()}</Typography>      
      </Paper>      

      <Paper className={classes.paper} elevation={0} square>
      <Typography variant="subtitle1" color="inherit"><Storage fontSize='small'/> Dung lượng: Không</Typography>    
      </Paper>      
      
      </Grid>
      <Grid item   >
      <Paper className={classes.paper} elevation={0} square>    
      <Typography variant="subtitle1" color="inherit"><Computer fontSize='small'/> Dòng máy: {faker.commerce.productMaterial()}</Typography>      
      </Paper>      
      
      <Paper className={classes.paper} elevation={0} square>      
      <Typography variant="subtitle1" color="inherit"><ColorLens fontSize='small'/> Màu sắc: {faker.commerce.color()}</Typography>      
      </Paper>      

      <Paper className={classes.paper} elevation={0} square>     
      <Typography variant="subtitle1" color="inherit"><LocalShipping fontSize='small'/> Giao hàng: Không</Typography>  
      </Paper>      
      </Grid>
      </Grid>
    </Grid>
    <AppBar position="fixed" color="white" className={classes.appBar}>
        <Toolbar>
        <Button variant="container" color="primary" size="medium" className={classes.appbarButton} >
                Liên hệ người bán<Call />
            </Button>            
            <Button variant="container" color="primary" size="medium" className={classes.appbarButton}>
                Nhắn tin người bán<Chat />
            </Button>    
                <Button variant="container" color="primary" size="medium" className={classes.appbarButton} onClick={() => setOpen(o => !o)}>
                Đề xuất mức giá khác <AttachMoney />
            </Button>            
            <Button variant="container" color="primary" size="medium" className={classes.appbarButton}>
                Mua ngay <Receipt />
            </Button>         
            
            {/* Responsive <860px */}
            <div className={classes.menuAppbar}>
              <IconButton
                aria-label="menu-appbar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                className={classes.smallappbarButton}
                onClick={handleMenu}                        
              >           
              <Apps/>     
              </IconButton>     
                <Menu id="menu-appbar"
                anchorEl={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}>
                  <MenuItem>
                      <Button variant="container" color="primary" size="medium"  >
                          Liên hệ người bán<Call />
                      </Button>         
                      </MenuItem>
                      <MenuItem>   
                      <Button variant="container" color="primary" size="medium" >
                          Nhắn tin người bán<Chat />
                      </Button>
                      </MenuItem>
                      <MenuItem>    
                          <Button variant="container" color="primary" size="medium"  onClick={() => setOpen(o => !o)}>
                          Đề xuất mức giá khác <AttachMoney />
                      </Button> 
                      </MenuItem>
                      <MenuItem>           
                      <Button variant="container" color="primary" size="medium" >
                          Mua ngay <Receipt />
                      </Button>         
                  </MenuItem>
                </Menu>
                </div>

                {/* Close Responsive <860px */}

        </Toolbar>
      </AppBar>
    </div>        
    )
}

export default ProductSite
