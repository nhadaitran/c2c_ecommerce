import React, {useState, useEffect}from 'react';
import logo from '../../assets/LogoSTU.png';
import useStyles from './styles';
import {Link} from 'react-router-dom';

// Material UI
import {AppBar, Toolbar, IconButton, Badge, Typography,  InputBase} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const [header, setHeader] = useState("relative");

      
  useEffect(() => {
    window.onscroll = () => {
        if(window.scrollY === 0)
        setHeader("relative")
        else
        setHeader("fixed")
    }
  }, []);
      


    return (
        <>
        <AppBar position={header}  className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="SMarket" height="50px" className={classes.image} />
                    Trang chủ
                </Typography>                
                <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">                  
                    Mua sắm
                </Typography>
                <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    Tin tức
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Tìm sản phẩm"
              classes={{
                root: classes.inputRoot
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>              
                <div className={classes.button}>                 
                <IconButton component={Link} to='/fav' aria-label="Show favorite items" color="inherit">
                        <Badge badgeContent ={totalItems} color="secondary">
                            <FavoriteBorderIcon />
                        </Badge>
                    </IconButton>
                    <IconButton component={Link} to='/fav' aria-label="Message" color="inherit">                        
                    <Badge badgeContent ={totalItems} color="secondary">
                            <MessageIcon />          
                            </Badge>              
                    </IconButton>
                    <IconButton component={Link} to='/fav' aria-label="Account" color="inherit">                        
                            <AccountCircleIcon />                        
                    </IconButton>
                </div>
            </Toolbar>    
        </AppBar>     
        </>
    )
};


export default Navbar
