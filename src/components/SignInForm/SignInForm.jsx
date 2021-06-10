import React, {useState} from 'react';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Paper,Box,Grid,Typography} from '@material-ui/core';
import {Lock} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import Facebook from '../../assets/fbicon.png';
import Google from '../../assets/googleicon.png';
import Twitter from '../../assets/twittericon.png';
// import axios from 'axios';


const projectID = 'f1bd45bd-ac81-4a7c-8ccf-f28ec7d7fe1d';


export default function SignInForm() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if((username !== 'AdminTest' && password !=='12345') || (username !== 'test1' && password !=='12345') || (username !== 'test2' && password !=='12345') ){
      localStorage.setItem('username', 'AdminTest');
      localStorage.setItem('password', '12345');         
      setError('Sai tài khoản hoặc mật khẩu')
    }
    else{
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);          
  }
  window.location.reload();
    // const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
    // try {      
    //   await axios.post('https://api.chatengine.io/chats', { headers: authObject });  

    //   localStorage.setItem('username', username);
    //   localStorage.setItem('password', password);      
      
    //   window.locale.reload();      
    //   setError("")
    // } catch (err) {
    //   setError('Phát sinh lỗi !! Không thể truy cập !!');      
    // }
    
  };


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}><Lock /></Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>          
          <form className={classes.form} noValidate >
            <TextField              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="text"
              autoFocus              
              onChange={(e) => setUsername(e.target.value)} 
            />
            <TextField              
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)} 
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lưu đăng nhập"              
            />
            {error}
            <Button            
              type="submit"
              fullWidth
              variant="contained"
              color="primary"              
              className={classes.submit}                
              onClick={handleSubmit}                    
            >
              Đăng nhập              
            </Button>
            <Grid container justify="space-between" >
              <Grid item >
                <Link href="#" variant="body2">
                  Quên mật khẩu
                </Link>
              </Grid>              
              <Grid item >
              <Typography component="h1" variant="subtitle2" gutterBottom>
                    Bạn chưa có tài khoản ? <Link to="/signup">Đăng ký</Link>
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