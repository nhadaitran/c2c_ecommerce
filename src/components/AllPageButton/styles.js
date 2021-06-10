import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
button:{
    position: 'fixed',      
    left: '95%',
    bottom: '5%',
    fontSize:'3rem',
    zIndex:1,
    cursor: 'pointer',
    color: 'green',
    "&:hover": {          
      backgroundColor: 'rgba(0, 0,0,0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
},
title:{
  flexGrow:0.05,
  alignItems: 'center',
  display: 'flex',
  textDecoration: 'none',
  marginLeft:'auto',
  marginRight:'auto',
  "&:hover": {          
    color: 'green',
    background: 'white',
},
},
  }));