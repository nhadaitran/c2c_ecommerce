import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <Grid>
        <TextField id="outlined-basic" 
                    label="Họ và tên" 
                    variant="outlined" 
                    style={{backgroundColor: '#f2f4f8', width:'60%'}} />
        <TextField id="outlined-basic" 
                    label="Số điện thoại" 
                    variant="outlined" 
                    style={{backgroundColor: '#f2f4f8', width:'35%', marginLeft: '5%'}} />
      </Grid>
      <TextField id="outlined-basic" label="Công ty (Không bắt buộc)" variant="outlined" style={{backgroundColor: '#f2f4f8'}} />
      <TextField id="outlined-basic" label="Địa chỉ" variant="outlined" style={{backgroundColor: '#f2f4f8'}} />
    </form> 
  );
}