import React from 'react';
import logo from '../../assets/LogoSTU.png';
import useStyles from './styles';
import {Link } from 'react-router-dom';

// Material UI
import {AppBar, Toolbar, IconButton, Badge, Typography,  InputBase, Menu, MenuItem} from '@material-ui/core';
import { FavoriteBorder, AccountCircle, Message, Search,Home, ShoppingCart,Announcement } from '@material-ui/icons';

const Navbar = ({totalItems}) => {  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(false);
  const open = Boolean(anchorEl);


  const handleMenu = () => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };


    return (
        <>
        <AppBar position='sticky'  className={classes.appBar} color="inherit">
            <Toolbar>
              <div className={classes.leftSide}>                     
              <img src={logo} alt="SMarket" height="50px" className={classes.image} />     
                <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">                
                    Trang chủ
                </Typography>                
                <Typography component={Link} to='/mall' variant="h6" className={classes.title} color="inherit">                  
                    Mua sắm
                </Typography>
                <Typography component={Link} to='/news' variant="h6" className={classes.title} color="inherit">
                    Tin tức
                </Typography> 

                <div className={classes.menuAppbar}>
              <IconButton
                aria-label="menu-appbar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onMouseOver={handleMenu}                        
              >
                <img src={logo} component={Link} to='/'  alt="SMarket" height="50px" />
              </IconButton>     
                <Menu id="menu-appbar"
                anchorEl={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}>
                  <MenuItem>
                    <IconButton component={Link} to='/' aria-label="Home" color="inherit">                        
                      <Home />                        
                    </IconButton>
                    <p>Trang Chủ</p>
                  </MenuItem>
                  <MenuItem>
                    <IconButton component={Link} to='/' aria-label="Shopping" color="inherit">                        
                      <ShoppingCart />                        
                    </IconButton>
                    <p>Mua Sắm</p>
                  </MenuItem>
                  <MenuItem>
                    <IconButton component={Link} to='/' aria-label="News" color="inherit">                        
                      <Announcement />                        
                    </IconButton>
                    <p>Tin Tức</p>
                  </MenuItem>
                  <MenuItem>
                    <IconButton component={Link} to="/fav" aria-label="Show favorite items" color="inherit">
                      <Badge badgeContent={totalItems} color="secondary">
                        <FavoriteBorder />
                      </Badge>
                    </IconButton>
                    <p>Yêu Thích</p>
                  </MenuItem>
                  <MenuItem>
                    <IconButton component={Link} to='/messages' aria-label="Message" color="inherit">                        
                        <Badge badgeContent ={totalItems} color="secondary"><Message /> </Badge>
                    </IconButton>
                    <p>Tin Nhắn</p>
                  </MenuItem>
                  <MenuItem>
                    <IconButton component={Link} to='/signin' aria-label="Account" color="inherit">                        
                      <AccountCircle />                        
                    </IconButton>
                    <p>Tài Khoản</p>
                  </MenuItem>
                </Menu>
                </div>
                </div>

                <div className={classes.rightSide}>
                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Tìm sản phẩm"
              classes={{
                root: classes.inputRoot
              }}
            />
          </div>              
                <div className={classes.button}>                 
                <IconButton component={Link} to='/fav' aria-label="Show favorite items" color="inherit">
                        <Badge badgeContent ={totalItems} color="secondary">
                            <FavoriteBorder />
                        </Badge>
                    </IconButton>
                    <IconButton component={Link} to='/messages' aria-label="Message" color="inherit">                                            
                            <Message />                                      
                    </IconButton>
                    <IconButton component={Link} to='/signin' aria-label="Account" color="inherit">                        
                            <AccountCircle />                        
                    </IconButton>
                </div>                                             
                </div>
            </Toolbar>    
        </AppBar>           
        </>
    )
};


export default Navbar
