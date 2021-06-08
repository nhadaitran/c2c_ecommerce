import React from 'react';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Grid,Typography,Paper,Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Lock} from '@material-ui/icons';
import useStyles from './styles';
import Facebook from '../../assets/fbicon.png';
import Google from '../../assets/googleicon.png';
import Twitter from '../../assets/twittericon.png';

 

export default function SignUpForm() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper}   elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Lock />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Họ Tên"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Số điện thoại"
                name="phoneNumber"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Địa chỉ email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Nhập lại mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Nhận thông báo thông qua email."                
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng Ký
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            <Typography component="h1" variant="subtitle2" gutterBottom>
                    Bạn đã có tài khoản ? <Link to="/signin">Đăng nhập</Link>
                </Typography>
            </Grid>
            <Box border="1px solid black" width="80%" margin="auto" />            
              <Grid item xs={12} align="center">                  
                  <Typography variant="subtitle1" color="textSecondary">Hoặc sử dụng</Typography>
                  </Grid>      
                  <Grid item className={classes.icons} xs={12}>
              <a href="https://facebook.com/" className={classes.icon}>                            
              <img src={Facebook} width="100%" height="100%" alt="Facebook"/>
              </a>
              <a href="https://google.com" className={classes.icon}>
                <img src={Google} width="75%" height="75%" alt="Google" />
              </a>
              <a href="https://Twitter.com" className={classes.icon}>
              <img src={Twitter} width="100%" height="100%" alt="Twitter"/>
              </a>
            </Grid>
            </Grid>
        </form>
      </div>      
    </Grid>
    </Grid>
  );
}