import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      [theme.breakpoints.down('890')]: {
        maxWidth: '100%'
      },
    },
  },

  textBig: {
    backgroundColor: '#f2f4f8', 
    width: '55.6%',
    [theme.breakpoints.down('510')]: {
      width: '100%',
    },
  },

  textSmall: {
    backgroundColor: '#f2f4f8', 
    width:'20%', 
    marginLeft: '10px',
    [theme.breakpoints.down('510')]: {
      width: '100%',
      marginTop: '10px',
      marginLeft: '0px'
    },
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" 
                  label="Số thẻ" 
                  variant="outlined" 
                  style={{backgroundColor: '#f2f4f8', width: '100%'}} />
      <Grid>
        <TextField id="outlined-basic" 
                    label="Tên chủ thẻ" 
                    variant="outlined" 
                    className={classes.textBig} />
        <TextField id="outlined-basic" 
                    label="MM/YY" 
                    variant="outlined" 
                    className={classes.textSmall} />
        <TextField id="outlined-basic" 
                    label="CVV" 
                    variant="outlined" 
                    className={classes.textSmall} />
      </Grid>
    </form> 
  );
}