import React from 'react';
import {IconButton, Menu, MenuItem, Tooltip, Typography } from '@material-ui/core';
import {MoreVert} from '@material-ui/icons';
import useStyles from './styles';
import {Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function PagesBtn() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    <Typography component={Link} to='/' variant="subtitle1" color="inherit" className={classes.title}> Trang chủ</Typography>,
    <Typography component={Link} to='/signup' variant="subtitle1" color="inherit" className={classes.title}> Đăng ký</Typography>,
    <Typography component={Link} to='/signin' variant="subtitle1" color="inherit" className={classes.title}> Đăng nhập</Typography>,
    <Typography component={Link} to='/fav' variant="subtitle1" color="inherit" className={classes.title}> Yêu thích</Typography>,
    <Typography component={Link} to='/product' variant="subtitle1" color="inherit" className={classes.title}> Sản phẩm</Typography>,
    <Typography component={Link} to='/profile' variant="subtitle1" color="inherit" className={classes.title}> Cửa hàng</Typography>,
    <Typography component={Link} to='/messages' variant="subtitle1" color="inherit" className={classes.title}> Tin nhắn</Typography>,
    <Typography component={Link} to='/addproduct' variant="subtitle1" color="inherit" className={classes.title}> Thêm sản phẩm</Typography>,
    <Typography component={Link} to='/editproduct' variant="subtitle1" color="inherit" className={classes.title}> Sửa sản phẩm</Typography>,
    <Typography component={Link} to='/editprofile' variant="subtitle1" color="inherit" className={classes.title}> Sửa thông tin</Typography>, 
    <Typography component={Link} to='/mall' variant="subtitle1" color="inherit" className={classes.title}> Mua sắm</Typography>,
    <Typography component={Link} to='/news' variant="subtitle1" color="inherit" className={classes.title}> Tin tức</Typography>,
    <Typography component={Link} to='/checkout' variant="subtitle1" color="inherit" className={classes.title}> Thanh toán</Typography>,
    <Typography component={Link} to='/billinfo' variant="subtitle1" color="inherit" className={classes.title}> Phương thức</Typography>,
    <Typography component={Link} to='/success' variant="subtitle1" color="inherit" className={classes.title}> Thanh toán thành công</Typography>,
  ];

  return (
      <div>
    <Tooltip  placement="top">
      <IconButton
        aria-label="more"
        aria-controls="menu"
        aria-haspopup="true"
        className={classes.button}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      </Tooltip>
      <Menu        
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}        
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    
    </div>
  );
}